#! /usr/bin/env node

import * as esbuild from "esbuild";
import { componentize } from "componentize-qjs";
import * as path from "node:path";
import * as fs from "node:fs";

const bundledWitDir = path.join(import.meta.dirname, "../wit/v0.1");

async function buildPlugin(entryPath, outputPath, witDir) {
  const tempJs = path.join(path.dirname(outputPath), "temp.js");

  console.log(`1. Bundling ${entryPath}...`);
  await esbuild.build({
    entryPoints: [entryPath],
    bundle: true,
    outfile: tempJs,
    format: "esm",
    target: "es2022",
    // Externalize the host-provided imports
    external: ["pumpkin:plugin/*"],
  });

  console.log(`2. Running through \`componentize-qjs\`...`);
  try {
    const { component } = await componentize({
      worldName: "plugin",
      witPath: witDir,
      jsSource: fs.readFileSync(tempJs, "utf8"),
      optSize: true,
      sync: fs.realpathSync.native(bundledWitDir) === fs.realpathSync.native(witDir),
      minify: true,
    });

    fs.writeFileSync(outputPath, component);
  } catch (err) {
    console.error("Failed to componentize:", err);
    process.exit(1);
  } finally {
    // Clean up
    if (fs.existsSync(tempJs)) {
      fs.unlinkSync(tempJs);
    }
  }

  console.log(`Successfully built plugin to ${outputPath}`);
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: node build.js <entry.ts> <output.wasm> [wit-dir]");
  process.exit(1);
}

const entry = args[0];
const output = args[1];
const wit = args[2] || bundledWitDir;

buildPlugin(entry, output, wit).catch((err) => {
  console.error(err);
  process.exit(1);
});
