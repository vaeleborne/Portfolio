import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const ROOT = process.cwd();
const dbPath = path.join(ROOT, "db", "portfolio.sqlite");
const schemaPath = path.join(ROOT, "db", "schema.sql");

const pricingPath = path.join(ROOT, "data", "pricing.json");
const projectsPath = path.join(ROOT, "data", "projects.json");

const db = new Database(dbPath);
db.pragma("foreign_keys = ON");

function readJson(path) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
}

function runSchema() {
    const schema = fs.readFileSync(schemaPath, "utf8");
    db.exec(schema);
}

function normalizeTechTitle(title) {
    return String(title).toUpperCase().trim();
}



function seedPricing() {
    const pricing = JSON.parse(fs.readFileSync(pricingPath, "utf8"));

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

    const clearPricing = db.prepare(`
            DELETE FROM pricing_feature;
            DELETE FROM pricing_package;
            DELETE FROM pricing_category;
    `);

    clearPricing.exec();

    const categoryLabels = {
        web: "Web",
        app: "Apps",
        other: "Other"
    };

    for (const [slug, packages] of Object.entries(pricing)) {
        const label = categoryLabels[slug] ?? slug;
        const {id: categoryId} = insertCategory.get(slug, label);

        packages.forEach((pkg, pkgIndex) => {
            const {id: packageId} = insertPackage.get(
                categoryId,
                pkg.title,
                pkg.blurb,
                pkg.price,
                pkg.emailSubject,
                pkgIndex
            );

            (pkg.features ?? []).forEach((f, featIndex) => {
                insertFeature.run(packageId, f, featIndex);
            });
        });
    }
}

function seedProjects() {
    const projects = JSON.parse(fs.readFileSync(projectsPath, "utf8"));

    const insertProject = db.prepare(`
        INSERT INTO project
        (title, description_md, image_dir, github_url, app_store_url, sort_order)
        VALUES (?, ?, ?, ?, ?, ?)`);

    const insert 
}