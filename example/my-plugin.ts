import { Plugin, registerPlugin } from "@pumpkinmc/pumpkin-api-ts";

import { PluginMetadata } from "pumpkin:plugin/metadata@0.2.0";
import { Context } from "pumpkin:plugin/context@0.2.0";
import { TextComponent } from "pumpkin:plugin/text@0.2.0";
import * as logging from "pumpkin:plugin/logging@0.2.0";
import { Event } from "pumpkin:plugin/event@0.2.0";

class MyPlugin extends Plugin {
  metadata(): PluginMetadata {
    return {
      name: "My TypeScript Plugin",
      version: "0.1.0",
      authors: ["alex"],
      description: "A sample plugin written in TypeScript",
      dependencies: [],
      permissions: [],
    };
  }
  onLoad(ctx: Context): void {
    super.onLoad(ctx);
    logging.log("info", "Hello from TypeScript plugin!");

    this.registerEvent(ctx, "player-join", (_srv, evt: Event) => {
      const data = evt.getPlayerJoin();
      logging.log("info", `Player ${data.player.getName()} joined!`);

      data.player
        .getWorld()
        .broadcastSystemMessage(
          TextComponent.text(`Welcome ${data.player.getName()} to the server!`),
          false,
        );
    });
  }
}

registerPlugin(new MyPlugin());

export * from "@pumpkinmc/pumpkin-api-ts";
