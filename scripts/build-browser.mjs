import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const root = fileURLToPath(new URL("../", import.meta.url));
const babelPath = join(root, "public", "vendor", "babel.min.js");
const sourceFiles = [
  join(root, "src", "data", "travelItems.ts"),
  join(root, "src", "data", "suggestedItinerary.ts"),
  join(root, "src", "main.tsx")
];
const outputDir = join(root, "dist");
const outputPath = join(outputDir, "main.js");

const sandbox = {};
sandbox.globalThis = sandbox;
sandbox.self = sandbox;
sandbox.window = sandbox;

vm.runInNewContext(readFileSync(babelPath, "utf8"), sandbox, { filename: babelPath });

if (!sandbox.Babel?.transform) {
  throw new Error("Babel standalone did not load correctly.");
}

const { Babel } = sandbox;
const source = sourceFiles
  .map((filePath) =>
    readFileSync(filePath, "utf8")
      .replace(/^\s*import\s+type\s+.*?;\s*$/gm, "")
      .replace(/^\s*import\s+.*?;\s*$/gm, "")
      .replace(/\bexport\s+(?=(type|const|let|var|function|class|interface)\b)/g, "")
  )
  .join("\n\n");
const result = Babel.transform(source, {
  filename: "src/main.tsx",
  comments: false,
  presets: [
    [Babel.availablePresets.typescript, { allExtensions: true, isTSX: true }],
    [Babel.availablePresets.react, { runtime: "classic" }]
  ]
});

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, `${result.code}\n`, "utf8");
console.log(`Built ${outputPath}`);
