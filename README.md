# Pumpkin API for TypeScript

This package provides the TypeScript bindings for building [Pumpkin](https://github.com/Pumpkin-MC/Pumpkin) plugins using WebAssembly (Wasm) components.

## Features

- **Type-safe API**: Full TypeScript definitions for all Pumpkin plugin interfaces.
- **Easy Build Process**: Includes a build script to bundle your TypeScript code and componentize it into a `.wasm` file.
- **Wasm Components**: Built on the WebAssembly Component Model for high performance and portability.

## Installation

```bash
npm install @pumpkinmc/pumpkin-api-ts
```

## Creating a Plugin

1. Create a new TypeScript file (e.g., `my-plugin.ts`).
2. Extend the `Plugin` class and implement the `metadata()` method.
3. Register your plugin using `registerPlugin()`.
4. Add `export * from "@pumpkinmc/pumpkin-api-ts";` at the end.

Example:
```typescript
import { Plugin, registerPlugin } from "@pumpkinmc/pumpkin-api-ts";

import { PluginMetadata } from "pumpkin:plugin/metadata";
import { Context } from "pumpkin:plugin/context";
import { TextComponent } from "pumpkin:plugin/text";
import * as logging from "pumpkin:plugin/logging";
import { PlayerJoinEventData } from "pumpkin:plugin/event";

class MyPlugin extends Plugin {
  metadata(): PluginMetadata {
    return {
      name: "My TypeScript Plugin",
      version: "0.1.0",
      authors: ["alex"],
      description: "A sample plugin written in TypeScript",
      dependencies: [],
    };
  }
  onLoad(ctx: Context): void {
    super.onLoad(ctx);
    logging.log("info", "Hello from TypeScript plugin!");

    this.registerEvent(
      ctx,
      "player-join-event",
      (_srv, evt: PlayerJoinEventData) => {
        logging.log("info", `Player ${evt.player.getName()} joined!`);

        evt.player
          .getWorld()
          .broadcastSystemMessage(
            TextComponent.text(
              `Welcome ${evt.player.getName()} to the server!`,
            ),
            false,
          );
      },
    );
  }
}

registerPlugin(new MyPlugin());

export * from "@pumpkinmc/pumpkin-api-ts";
```

## Building Your Plugin

To build your plugin into a `.wasm` component, use the provided build script:

```bash
./node_modules/.bin/pumpkin-plugin-build <entry-file.ts> <output-file.wasm>
```

Example:
```bash
./node_modules/.bin/pumpkin-plugin-build my-plugin.ts build/my-plugin.wasm
```

For convience, it's recommended to add a scripts section to your `package.json`
```json
{
  "scripts": {
    "build": "pumpkin-plugin-build my-plugin.ts build/my-plugin.wasm"
  },
  "dependencies": {
    ...
  }
}
```
Execute with `npm run build`
