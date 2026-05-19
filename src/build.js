#! /usr/bin/env node

import * as esbuild from "esbuild";
import {
  componentize,
  version as componentize_version,
} from "@bytecodealliance/componentize-js";
import * as path from "node:path";
import * as fs from "node:fs";

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

  console.log(
    `2. Running through \`componentize-js\` ` + componentize_version + `...`,
  );
  try {
    const { component } = await componentize({
      worldName: "plugin",
      witPath: witDir,
      sourcePath: tempJs
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
const wit =
  args[2] ||
  path.join(import.meta.dirname, "../wit/repo/pumpkin-plugin-wit/v0.1");

buildPlugin(entry, output, wit).catch((err) => {
  console.error(err);
  process.exit(1);
});
