/// <reference path="./bindings/index.d.ts" />

import {
  Command,
  CommandSender,
  CommandSuggestions,
  ConsumedArgs,
  SuggestionRequest,
} from "pumpkin:plugin/command@0.1.0";
import { Context } from "pumpkin:plugin/context@0.1.0";
import { Event, EventType, EventPriority } from "pumpkin:plugin/event@0.1.0";
import { IpcMessage, PluginId } from "pumpkin:plugin/ipc@0.1.0";
import { PluginMetadata } from "pumpkin:plugin/metadata@0.1.0";
import * as scheduler from "pumpkin:plugin/scheduler@0.1.0";
import { Server } from "pumpkin:plugin/server@0.1.0";
import {
  ChunkBuffer,
  Entity,
  GenerationPhase,
} from "pumpkin:plugin/world@0.1.0";

export type EventHandler<T = any> = (srv: Server, evt: T) => T | void;
export type CommandHandler = (
  sender: CommandSender,
  srv: Server,
  args: ConsumedArgs,
) => number;
export type CommandSuggestionHandler = (
  sender: CommandSender,
  srv: Server,
  request: SuggestionRequest,
) => CommandSuggestions;
export type TaskHandler = (srv: Server) => void;
export interface AiGoal {
  canStart: (server: Server, entity: Entity) => boolean;
  shouldContinue: (server: Server, entity: Entity) => boolean;
  start: (server: Server, entity: Entity) => void;
  tick: (server: Server, entity: Entity) => void;
  stop: (server: Server, entity: Entity) => void;
}
export type ChunkGenerator = (
  phase: GenerationPhase,
  chunk: ChunkBuffer,
) => void;

let pluginInstance: Plugin | null = null;
const eventHandlers = new Map<number, EventHandler>();
const commandHandlers = new Map<number, CommandHandler>();
const commandSuggestionHandlers = new Map<number, CommandSuggestionHandler>();
const taskHandlers = new Map<number, TaskHandler>();
const generators = new Map<number, ChunkGenerator>();
const aiGoals = new Map<number, AiGoal>();
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

  handleIpcMessage(sender: PluginId, message: IpcMessage): IpcMessage {
    throw "This plugin cannot recieve messages";
  }

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

  registerCommandSuggestionHandler(handler: CommandSuggestionHandler): number {
    const handlerId = getNextHandlerId();
    commandSuggestionHandlers.set(handlerId, handler);
    return handlerId;
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

  registerAiGoal(goal: AiGoal): number {
    const aiGoalId = getNextHandlerId();
    aiGoals.set(aiGoalId, goal);
    return aiGoalId;
  }

  registerChunkGenerator(generator: ChunkGenerator): number {
    const generatorId = getNextHandlerId();
    generators.set(generatorId, generator);
    return generatorId;
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

export function handleCommandSuggestion(
  handlerId: number,
  sender: CommandSender,
  srv: Server,
  request: SuggestionRequest,
): CommandSuggestions {
  const handler = commandSuggestionHandlers.get(handlerId);
  if (handler) {
    return handler(sender, srv, request);
  }
  throw new Error(`No command suggestion handler registered for ID ${handler}`);
}

export function handleTask(handlerId: number, srv: Server): void {
  const handler = taskHandlers.get(handlerId);
  if (handler) {
    handler(srv);
  }
}

export function handleIpcMessage(
  sender: PluginId,
  message: IpcMessage,
): IpcMessage {
  if (pluginInstance) {
    return pluginInstance.handleIpcMessage(sender, message);
  }
  throw new Error("No plugin instance available?");
}

export function handleAiGoalCanStart(
  goalId: number,
  server: Server,
  entity: Entity,
): boolean {
  const aiGoal = aiGoals.get(goalId);
  if (aiGoal) {
    return aiGoal.canStart(server, entity);
  }
  throw new Error(`No AI goal registered for ID ${goalId}`);
}

export function handleAiGoalShouldContinue(
  goalId: number,
  server: Server,
  entity: Entity,
): boolean {
  const aiGoal = aiGoals.get(goalId);
  if (aiGoal) {
    return aiGoal.shouldContinue(server, entity);
  }
  throw new Error(`No AI goal registered for ID ${goalId}`);
}

export function handleAiGoalStart(
  goalId: number,
  server: Server,
  entity: Entity,
): void {
  const aiGoal = aiGoals.get(goalId);
  if (aiGoal) {
    aiGoal.start(server, entity);
    return;
  }
  throw new Error(`No AI goal registered for ID ${goalId}`);
}

export function handleAiGoalTick(
  goalId: number,
  server: Server,
  entity: Entity,
): void {
  const aiGoal = aiGoals.get(goalId);
  if (aiGoal) {
    aiGoal.tick(server, entity);
    return;
  }
  throw new Error(`No AI goal registered for ID ${goalId}`);
}

export function handleAiGoalStop(
  goalId: number,
  server: Server,
  entity: Entity,
): void {
  const aiGoal = aiGoals.get(goalId);
  if (aiGoal) {
    aiGoal.stop(server, entity);
    return;
  }
  throw new Error(`No AI goal registered for ID ${goalId}`);
}

export function handleGeneratePhase(
  generatorId: number,
  phase: GenerationPhase,
  chunk: ChunkBuffer,
): void {
  const generator = generators.get(generatorId);
  if (generator) {
    generator(phase, chunk);
    return;
  }
  throw new Error(`No generator registered for ID ${generatorId}`);
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
      permissions: [],
    };
  },
};

export const common = {};
