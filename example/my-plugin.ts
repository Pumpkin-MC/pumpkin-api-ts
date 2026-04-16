import { Plugin, registerPlugin, server, logging, context, event, text, PluginMetadata } from '../src/index';

class MyPlugin extends Plugin {
    metadata(): PluginMetadata {
        return {
            name: "My TypeScript Plugin",
            version: "0.1.0",
            authors: ["alex"],
            description: "A sample plugin written in TypeScript",
            dependencies: []
        };
    }

    onLoad(ctx: context.Context): void {
        super.onLoad(ctx);
        logging.info("Hello from TypeScript plugin!");

        this.registerEvent(ctx, 'player-join-event', (srv, evt) => {
            logging.info(`Player ${evt.player.getName()} joined!`);
            srv.broadcast(text.TextComponent.text(`Welcome ${evt.player.getName()} to the server!`));
        });
    }
}

registerPlugin(new MyPlugin());
