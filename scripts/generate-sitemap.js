#!/usr/bin/env node
import fs from "fs";
import path from "path";

// === 1) Einstellungen ===
const PROJECT_ROOT = process.cwd();
const MAIN_FILE = path.join(PROJECT_ROOT, "src", "main.jsx"); // Pfad zu deiner main.jsx
const OUTPUT = path.join(PROJECT_ROOT, "sitemap.xml");
const BASE_URL = "https://erikquint.de"; // <- hier deine Domain

// === 2) main.jsx einlesen und Kommentare entfernen ===
let txt = fs.readFileSync(MAIN_FILE, "utf8");
// Block-Kommentare entfernen
txt = txt.replace(/\/\*[\s\S]*?\*\//g, "");
// Zeilen-Kommentare entfernen
txt = txt.replace(/\/\/.*$/gm, "");

// === 3) Pfade aus createBrowserRouter-Definition extrahieren ===
const pathRegex = /path\s*:\s*["'`]([^"'`]+?)["'`]/g;
const paths = new Set();
let m;
while ((m = pathRegex.exec(txt))) {
  const p = m[1].trim();
  // dynamische Segmente oder Fallback-Route überspringen
  if (!p.includes(":") && p !== "*") {
    // führenden Slash sicherstellen
    paths.add(p.startsWith("/") ? p : `/${p}`);
  }
}

if (paths.size === 0) {
  console.error("⚠️ Keine Routen in main.jsx gefunden.");
  process.exit(1);
}

// === 4) XML-Namespaces definieren ===
const namespaces = [
  `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
  `xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"`,
  `xmlns:xhtml="http://www.w3.org/1999/xhtml"`,
  `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"`,
  `xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"`,
].join(" ");

// === 5) Datum für <lastmod> berechnen ===
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// === 6) sitemap.xml zusammenbauen mit lastmod und neuen Meta-Regeln ===
const urlEntries = [...paths]
  .sort()
  .map((p) => {
    let changefreq, priority;
    if (p === "/") {
      changefreq = "daily";
      priority = "1.0";
    } else if (["/impressum", "/datenschutz", "/agb"].includes(p)) {
      changefreq = "weekly";
      priority = "0.5";
    } else {
      changefreq = "weekly";
      priority = "0.8";
    }
    return `  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${namespaces}>
${urlEntries}
</urlset>
`;

// === 7) Datei schreiben ===
fs.writeFileSync(OUTPUT, sitemap);
console.log(`✅ sitemap.xml erzeugt: ${OUTPUT}`);
