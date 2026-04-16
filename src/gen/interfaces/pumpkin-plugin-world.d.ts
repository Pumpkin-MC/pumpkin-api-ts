/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-scoreboard.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
declare module 'pumpkin:plugin/world' {
  export type Position = import('pumpkin:plugin/common').Position;
  export type EntityPose = import('pumpkin:plugin/common').EntityPose;
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  export type Scoreboard = import('pumpkin:plugin/scoreboard').Scoreboard;
  /**
   * Defines how a block reacts when pushed by a piston.
   * # Variants
   * 
   * ## `"normal"`
   * 
   * Normal behavior; the block can be pushed and pulled.
   * ## `"destroy"`
   * 
   * The block is destroyed when pushed.
   * ## `"block"`
   * 
   * The block cannot be pushed or pulled.
   * ## `"ignore"`
   * 
   * The block is ignored by pistons.
   * ## `"push-only"`
   * 
   * The block can only be pushed, not pulled.
   */
  export type PistonBehavior = 'normal' | 'destroy' | 'block' | 'ignore' | 'push-only';
  /**
   * Categories for sounds to control their volume independently.
   * # Variants
   * 
   * ## `"master"`
   * 
   * ## `"music"`
   * 
   * ## `"records"`
   * 
   * ## `"weather"`
   * 
   * ## `"blocks"`
   * 
   * ## `"hostile"`
   * 
   * ## `"neutral"`
   * 
   * ## `"players"`
   * 
   * ## `"ambient"`
   * 
   * ## `"voice"`
   */
  export type SoundCategory = 'master' | 'music' | 'records' | 'weather' | 'blocks' | 'hostile' | 'neutral' | 'players' | 'ambient' | 'voice';
  /**
   * Defines how an explosion interacts with blocks in the world.
   * # Variants
   * 
   * ## `"none"`
   * 
   * No interaction with blocks.
   * ## `"block"`
   * 
   * Blocks are destroyed and may drop loot.
   * ## `"mob"`
   * 
   * Interaction typical for mob-caused explosions.
   * ## `"tnt"`
   * 
   * Interaction typical for TNT explosions.
   * ## `"trigger"`
   * 
   * Triggers specific block behaviors.
   */
  export type ExplosionInteraction = 'none' | 'block' | 'mob' | 'tnt' | 'trigger';
  /**
   * Flags used to control block updates and notifications.
   */
  export interface BlockFlags {
    /**
     * Notifies neighbor blocks of the change.
     */
    notifyNeighbors?: boolean,
    /**
     * Notifies client listeners of the change.
     */
    notifyListeners?: boolean,
    /**
     * Forces the block state even if it's the same.
     */
    forceState?: boolean,
    /**
     * Skips dropping items when the block is removed.
     */
    skipDrops?: boolean,
    /**
     * Indicates the block was moved (e.g., by a piston).
     */
    moved?: boolean,
    /**
     * Skips state replacement for redstone wires.
     */
    skipRedstoneWireStateReplacement?: boolean,
    /**
     * Skips the callback when a block entity is replaced.
     */
    skipBlockEntityReplacedCallback?: boolean,
    /**
     * Skips the callback when a block is added.
     */
    skipBlockAddedCallback?: boolean,
  }
  /**
   * Detailed information about a block's state.
   */
  export interface BlockState {
    /**
     * The internal numerical ID of the block state.
     */
    id: number,
    /**
     * The light level emitted by this block (0-15).
     */
    luminance: number,
    /**
     * How much light this block blocks.
     */
    opacity: number,
    /**
     * The hardness of the block, determining mining speed.
     */
    hardness: number,
    /**
     * Whether this block is considered air.
     */
    isAir: boolean,
    /**
     * Whether this block is a liquid.
     */
    isLiquid: boolean,
    /**
     * Whether this block is a solid.
     */
    isSolid: boolean,
    /**
     * Whether this block occupies a full cube.
     */
    isFullCube: boolean,
    /**
     * How this block behaves when pushed by a piston.
     */
    pistonBehavior: PistonBehavior,
    /**
     * Whether this block receives random ticks.
     */
    hasRandomTicks: boolean,
  }
  /**
   * A simple wrapper for a block state ID.
   */
  export interface BlockStateId {
    id: number,
  }
  /**
   * A position in the world grid.
   */
  export interface BlockPos {
    x: number,
    y: number,
    z: number,
  }
  
  export class Entity implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    getId(): number;
    getUuid(): string;
    getType(): string;
    getPosition(): Position;
    getWorld(): World;
    getYaw(): number;
    getPitch(): number;
    getHeadYaw(): number;
    isOnGround(): boolean;
    isSneaking(): boolean;
    isSprinting(): boolean;
    isInvisible(): boolean;
    isGlowing(): boolean;
    teleport(pos: Position, worldRef: World): void;
    setVelocity(velocity: Position): void;
    getVelocity(): Position;
    getPose(): EntityPose;
    getName(): TextComponent;
    setCustomName(name: TextComponent): void;
    getCustomName(): TextComponent | undefined;
    setCustomNameVisible(visible: boolean): void;
    isCustomNameVisible(): boolean;
    isInvulnerable(): boolean;
    setInvulnerable(invulnerable: boolean): void;
    getFireTicks(): number;
    setFireTicks(ticks: number): void;
    remove(): void;
    [Symbol.dispose](): void;
  }
  
  export class World implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    /**
    * Returns the unique identifier of this world.
    */
    getId(): string;
    /**
    * Gets the block state ID at the specified position.
    */
    getBlockStateId(pos: BlockPos): number;
    /**
    * Gets detailed block state information at the specified position.
    */
    getBlockState(pos: BlockPos): BlockState;
    /**
    * Sets the block state at the specified position.
    */
    setBlockState(pos: BlockPos, state: number, updateFlags: BlockFlags): void;
    /**
    * Returns the current time of day in ticks.
    */
    getTimeOfDay(): bigint;
    /**
    * Sets the current time of day in ticks.
    */
    setTimeOfDay(time: bigint): void;
    /**
    * Returns the total age of the world in ticks.
    */
    getWorldAge(): bigint;
    /**
    * Returns the dimension type (e.g., "minecraft:overworld").
    */
    getDimension(): string;
    /**
    * Gets the highest non-air block Y coordinate at the specified X and Z.
    */
    getTopBlockY(x: number, z: number): number;
    /**
    * Gets the highest motion-blocking block Y coordinate.
    */
    getMotionBlockingHeight(x: number, z: number): number;
    /**
    * Returns whether it is currently raining or snowing.
    */
    isRaining(): boolean;
    /**
    * Sets whether it should be raining or snowing.
    */
    setRaining(raining: boolean): void;
    /**
    * Returns whether there is currently a thunderstorm.
    */
    isThundering(): boolean;
    /**
    * Sets whether there should be a thunderstorm.
    */
    setThundering(thundering: boolean): void;
    /**
    * Broadcasts a system message to all players in this world.
    */
    broadcastSystemMessage(message: TextComponent, overlay: boolean): void;
    /**
    * Returns the scoreboard associated with this world.
    */
    getScoreboard(): Scoreboard;
    /**
    * Plays a sound at the specified position for all players in the world.
    */
    playSound(sound: string, category: SoundCategory, pos: Position, volume: number, pitch: number): void;
    /**
    * Spawns particles at the specified position.
    */
    spawnParticle(particle: string, pos: Position, offset: Position, maxSpeed: number, count: number): void;
    /**
    * Creates an explosion at the specified position.
    */
    createExplosion(pos: Position, power: number, createFire: boolean, interaction: ExplosionInteraction): void;
    /**
    * Returns the sea level of this world.
    */
    getSeaLevel(): number;
    /**
    * Returns the minimum Y coordinate (bottom of the world).
    */
    getMinY(): number;
    /**
    * Returns a list of all entities in this world.
    */
    getEntities(): Array<Entity>;
    [Symbol.dispose](): void;
  }
}
