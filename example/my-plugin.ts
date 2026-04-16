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
