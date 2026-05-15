/// <reference path="./bindings/index.d.ts" />

import { Command, CommandSender, ConsumedArgs } from "pumpkin:plugin/command";
import { Context } from "pumpkin:plugin/context";
import { Event, EventType, EventPriority } from "pumpkin:plugin/event";
import { PluginMetadata } from "pumpkin:plugin/metadata";
import * as scheduler from "pumpkin:plugin/scheduler";
import { Server } from "pumpkin:plugin/server";

export type EventHandler<T = any> = (srv: Server, evt: T) => T | void;
export type CommandHandler = (
  sender: CommandSender,
  srv: Server,
  args: ConsumedArgs,
) => number;
export type TaskHandler = (srv: Server) => void;

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
    eventType: EventType;
    handler: EventHandler;
    priority: EventPriority;
    blocking: boolean;
  }> = [];

  abstract metadata(): PluginMetadata;

  onLoad(ctx: Context): void {
    for (const { eventType, handler, priority, blocking } of this
      .pendingEvents) {
      this.registerEvent(ctx, eventType, handler, priority, blocking);
    }
  }

  onUnload(_ctx: Context): void {}

  registerEvent(
    ctx: Context,
    eventType: EventType,
    handler: EventHandler,
    priority: EventPriority = "normal",
    blocking: boolean = true,
  ): void {
    const handlerId = getNextHandlerId();
    eventHandlers.set(handlerId, handler);
    ctx.registerEvent(handlerId, eventType, priority, blocking);
  }

  registerCommand(
    ctx: Context,
    cmd: Command,
    handler: CommandHandler,
    permission: string = "",
  ): void {
    const handlerId = getNextHandlerId();
    commandHandlers.set(handlerId, handler);
    cmd.executeWithHandlerId(handlerId);
    ctx.registerCommand(cmd, permission);
  }

  scheduleDelayedTask(
    delayTicks: number | bigint,
    handler: TaskHandler,
  ): number {
    const handlerId = getNextHandlerId();
    taskHandlers.set(handlerId, handler);
    return scheduler.scheduleDelayedTask(handlerId, BigInt(delayTicks));
  }

  scheduleRepeatingTask(
    delayTicks: number | bigint,
    periodTicks: number | bigint,
    handler: TaskHandler,
  ): number {
    const handlerId = getNextHandlerId();
    taskHandlers.set(handlerId, handler);
    return scheduler.scheduleRepeatingTask(
      handlerId,
      BigInt(delayTicks),
      BigInt(periodTicks),
    );
  }
}

export function registerPlugin(plugin: Plugin) {
  pluginInstance = plugin;
}

// Exports for the WIT world
export function initPlugin(): void {}

export function onLoad(ctx: Context): void {
  if (pluginInstance) {
    pluginInstance.onLoad(ctx);
  }
}

export function onUnload(ctx: Context): void {
  if (pluginInstance) {
    pluginInstance.onUnload(ctx);
  }
}

export function handleEvent(eventId: number, srv: Server, evt: Event): Event {
  const handler = eventHandlers.get(eventId);
  if (handler) {
    const result = handler(srv, evt.val);
    if (result !== undefined) {
      evt.val = result;
    }
  }
  return evt;
}

export function handleCommand(
  commandId: number,
  sender: CommandSender,
  srv: Server,
  args: ConsumedArgs,
): number {
  const handler = commandHandlers.get(commandId);
  if (handler) {
    return handler(sender, srv, args);
  }
  throw new Error(`No handler for command ID ${commandId}`);
}

export function handleTask(handlerId: number, srv: Server): void {
  const handler = taskHandlers.get(handlerId);
  if (handler) {
    handler(srv);
  }
}

export const metadata = {
  getMetadata(): PluginMetadata {
    if (pluginInstance) {
      return pluginInstance.metadata();
    }
    return {
      name: "unknown",
      version: "0.0.0",
      authors: [],
      description: "No metadata",
      dependencies: [],
    };
  },
};

export const common = {};
