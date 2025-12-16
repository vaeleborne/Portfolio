import {db} from "@/lib/db"

export type ProjectRow = {
    id: number;
    title: string;
    description_md: string;
    image_dir: string | null;
    github_url: string | null;
    app_store_url: string | null;
    sort_order: number;
};

export function getProjects() {
    const projects = db.prepare(`
        SELECT id, title, description_md, image_dir, github_url, app_store_url, sort_order
        FROM project
        ORDER BY sort_order ASC, id ASC
        `)
        .all() as ProjectRow[];

    const techRows = db.prepare(`
        SELECT pt.project_id AS project_id, t.title AS tech_title, pt.sort_order AS sort_order
        FROM project_technology pt
        JOIN technology t ON t.id = pt.technology_id
        ORDER BY pt.project_id ASC, pt.sort_order ASC
        `).all() as {project_id: number; tech_title: string; sort_order: number;}[];

    const techByProject = new Map<number, string[]>();

    for (const row of techRows) {
        const arr = techByProject.get(row.project_id) ?? [];
        arr.push(row.tech_title);
        techByProject.set(row.project_id, arr);
    }

    return projects.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.description_md,
        technologies: techByProject.get(p.id) ?? [],
        github: p.github_url,
        imageDir: p.image_dir ?? "",
        appStore: p.app_store_url
    }));
}
