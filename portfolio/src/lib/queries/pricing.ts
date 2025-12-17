//TODO: Implement
import {db} from "@/lib/db"

//DB Rows
type PricingCategoryRow = {
    id: number;
    slug: string;
    label: string;
};

type PricingPackageRow = {
    id: number;
    category_id: number;
    title: string;
    blurb: string;
    price_text: string;
    email_subject: string;
    sort_order: number;
};

type PricingFeatureRow = {
    package_id: number;
    text: string;
    sort_order: number;
};

//Return DTOs
export type PricingPackage = {
    id: number;
    title: string;
    blurb: string;
    price: string;
    emailSubject: string;
    features: string[];
};

export type PricingCategory = {
    slug: string;
    label: string;
    packages: PricingPackage[];
}

//Main Query
export function getPricing(): PricingCategory[] {
    //First the categories
    const categories = db.prepare(`
        SELECT id, slug, label
        FROM pricing_category
        ORDER BY id ASC
        `).all() as PricingCategoryRow[];
    
    //Now get the packages
    const packages = db.prepare(`
        SELECT * FROM pricing_package ORDER BY category_id ASC, sort_order ASC
        `).all() as PricingPackageRow[];

    //Now the Features
    const features = db.prepare(`
        SELECT package_id, text, sort_order
        FROM pricing_feature
        ORDER BY package_id ASC, sort_order ASC
        `).all() as PricingFeatureRow[];

    //Group features by package.
    const featuresByPackage = new Map<number, string[]>();
    for (const f of features) {
        const arr = featuresByPackage.get(f.package_id) ?? [];
        arr.push(f.text);
        featuresByPackage.set(f.package_id, arr);
    }

    //Group packages by category
    const packagesByCategory = new Map<number, PricingPackage[]>();
    for (const p of packages) {
        const pkg: PricingPackage = {
            id: p.id,
            title: p.title,
            blurb: p.blurb,
            price: p.price_text,
            emailSubject: p.email_subject,
            features: featuresByPackage.get(p.id) ?? []
        };

        const arr = packagesByCategory.get(p.category_id) ?? [];
        arr.push(pkg);
        packagesByCategory.set(p.category_id, arr);
    }

    //Assemble final structure
    return categories.map((c) => ({
        slug: c.slug,
        label: c.label,
        packages: packagesByCategory.get(c.id) ??[]
    }));
}

export interface PackageProps {
  id: number;
  title: string;
  blurb: string;
  features: string[];
  price: string;
  emailSubject: string;
}
