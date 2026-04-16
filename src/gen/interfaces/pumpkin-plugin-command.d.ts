/// <reference path="./pumpkin-plugin-block-entity.d.ts" />
/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-entity.d.ts" />
/// <reference path="./pumpkin-plugin-player.d.ts" />
/// <reference path="./pumpkin-plugin-server.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
/// <reference path="./pumpkin-plugin-world.d.ts" />
declare module 'pumpkin:plugin/command' {
  export type World = import('pumpkin:plugin/world').World;
  export type Entity = import('pumpkin:plugin/entity').Entity;
  export type Player = import('pumpkin:plugin/player').Player;
  export type CommandBlockEntity = import('pumpkin:plugin/block-entity').CommandBlockEntity;
  export type Position = import('pumpkin:plugin/common').Position;
  export type BlockPosition = import('pumpkin:plugin/common').BlockPosition;
  export type Locale = import('pumpkin:plugin/common').Locale;
  export type Server = import('pumpkin:plugin/server').Server;
  export type Difficulty = import('pumpkin:plugin/server').Difficulty;
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  /**
   * # Variants
   * 
   * ## `"survival"`
   * 
   * ## `"creative"`
   * 
   * ## `"adventure"`
   * 
   * ## `"spectator"`
   */
  export type Gamemode = 'survival' | 'creative' | 'adventure' | 'spectator';
  /**
   * # Variants
   * 
   * ## `"pink"`
   * 
   * ## `"blue"`
   * 
   * ## `"red"`
   * 
   * ## `"green"`
   * 
   * ## `"yellow"`
   * 
   * ## `"purple"`
   * 
   * ## `"white"`
   */
  export type BossbarColor = 'pink' | 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'white';
  /**
   * # Variants
   * 
   * ## `"no-division"`
   * 
   * ## `"notches6"`
   * 
   * ## `"notches10"`
   * 
   * ## `"notches12"`
   * 
   * ## `"notches20"`
   */
  export type BossbarStyle = 'no-division' | 'notches6' | 'notches10' | 'notches12' | 'notches20';
  /**
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
   * 
   * ## `"ui"`
   */
  export type SoundCategory = 'master' | 'music' | 'records' | 'weather' | 'blocks' | 'hostile' | 'neutral' | 'players' | 'ambient' | 'voice' | 'ui';
  /**
   * # Variants
   * 
   * ## `"feet"`
   * 
   * ## `"eyes"`
   */
  export type EntityAnchor = 'feet' | 'eyes';
  export type Number = NumberFloat64 | NumberFloat32 | NumberInt32 | NumberInt64;
  export interface NumberFloat64 {
    tag: 'float64',
    val: number,
  }
  export interface NumberFloat32 {
    tag: 'float32',
    val: number,
  }
  export interface NumberInt32 {
    tag: 'int32',
    val: number,
  }
  export interface NumberInt64 {
    tag: 'int64',
    val: bigint,
  }
  export type NotInBounds = NotInBoundsLowerBound | NotInBoundsUpperBound;
  export interface NotInBoundsLowerBound {
    tag: 'lower-bound',
    val: [Number, Number],
  }
  export interface NotInBoundsUpperBound {
    tag: 'upper-bound',
    val: [Number, Number],
  }
  export type Arg = ArgEntities | ArgEntity | ArgPlayers | ArgBlockPos | ArgPos3d | ArgPos2d | ArgRotation | ArgGameMode | ArgDifficulty | ArgItem | ArgItemPredicate | ArgResourceLocation | ArgBlock | ArgBlockPredicate | ArgBossbarColor | ArgBossbarStyle | ArgParticle | ArgMsg | ArgTextComponent | ArgTime | ArgNum | ArgBool | ArgSimple | ArgSoundCategory | ArgDamageType | ArgEffect | ArgEnchantment | ArgEntityAnchor;
  export interface ArgEntities {
    tag: 'entities',
    val: Array<Entity>,
  }
  export interface ArgEntity {
    tag: 'entity',
    val: Entity,
  }
  export interface ArgPlayers {
    tag: 'players',
    val: Array<Player>,
  }
  export interface ArgBlockPos {
    tag: 'block-pos',
    val: BlockPosition,
  }
  export interface ArgPos3d {
    tag: 'pos3d',
    val: Position,
  }
  export interface ArgPos2d {
    tag: 'pos2d',
    val: [number, number],
  }
  export interface ArgRotation {
    tag: 'rotation',
    val: [number, boolean, number, boolean],
  }
  export interface ArgGameMode {
    tag: 'game-mode',
    val: Gamemode,
  }
  export interface ArgDifficulty {
    tag: 'difficulty',
    val: Difficulty,
  }
  export interface ArgItem {
    tag: 'item',
    val: string,
  }
  export interface ArgItemPredicate {
    tag: 'item-predicate',
    val: string,
  }
  export interface ArgResourceLocation {
    tag: 'resource-location',
    val: string,
  }
  export interface ArgBlock {
    tag: 'block',
    val: string,
  }
  export interface ArgBlockPredicate {
    tag: 'block-predicate',
    val: string,
  }
  export interface ArgBossbarColor {
    tag: 'bossbar-color',
    val: BossbarColor,
  }
  export interface ArgBossbarStyle {
    tag: 'bossbar-style',
    val: BossbarStyle,
  }
  export interface ArgParticle {
    tag: 'particle',
    val: string,
  }
  export interface ArgMsg {
    tag: 'msg',
    val: string,
  }
  export interface ArgTextComponent {
    tag: 'text-component',
    val: TextComponent,
  }
  export interface ArgTime {
    tag: 'time',
    val: number,
  }
  export interface ArgNum {
    tag: 'num',
    val: Result<Number, NotInBounds>,
  }
  export interface ArgBool {
    tag: 'bool',
    val: boolean,
  }
  export interface ArgSimple {
    tag: 'simple',
    val: string,
  }
  export interface ArgSoundCategory {
    tag: 'sound-category',
    val: SoundCategory,
  }
  export interface ArgDamageType {
    tag: 'damage-type',
    val: string,
  }
  export interface ArgEffect {
    tag: 'effect',
    val: string,
  }
  export interface ArgEnchantment {
    tag: 'enchantment',
    val: string,
  }
  export interface ArgEntityAnchor {
    tag: 'entity-anchor',
    val: EntityAnchor,
  }
  export type CommandSenderType = CommandSenderTypeRcon | CommandSenderTypeConsole | CommandSenderTypePlayer | CommandSenderTypeCommandBlock | CommandSenderTypeDummy;
  export interface CommandSenderTypeRcon {
    tag: 'rcon',
  }
  export interface CommandSenderTypeConsole {
    tag: 'console',
  }
  export interface CommandSenderTypePlayer {
    tag: 'player',
    val: Player,
  }
  export interface CommandSenderTypeCommandBlock {
    tag: 'command-block',
    val: [CommandBlockEntity, World],
  }
  export interface CommandSenderTypeDummy {
    tag: 'dummy',
  }
  /**
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
   * # Variants
   * 
   * ## `"single-word"`
   * 
   * ## `"quotable"`
   * 
   * ## `"greedy"`
   */
  export type StringType = 'single-word' | 'quotable' | 'greedy';
  export type ArgumentType = ArgumentTypeBool | ArgumentTypeFloat | ArgumentTypeDouble | ArgumentTypeInteger | ArgumentTypeLong | ArgumentTypeString | ArgumentTypeEntities | ArgumentTypeEntity | ArgumentTypePlayers | ArgumentTypeGameProfile | ArgumentTypeBlockPos | ArgumentTypePosition3d | ArgumentTypePosition2d | ArgumentTypeBlockState | ArgumentTypeBlockPredicate | ArgumentTypeItem | ArgumentTypeItemPredicate | ArgumentTypeComponent | ArgumentTypeRotation | ArgumentTypeResourceLocation | ArgumentTypeEntityAnchor | ArgumentTypeGamemode | ArgumentTypeDifficulty | ArgumentTypeTime | ArgumentTypeResource;
  export interface ArgumentTypeBool {
    tag: 'bool',
  }
  export interface ArgumentTypeFloat {
    tag: 'float',
    val: [number | undefined, number | undefined],
  }
  export interface ArgumentTypeDouble {
    tag: 'double',
    val: [number | undefined, number | undefined],
  }
  export interface ArgumentTypeInteger {
    tag: 'integer',
    val: [number | undefined, number | undefined],
  }
  export interface ArgumentTypeLong {
    tag: 'long',
    val: [bigint | undefined, bigint | undefined],
  }
  export interface ArgumentTypeString {
    tag: 'string',
    val: StringType,
  }
  export interface ArgumentTypeEntities {
    tag: 'entities',
  }
  export interface ArgumentTypeEntity {
    tag: 'entity',
  }
  export interface ArgumentTypePlayers {
    tag: 'players',
  }
  export interface ArgumentTypeGameProfile {
    tag: 'game-profile',
  }
  export interface ArgumentTypeBlockPos {
    tag: 'block-pos',
  }
  export interface ArgumentTypePosition3d {
    tag: 'position3d',
  }
  export interface ArgumentTypePosition2d {
    tag: 'position2d',
  }
  export interface ArgumentTypeBlockState {
    tag: 'block-state',
  }
  export interface ArgumentTypeBlockPredicate {
    tag: 'block-predicate',
  }
  export interface ArgumentTypeItem {
    tag: 'item',
  }
  export interface ArgumentTypeItemPredicate {
    tag: 'item-predicate',
  }
  export interface ArgumentTypeComponent {
    tag: 'component',
  }
  export interface ArgumentTypeRotation {
    tag: 'rotation',
  }
  export interface ArgumentTypeResourceLocation {
    tag: 'resource-location',
  }
  export interface ArgumentTypeEntityAnchor {
    tag: 'entity-anchor',
  }
  export interface ArgumentTypeGamemode {
    tag: 'gamemode',
  }
  export interface ArgumentTypeDifficulty {
    tag: 'difficulty',
  }
  export interface ArgumentTypeTime {
    tag: 'time',
    val: number,
  }
  export interface ArgumentTypeResource {
    tag: 'resource',
    val: string,
  }
  export type CommandError = CommandErrorInvalidConsumption | CommandErrorInvalidRequirement | CommandErrorPermissionDenied | CommandErrorCommandFailed;
  export interface CommandErrorInvalidConsumption {
    tag: 'invalid-consumption',
    val: string | undefined,
  }
  export interface CommandErrorInvalidRequirement {
    tag: 'invalid-requirement',
  }
  export interface CommandErrorPermissionDenied {
    tag: 'permission-denied',
  }
  export interface CommandErrorCommandFailed {
    tag: 'command-failed',
    val: TextComponent,
  }
  export type Result<T, E> = { tag: 'ok', val: T } | { tag: 'err', val: E };
  
  export class Command implements Disposable {
    /**
    * First name is primary, rest are aliases
    */
    constructor(names: Array<string>, description: string)
    then(node: CommandNode): void;
    executeWithHandlerId(handlerId: number): void;
    [Symbol.dispose](): void;
  }
  
  export class CommandNode implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    static literal(name: string): CommandNode;
    static argument(name: string, argType: ArgumentType): CommandNode;
    then(node: CommandNode): void;
    executeWithHandlerId(handlerId: number): void;
    requireWithHandlerId(handlerId: number): void;
    [Symbol.dispose](): void;
  }
  
  export class CommandSender implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    getCommandSenderType(): CommandSenderType;
    sendMessage(text: TextComponent): void;
    setSuccessCount(count: number): void;
    isPlayer(): boolean;
    isConsole(): boolean;
    asPlayer(): Player | undefined;
    permissionLevel(): PermissionLevel;
    hasPermissionLevel(level: PermissionLevel): boolean;
    hasPermission(server: Server, node: string): boolean;
    position(): Position | undefined;
    world(): World | undefined;
    getLocale(): Locale;
    shouldReceiveFeedback(): boolean;
    shouldBroadcastConsoleToOps(): boolean;
    shouldTrackOutput(): boolean;
    [Symbol.dispose](): void;
  }
  
  export class ConsumedArgs implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    getValue(key: string): Arg;
    [Symbol.dispose](): void;
  }
}
