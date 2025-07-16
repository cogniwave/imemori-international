const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

// Create dist if it doesn't exist
if (!fs.existsSync("dist")) fs.mkdirSync("dist");

// Copy HTML
fs.copyFileSync("src/index.html", "dist/index.html");

// Minify and copy CSS (basic)
const css = fs.readFileSync("src/styles.css", "utf8");
const minifiedCss = css.replace(/\s+/g, " ").replace(/\/\*.*?\*\//g, "");
fs.writeFileSync("dist/styles.css", minifiedCss);

// Build JS
esbuild.build({
  entryPoints: ["src/script.js"],
  bundle: true,
  minify: true,
  target: ["es2017"],
  outfile: "dist/script.js",
}).catch(() => process.exit(1));
