import fs from "fs";
import path from "path";
import readline from "readline-sync";

const PROJECT_ROOT = process.cwd();
const IMG_DIR = path.join(PROJECT_ROOT, "src/images");
const IGNORE = ["node_modules", ".git", "build", "dist"];
const CODE_EXTS = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".html",
  ".css",
  ".scss",
  ".vue",
];

// rekursives Auflisten aller Dateien (außer ignorierte Ordner)
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return IGNORE.includes(entry.name) ? [] : walk(full);
    }
    return [full];
  });
}

const images = walk(IMG_DIR);
const code = walk(PROJECT_ROOT).filter((f) =>
  CODE_EXTS.includes(path.extname(f).toLowerCase())
);

const unused = images.filter((img) => {
  const contentCandidates = [];

  // 1) voller Pfad ab Projekt-Root, z.B. "src/images/courses/yoga.svg"
  const relFromRoot = path.relative(PROJECT_ROOT, img).replace(/\\/g, "/");
  contentCandidates.push(relFromRoot);

  // 2) Pfad relativ zum src-Ordner, z.B. "images/courses/yoga.svg"
  const relFromSrc = path
    .relative(path.join(PROJECT_ROOT, "src"), img)
    .replace(/\\/g, "/");
  contentCandidates.push(relFromSrc);

  // 3) führender Slash vor src-Pfad, z.B. "/src/images/..."
  contentCandidates.push("/" + relFromRoot);

  // 4) reiner Dateiname
  contentCandidates.push(path.basename(img));

  // Suche in allen Code-Dateien nach einem der Kandidaten
  return !code.some((file) => {
    try {
      const txt = fs.readFileSync(file, "utf8");
      return contentCandidates.some((candidate) => txt.includes(candidate));
    } catch {
      return false;
    }
  });
});

if (!unused.length) {
  console.log("🎉 Keine ungenutzten Bilder gefunden.");
  process.exit(0);
}

console.log("⚠️ Ungenutzte Bilder:");
unused.forEach((f) => console.log("  •", f));

if (
  readline.question("\nMöchtest Du diese löschen? (j/N) ").toLowerCase() === "j"
) {
  unused.forEach((f) => {
    fs.unlinkSync(f);
    console.log("✅ Gelöscht:", f);
  });
} else {
  console.log("Abgebrochen.");
}
