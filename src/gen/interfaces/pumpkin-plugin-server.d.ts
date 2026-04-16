/// <reference path="./pumpkin-plugin-player.d.ts" />
declare module 'pumpkin:plugin/server' {
  export type Player = import('pumpkin:plugin/player').Player;
  /**
   * Represents the difficulty setting of a Minecraft server.
   * # Variants
   * 
   * ## `"peaceful"`
   * 
   * Hostile mobs do not spawn. Players regain health automatically.
   * ## `"easy"`
   * 
   * Hostile mobs deal less damage.
   * ## `"normal"`
   * 
   * Standard Minecraft difficulty.
   * ## `"hard"`
   * 
   * Hostile mobs deal more damage.
   */
  export type Difficulty = 'peaceful' | 'easy' | 'normal' | 'hard';
  
  export class Server implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    /**
    * Returns the current difficulty level of the server.
    */
    getDifficulty(): Difficulty;
    /**
    * Returns the total number of players currently connected to the server.
    */
    getPlayerCount(): number;
    /**
    * Returns the rolling average Milliseconds Per Tick (MSPT).
    * A value below 50.0 is required for a stable 20 TPS.
    */
    getMspt(): number;
    /**
    * Returns the effective Ticks Per Second (TPS).
    * Ideal value is 20.0.
    */
    getTps(): number;
    /**
    * Returns a list of all online players across all worlds.
    */
    getAllPlayers(): Array<Player>;
    /**
    * Searches for a player by their exact name.
    */
    getPlayerByName(name: string): Player | undefined;
    /**
    * Searches for a player by their UUID string.
    */
    getPlayerByUuid(id: string): Player | undefined;
    [Symbol.dispose](): void;
  }
}
