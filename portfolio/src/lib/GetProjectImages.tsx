import path from "path"
import {promises as fs} from "fs"

const VALID_IMG_EXT = new Set([".jpg", ".jpeg", ".png"]);

export async function getProjectImages(publicDir: string): Promise<string[]> {
    if(!publicDir || publicDir === "/") return [];

    const safe = publicDir.startsWith("/") ? publicDir : `/${publicDir}`;
    const abs = path.join(process.cwd(), "public", safe);

    try {
        const entries = await fs.readdir(abs, {withFileTypes: true});
        const files = entries
            .filter((e) => e.isFile())
            .map((e) => e.name)
            .filter((name) => VALID_IMG_EXT.has(path.extname(name).toLowerCase()))
            .sort((a,b) => a.localeCompare(b, undefined, {numeric: true}));

            return files.map((name) => path.posix.join(safe,name));
    } catch (err) {
        //Folder is missing or cannot read
        return [];
    }
}