import * as block_entity_imported from 'pumpkin:plugin/block-entity';
import * as command_imported from 'pumpkin:plugin/command';
import * as context_imported from 'pumpkin:plugin/context';
import * as entity_imported from 'pumpkin:plugin/entity';
import * as event_imported from 'pumpkin:plugin/event';
import * as gui_imported from 'pumpkin:plugin/gui';
import * as i18n_imported from 'pumpkin:plugin/i18n';
import * as logging_imported from 'pumpkin:plugin/logging';
import * as metadata_imported from 'pumpkin:plugin/metadata';
import * as permission_imported from 'pumpkin:plugin/permission';
import * as player_imported from 'pumpkin:plugin/player';
import * as scheduler_imported from 'pumpkin:plugin/scheduler';
import * as scoreboard_imported from 'pumpkin:plugin/scoreboard';
import * as server_imported from 'pumpkin:plugin/server';
import * as text_imported from 'pumpkin:plugin/text';
import * as world_imported from 'pumpkin:plugin/world';

export { 
    block_entity_imported as blockEntity,
    command_imported as command, 
    context_imported as context, 
    entity_imported as entity,
    event_imported as event, 
    gui_imported as gui,
    i18n_imported as i18n,
    logging_imported as logging, 
    permission_imported as permission,
    player_imported as player,
    scheduler_imported as scheduler,
    scoreboard_imported as scoreboard,
    server_imported as server, 
    text_imported as text, 
    world_imported as world
};

export interface PluginMetadata {
    name: string;
    version: string;
    authors: string[];
    description: string;
    dependencies: string[];
}

export type EventHandler<T = any> = (srv: server_imported.Server, evt: T) => T | void;
export type CommandHandler = (sender: command_imported.CommandSender, srv: server_imported.Server, args: command_imported.ConsumedArgs) => number;
export type TaskHandler = (srv: server_imported.Server) => void;

let pluginInstance: Plugin | null = null;
const eventHandlers = new Map<number, EventHandler>();
const commandHandlers = new Map<number, CommandHandler>();
const taskHandlers = new Map<number, TaskHandler>();
let nextHandlerId = 0;

function getNextHandlerId(): number {
    return nextHandlerId++;
}

export abstract class Plugin {
    private pendingEvents: Array<{
        eventType: event_imported.EventType;
        handler: EventHandler;
        priority: event_imported.EventPriority;
        blocking: boolean;
    }> = [];

    abstract metadata(): PluginMetadata;

    onLoad(ctx: context_imported.Context): void {
        for (const { eventType, handler, priority, blocking } of this.pendingEvents) {
            this.registerEvent(ctx, eventType, handler, priority, blocking);
        }
    }

    onUnload(_ctx: context_imported.Context): void {
    }

    registerEvent(
        ctx: context_imported.Context,
        eventType: event_imported.EventType,
        handler: EventHandler,
        priority: event_imported.EventPriority = 'normal',
        blocking: boolean = true
    ): void {
        const handlerId = getNextHandlerId();
        eventHandlers.set(handlerId, handler);
        ctx.registerEvent(handlerId, eventType, priority, blocking);
    }

    registerCommand(
        ctx: context_imported.Context,
        cmd: command_imported.Command,
        handler: CommandHandler,
        permission: string = ""
    ): void {
        const handlerId = getNextHandlerId();
        commandHandlers.set(handlerId, handler);
        cmd.executeWithHandlerId(handlerId);
        ctx.registerCommand(cmd, permission);
    }

    scheduleDelayedTask(delayTicks: number | bigint, handler: TaskHandler): number {
        const handlerId = getNextHandlerId();
        taskHandlers.set(handlerId, handler);
        return scheduler_imported.scheduleDelayedTask(handlerId, BigInt(delayTicks));
    }

    scheduleRepeatingTask(delayTicks: number | bigint, periodTicks: number | bigint, handler: TaskHandler): number {
        const handlerId = getNextHandlerId();
        taskHandlers.set(handlerId, handler);
        return scheduler_imported.scheduleRepeatingTask(handlerId, BigInt(delayTicks), BigInt(periodTicks));
    }
}

export function registerPlugin(plugin: Plugin) {
    pluginInstance = plugin;
}

// Exports for the WIT world
export function initPlugin(): void {}

export function onLoad(ctx: context_imported.Context): void {
    if (pluginInstance) {
        pluginInstance.onLoad(ctx);
    }
}

export function onUnload(ctx: context_imported.Context): void {
    if (pluginInstance) {
        pluginInstance.onUnload(ctx);
    }
}

export function handleEvent(eventId: number, srv: server_imported.Server, evt: event_imported.Event): event_imported.Event {
    const handler = eventHandlers.get(eventId);
    if (handler) {
        const result = handler(srv, evt.val);
        if (result !== undefined) {
            evt.val = result;
        }
    }
    return evt;
}

export function handleCommand(commandId: number, sender: command_imported.CommandSender, srv: server_imported.Server, args: command_imported.ConsumedArgs): number {
    const handler = commandHandlers.get(commandId);
    if (handler) {
        return handler(sender, srv, args);
    }
    throw new Error(`No handler for command ID ${commandId}`);
}

export function handleTask(handlerId: number, srv: server_imported.Server): void {
    const handler = taskHandlers.get(handlerId);
    if (handler) {
        handler(srv);
    }
}

export const metadata = {
    getMetadata(): metadata_imported.PluginMetadata {
        if (pluginInstance) {
            return pluginInstance.metadata() as any;
        }
        return {
            name: "unknown",
            version: "0.0.0",
            authors: [],
            description: "No metadata",
            dependencies: []
        };
    }
};

export const common = {};
