# Pumpkin API for TypeScript

This package provides the TypeScript bindings for building [Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) plugins using WebAssembly (Wasm) components.

## Features

- **Type-safe API**: Full TypeScript definitions for all Pumpkin plugin interfaces.
- **Easy Build Process**: Includes a build script to bundle your TypeScript code and componentize it into a `.wasm` file.
- **Wasm Components**: Built on the WebAssembly Component Model for high performance and portability.

## Installation

```bash
npm install
```

## Creating a Plugin

1. Create a new TypeScript file (e.g., `my-plugin.ts`).
2. Extend the `Plugin` class and implement the `metadata()` method.
3. Register your plugin using `registerPlugin()`.

Example:

```typescript
import { Plugin, registerPlugin, logging, context, PluginMetadata } from 'pumpkin-api-ts';

class MyPlugin extends Plugin {
    metadata(): PluginMetadata {
        return {
            name: "My Awesome Plugin",
            version: "0.1.0",
            authors: ["Your Name"],
            description: "A cool plugin for Pumpkin",
            dependencies: []
        };
    }

    onLoad(ctx: context.Context): void {
        logging.info("Plugin loaded!");
    }
}

registerPlugin(new MyPlugin());
```

## Building Your Plugin

To build your plugin into a `.wasm` component, use the provided build script:

```bash
npm run build-plugin -- <entry-file.ts> <output-file.wasm>
```

Example:

```bash
npm run build-plugin -- example/my-plugin.ts my-plugin.wasm
```



