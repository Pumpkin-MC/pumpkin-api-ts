declare module 'pumpkin:plugin/permission' {
  /**
   * Represents the player's permission level
   * 
   * Permission levels determine the player's access to commands and server operations.
   * Each numeric level corresponds to a specific role:
   * - `Zero`: `normal`: Player can use basic commands.
   * - `One`: `moderator`: Player can bypass spawn protection.
   * - `Two`: `gamemaster`: Player or executor can use more commands and player can use command blocks.
   * - `Three`:  `admin`: Player or executor can use commands related to multiplayer management.
   * - `Four`: `owner`: Player or executor can use all of the commands, including commands related to server management.
   * # Variants
   * 
   * ## `"zero"`
   * 
   * ## `"one"`
   * 
   * ## `"two"`
   * 
   * ## `"three"`
   * 
   * ## `"four"`
   */
  export type PermissionLevel = 'zero' | 'one' | 'two' | 'three' | 'four';
  /**
   * Describes the default behavior for permissions
   */
  export type PermissionDefault = PermissionDefaultDeny | PermissionDefaultAllow | PermissionDefaultOp;
  /**
   * Permission is not granted by default
   */
  export interface PermissionDefaultDeny {
    tag: 'deny',
  }
  /**
   * Permission is granted by default
   */
  export interface PermissionDefaultAllow {
    tag: 'allow',
  }
  /**
   * Permission is granted by default to operators
   */
  export interface PermissionDefaultOp {
    tag: 'op',
    val: PermissionLevel,
  }
  /**
   * A child permission entry
   */
  export interface PermissionChild {
    node: string,
    value: boolean,
  }
  /**
   * Defines a permission node in the system
   */
  export interface Permission {
    /**
     * The full node name (e.g., "minecraft:command.gamemode")
     */
    node: string,
    /**
     * Description of what this permission does
     */
    description: string,
    /**
     * The default value of this permission
     */
    'default': PermissionDefault,
    /**
     * Children nodes that are affected by this permission
     */
    children: Array<PermissionChild>,
  }
}
