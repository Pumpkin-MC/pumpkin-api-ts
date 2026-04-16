/// <reference path="./pumpkin-plugin-command.d.ts" />
/// <reference path="./pumpkin-plugin-event.d.ts" />
/// <reference path="./pumpkin-plugin-permission.d.ts" />
/// <reference path="./pumpkin-plugin-server.d.ts" />
declare module 'pumpkin:plugin/context' {
  export type Server = import('pumpkin:plugin/server').Server;
  export type EventType = import('pumpkin:plugin/event').EventType;
  export type EventPriority = import('pumpkin:plugin/event').EventPriority;
  export type Command = import('pumpkin:plugin/command').Command;
  export type Permission = import('pumpkin:plugin/permission').Permission;
  
  export class Context implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    /**
    * Registers a handler for a specific event.
    * 
    * * `handler-id`: Unique ID for the event handler.
    * * `event-type`: The type of event to listen for.
    * * `event-priority`: When this handler should be called relative to others.
    * * `blocking`: Whether the event should wait for this handler to finish.
    */
    registerEvent(handlerId: number, eventType: EventType, eventPriority: EventPriority, blocking: boolean): void;
    /**
    * Registers a new command.
    * 
    * * `command`: The command definition.
    * * `permission`: The required permission node to execute this command.
    */
    registerCommand(command: Command, permission: string): void;
    /**
    * Registers a permission node with the server.
    */
    registerPermission(permission: Permission): void;
    /**
    * Returns the path to the plugin's private data folder.
    */
    getDataFolder(): string;
    /**
    * Returns the global server instance.
    */
    getServer(): Server;
    [Symbol.dispose](): void;
  }
}
