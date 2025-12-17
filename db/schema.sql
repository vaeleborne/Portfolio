-- db/schema.sql
PRAGMA foreign_keys = ON;

-- Pricing --
CREATE TABLE IF NOT EXISTS pricing_category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,  --web, app, other
    label TEXT NOT NULL         -- Web, Apps, Other
);

CREATE TABLE IF NOT EXISTS pricing_package (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    blurb TEXT NOT NULL,
    price_text TEXT NOT NULL, -- "$500, Bundled Discounts Available, etc"
    email_subject TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES pricing_category(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS pricing_feature (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    package_id INTEGER NOT NULL,
    text TEXT NOT NULL, 
    sort_order INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (package_id) REFERENCES pricing_package(id) ON DELETE CASCADE
);

-- Projects
CREATE TABLE IF NOT EXISTS project (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    description_md TEXT NOT NULL,
    image_dir TEXT,
    github_url TEXT,
    app_store_url TEXT,
    sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS technology (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL UNIQUE,
    background_experience TEXT
);

CREATE TABLE IF NOT EXISTS project_technology (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_id INTEGER NOT NULL,
    technology_id INTEGER NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE,
    FOREIGN KEY (technology_id) REFERENCES technology(id) ON DELETE CASCADE,
    UNIQUE (project_id, technology_id)
);

CREATE INDEX IF NOT EXISTS idx_pricing_package_category ON pricing_package(category_id);
CREATE INDEX IF NOT EXISTS idx_project_technology_project ON project_technology(project_id);
CREATE INDEX IF NOT EXISTS idx_project_technology_technology ON project_technology(technology_id);

