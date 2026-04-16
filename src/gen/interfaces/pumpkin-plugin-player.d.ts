/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-entity.d.ts" />
/// <reference path="./pumpkin-plugin-gui.d.ts" />
/// <reference path="./pumpkin-plugin-permission.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
/// <reference path="./pumpkin-plugin-world.d.ts" />
declare module 'pumpkin:plugin/player' {
  export type Hand = import('pumpkin:plugin/common').Hand;
  export type ItemStack = import('pumpkin:plugin/common').ItemStack;
  export type Position = import('pumpkin:plugin/common').Position;
  export type GameMode = import('pumpkin:plugin/common').GameMode;
  export type World = import('pumpkin:plugin/world').World;
  export type Entity = import('pumpkin:plugin/entity').Entity;
  export type PermissionLevel = import('pumpkin:plugin/permission').PermissionLevel;
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  export type Gui = import('pumpkin:plugin/gui').Gui;
  /**
   * Various abilities a player can have.
   */
  export interface PlayerAbilities {
    /**
     * Whether the player is invulnerable to damage.
     */
    invulnerable: boolean,
    /**
     * Whether the player is currently flying.
     */
    flying: boolean,
    /**
     * Whether the player is allowed to fly.
     */
    allowFlying: boolean,
    /**
     * Whether the player is in creative mode.
     */
    creative: boolean,
    /**
     * Whether the player can modify the world.
     */
    allowModifyWorld: boolean,
    /**
     * The speed at which the player flies.
     */
    flySpeed: number,
    /**
     * The speed at which the player walks.
     */
    walkSpeed: number,
  }
  
  export class Player implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    /**
    * Returns the player as an entity.
    */
    asEntity(): Entity;
    /**
    * Returns the player's unique UUID as a string.
    */
    getId(): string;
    /**
    * Returns the player's username.
    */
    getName(): string;
    /**
    * Basic state
    * Returns the player's current position in the world.
    */
    getPosition(): Position;
    /**
    * Returns the player's current yaw (horizontal rotation).
    */
    getYaw(): number;
    /**
    * Returns the player's current pitch (vertical rotation).
    */
    getPitch(): number;
    /**
    * Returns the world the player is currently in.
    */
    getWorld(): World;
    /**
    * Returns the player's current game mode.
    */
    getGamemode(): GameMode;
    /**
    * Changes the player's game mode. Returns true if successful.
    */
    setGamemode(mode: GameMode): boolean;
    /**
    * Returns the player's locale (e.g., "en_us").
    */
    getLocale(): string;
    /**
    * Returns the player's current ping in milliseconds.
    */
    getPing(): number;
    /**
    * Permissions & metadata
    * Returns the player's permission level (0-4).
    */
    getPermissionLevel(): PermissionLevel;
    /**
    * Sets the player's permission level.
    */
    setPermissionLevel(level: PermissionLevel): void;
    /**
    * Checks if the player has a specific permission node.
    */
    hasPermission(node: string): boolean;
    /**
    * Returns the player's display name, which may include formatting.
    */
    getDisplayName(): TextComponent;
    /**
    * Messaging & titles
    * Sends a system message to the player's chat.
    */
    sendSystemMessage(text: TextComponent, overlay: boolean): void;
    /**
    * Shows a large title on the player's screen.
    */
    showTitle(text: TextComponent): void;
    /**
    * Shows a smaller subtitle on the player's screen.
    */
    showSubtitle(text: TextComponent): void;
    /**
    * Shows a message in the action bar area.
    */
    showActionbar(text: TextComponent): void;
    /**
    * Sets the fade-in, stay, and fade-out times for titles.
    */
    sendTitleAnimation(fadeIn: number, stay: number, fadeOut: number): void;
    /**
    * Teleport & kick
    * Teleports the player to a position in a world.
    */
    teleport(position: Position, yaw: number | undefined, pitch: number | undefined, world: World): void;
    /**
    * Teleports the player to another world at a specific position.
    */
    teleportWorld(worldRef: World, position: Position, yaw: number | undefined, pitch: number | undefined): void;
    /**
    * Kicks the player from the server with the specified reason.
    */
    kick(message: TextComponent): void;
    /**
    * Forces the player to respawn.
    */
    respawn(): void;
    /**
    * Opens a GUI for the player.
    */
    openGui(guiRef: Gui): void;
    /**
    * Bans the player with an optional reason.
    */
    ban(reason: TextComponent | undefined): void;
    /**
    * Bans the player's IP address with an optional reason.
    */
    banIp(reason: TextComponent | undefined): void;
    /**
    * Inventory
    * Returns the index of the currently selected hotbar slot (0-8).
    */
    getSelectedSlot(): number;
    /**
    * Returns the item currently in the specified hand.
    */
    getItemInHand(hand: Hand): ItemStack | undefined;
    /**
    * Returns the item in the specified inventory slot.
    */
    getInventoryItem(slot: number): ItemStack | undefined;
    /**
    * Status
    * Returns the player's current health.
    */
    getHealth(): number;
    /**
    * Sets the player's current health.
    */
    setHealth(health: number): void;
    /**
    * Returns the player's maximum health.
    */
    getMaxHealth(): number;
    /**
    * Sets the player's maximum health.
    */
    setMaxHealth(maxHealth: number): void;
    /**
    * Returns the player's food level (0-20).
    */
    getFoodLevel(): number;
    /**
    * Sets the player's food level.
    */
    setFoodLevel(foodLevel: number): void;
    /**
    * Returns the player's food saturation level.
    */
    getSaturation(): number;
    /**
    * Sets the player's food saturation level.
    */
    setSaturation(saturation: number): void;
    /**
    * Returns the player's food exhaustion level.
    */
    getExhaustion(): number;
    /**
    * Sets the player's food exhaustion level.
    */
    setExhaustion(exhaustion: number): void;
    /**
    * Returns the player's current absorption amount.
    */
    getAbsorption(): number;
    /**
    * Sets the player's current absorption amount.
    */
    setAbsorption(absorption: number): void;
    /**
    * Returns the player's total experience level.
    */
    getExperienceLevel(): number;
    /**
    * Returns the player's progress toward the next level (0.0 to 1.0).
    */
    getExperienceProgress(): number;
    /**
    * Returns the total experience points the player has.
    */
    getExperiencePoints(): number;
    /**
    * Sets the player's total experience level.
    */
    setExperienceLevel(level: number): void;
    /**
    * Sets the player's progress toward the next level.
    */
    setExperienceProgress(progress: number): void;
    /**
    * Sets the player's total experience points.
    */
    setExperiencePoints(points: number): void;
    /**
    * Adds experience levels to the player.
    */
    addExperienceLevels(levels: number): void;
    /**
    * Adds experience points to the player.
    */
    addExperiencePoints(points: number): void;
    /**
    * Returns whether the player is currently sneaking.
    */
    isSneaking(): boolean;
    /**
    * Sets whether the player is currently sneaking.
    */
    setSneaking(sneaking: boolean): void;
    /**
    * Returns whether the player is currently sprinting.
    */
    isSprinting(): boolean;
    /**
    * Sets whether the player is currently sprinting.
    */
    setSprinting(sprinting: boolean): void;
    /**
    * Returns whether the player is currently on the ground.
    */
    isOnGround(): boolean;
    /**
    * Returns whether the player is currently flying.
    */
    isFlying(): boolean;
    /**
    * Sets whether the player should be flying.
    */
    setFlying(flying: boolean): void;
    /**
    * Returns the player's current abilities.
    */
    getAbilities(): PlayerAbilities;
    /**
    * Updates the player's abilities.
    */
    setAbilities(abilities: PlayerAbilities): void;
    /**
    * Returns the player's IP address.
    */
    getIp(): string;
    [Symbol.dispose](): void;
  }
}
