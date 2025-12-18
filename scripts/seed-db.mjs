import fs, { read } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Database from "better-sqlite3";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");

const dbDir = path.join(ROOT, "db");
const dbPath = path.join(ROOT, "db", "portfolio.sqlite");
const schemaPath = path.join(ROOT, "db", "schema.sql");

const pricingPath = path.join(ROOT, "data", "pricing.json");
const projectsPath = path.join(ROOT, "data", "projects.json");



//Ensure db directory exists BEFORE opening sqlite
if(!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
}


const db = new Database(dbPath);
db.pragma("foreign_keys = ON");

function readJson(path) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

function normalizeTechTitle(title) {
    return String(title).toUpperCase().trim();
}

//Apply Schema
db.exec(fs.readFileSync(schemaPath, "utf8"));

//Prepared Statements

//Clear (child -> parent)
function clearAll() {
    db.exec(`
        DELETE FROM pricing_feature;
        DELETE FROM pricing_package;
        DELETE FROM pricing_category;

        DELETE FROM project_technology;
        DELETE FROM technology;
        DELETE FROM project;
    `);
}

//GetID
const getCategoryId = db.prepare(`
    SELECT id FROM pricing_category WHERE slug = ?
    `);

const getPackageId = db.prepare(`
    SELECT id FROM pricing_package 
    WHERE category_id = ? AND title = ?`);

const getProjectId = db.prepare(`
    SELECT id FROM project WHERE title = ?
    `);

const getTechnologyId = db.prepare(`
    SELECT id FROM technology WHERE title = ?
    `);

function seedPricing(pricing) {
    const insertCategory = db.prepare(`
        INSERT INTO pricing_category (slug, label)
        VALUES (?, ?)
        ON CONFLICT(slug) DO UPDATE SET label = excluded.label
        RETURNING id`);

    const insertPackage = db.prepare(`
        INSERT INTO pricing_package 
            (category_id, title, blurb, price_text, email_subject, sort_order)
        VALUES (?, ?, ?, ?, ?, ?)
        RETURNING id
        `);

    const insertFeature = db.prepare(`
        INSERT INTO pricing_feature (package_id, text, sort_order)
        VALUES (?, ?, ?)`);


    const categoryLabels = {
        web: "Web",
        app: "Apps",
        other: "Other"
    };

    for (const [slug, packages] of Object.entries(pricing)) {
        const label = categoryLabels[slug] ?? slug;
    
        insertCategory.run(slug, label);
        const categoryId = getCategoryId.get(slug).id;

        packages.forEach((pkg, pkgIndex) => {
            insertPackage.run(
                categoryId,
                pkg.title,
                pkg.blurb,
                pkg.price,
                pkg.emailSubject,
                pkgIndex
            );

            const packageId = getPackageId.get(categoryId, pkg.title).id;

            (pkg.features ?? []).forEach((featureText, featIndex) => {
                insertFeature.run(packageId, featureText, featIndex);
            });
        });
    }
}

function seedProjects(projects) {
    const insertProject = db.prepare(`
        INSERT INTO project
        (title, description_md, image_dir, github_url, app_store_url, sort_order)
        VALUES (?, ?, ?, ?, ?, ?)`);

    const insertTechology = db.prepare(`
        INSERT INTO technology (title, background_experience)
        VALUES (?, ?)
        `);

    const insertProjectTechnology = db.prepare(`
        INSERT INTO project_technology (project_id, technology_id, sort_order)
        VALUES (?, ?, ?)
        `);

    projects.forEach((p, idx) => {
        insertProject.run(
            p.title,
            p.description,
            p.imageDir ?? null,
            p.github ?? null,
            p.appStore ?? null,
            idx
        );
    });

    const techSet = new Map();
    for (const p of projects) {
        for (const t of p.technologies ?? []) {
            const norm = normalizeTechTitle(t);
            if(!norm) continue;

            //TODO: Implement the background experience in seeds
            if(!techSet.has(norm)) {
                techSet.set(norm, {title: norm, background_experience: null});
            }
        }
    }

    //Insert technologies
    for (const tech of techSet.values()) {
        insertTechology.run(tech.title, tech.background_experience);
    }

    // Create join rows project_technology
    for (const p of projects) {
        const porjectId = getProjectId.get(p.title).id;

        (p.technologies ?? []).forEach((t, techIndex) => {
            const techTitle = normalizeTechTitle(t);
            if (!techTitle) return;

            const technologyId = getTechnologyId.get(techTitle).id;
            insertProjectTechnology.run(porjectId, technologyId, techIndex);
        })
    }
}

//Run seed transaction

const seed = db.transaction(() => {
    clearAll();

    const pricing = readJson(pricingPath);
    const projects = readJson(projectsPath);

    seedPricing(pricing);
    seedProjects(projects);
});

try {
    seed();
    console.log("Seed Complete");
} catch (err) {
    console.log("Seed failed: ", err);
    process.exitCode = 1;
} finally {
    db.close();
}