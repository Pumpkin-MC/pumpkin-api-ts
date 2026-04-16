/// <reference path="./interfaces/pumpkin-plugin-block-entity.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-command.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-common.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-context.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-entity.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-event.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-gui.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-i18n.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-logging.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-metadata.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-permission.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-player.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-scheduler.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-scoreboard.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-server.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-text.d.ts" />
/// <reference path="./interfaces/pumpkin-plugin-world.d.ts" />
declare module 'pumpkin:plugin/plugin' {
  export type Context = import('pumpkin:plugin/context').Context;
  export type Event = import('pumpkin:plugin/event').Event;
  export type ServerInstance = import('pumpkin:plugin/server').Server;
  export type CommandSender = import('pumpkin:plugin/command').CommandSender;
  export type ConsumedArgs = import('pumpkin:plugin/command').ConsumedArgs;
  export type CommandError = import('pumpkin:plugin/command').CommandError;
  export type * as PumpkinPluginBlockEntity from 'pumpkin:plugin/block-entity'; // import pumpkin:plugin/block-entity
  export type * as PumpkinPluginCommand from 'pumpkin:plugin/command'; // import pumpkin:plugin/command
  export type * as PumpkinPluginCommon from 'pumpkin:plugin/common'; // import pumpkin:plugin/common
  export type * as PumpkinPluginContext from 'pumpkin:plugin/context'; // import pumpkin:plugin/context
  export type * as PumpkinPluginEntity from 'pumpkin:plugin/entity'; // import pumpkin:plugin/entity
  export type * as PumpkinPluginEvent from 'pumpkin:plugin/event'; // import pumpkin:plugin/event
  export type * as PumpkinPluginGui from 'pumpkin:plugin/gui'; // import pumpkin:plugin/gui
  export type * as PumpkinPluginI18n from 'pumpkin:plugin/i18n'; // import pumpkin:plugin/i18n
  export type * as PumpkinPluginLogging from 'pumpkin:plugin/logging'; // import pumpkin:plugin/logging
  export type * as PumpkinPluginPermission from 'pumpkin:plugin/permission'; // import pumpkin:plugin/permission
  export type * as PumpkinPluginPlayer from 'pumpkin:plugin/player'; // import pumpkin:plugin/player
  export type * as PumpkinPluginScheduler from 'pumpkin:plugin/scheduler'; // import pumpkin:plugin/scheduler
  export type * as PumpkinPluginScoreboard from 'pumpkin:plugin/scoreboard'; // import pumpkin:plugin/scoreboard
  export type * as PumpkinPluginServer from 'pumpkin:plugin/server'; // import pumpkin:plugin/server
  export type * as PumpkinPluginText from 'pumpkin:plugin/text'; // import pumpkin:plugin/text
  export type * as PumpkinPluginWorld from 'pumpkin:plugin/world'; // import pumpkin:plugin/world
  export * as metadata from 'pumpkin:plugin/metadata'; // export pumpkin:plugin/metadata
  export * as common from 'pumpkin:plugin/common'; // export pumpkin:plugin/common
  /**
  * --- Plugin-provided exports ---
  * Called by the host once to initialize the plugin.
  * Internal use only; plugins should use the `register_plugin!` macro.
  */
  export function initPlugin(): void;
  /**
  * Called when the plugin is being loaded.
  * Use this to register commands, events, and perform initial setup.
  */
  export function onLoad(context: Context): void;
  /**
  * Called when the plugin is being unloaded.
  * Use this to save data and clean up resources.
  */
  export function onUnload(context: Context): void;
  /**
  * Dispatches an event to the plugin for handling.
  */
  export function handleEvent(eventId: number, server: ServerInstance, event: Event): Event;
  /**
  * Dispatches a command execution to the plugin.
  */
  export function handleCommand(commandId: number, sender: CommandSender, server: ServerInstance, args: ConsumedArgs): number;
  /**
  * Dispatches a scheduled task execution to the plugin.
  */
  export function handleTask(handlerId: number, server: ServerInstance): void;
  export type Result<T, E> = { tag: 'ok', val: T } | { tag: 'err', val: E };
}
