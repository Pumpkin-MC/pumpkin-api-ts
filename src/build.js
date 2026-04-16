const esbuild = require('esbuild');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function buildPlugin(entryPath, outputPath, witDir) {
    const tempJs = path.join(path.dirname(outputPath), 'temp.js');
    
    console.log(`1. Bundling ${entryPath}...`);
    // 1. Bundle with esbuild
    await esbuild.build({
        entryPoints: [entryPath],
        bundle: true,
        outfile: tempJs,
        format: 'esm',
        target: 'es2022',
        // Externalize the host-provided imports
        external: ['pumpkin:plugin/*'],
    });

    console.log(`2. Componentizing with jco...`);
    // 2. Componentize with jco
    try {
        const cmd = `npx jco componentize ${tempJs} --wit ${witDir} -n plugin -o ${outputPath}`;
        console.log(`Running: ${cmd}`);
        execSync(cmd, { stdio: 'inherit' });
    } catch (err) {
        console.error("Failed to componentize:");
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
const wit = args[2] || path.join(__dirname, '../wit/repo/pumpkin-plugin-wit/v0.1.0');

buildPlugin(entry, output, wit).catch(err => {
    console.error(err);
    process.exit(1);
});
