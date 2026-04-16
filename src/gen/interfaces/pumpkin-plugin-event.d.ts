/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-player.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
/// <reference path="./pumpkin-plugin-world.d.ts" />
declare module 'pumpkin:plugin/event' {
  export type BlockPosition = import('pumpkin:plugin/common').BlockPosition;
  export type GameMode = import('pumpkin:plugin/common').GameMode;
  export type Hand = import('pumpkin:plugin/common').Hand;
  export type ItemStack = import('pumpkin:plugin/common').ItemStack;
  export type Position = import('pumpkin:plugin/common').Position;
  export type Player = import('pumpkin:plugin/player').Player;
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  export type World = import('pumpkin:plugin/world').World;
  /**
   * # Variants
   * 
   * ## `"highest"`
   * 
   * ## `"high"`
   * 
   * ## `"normal"`
   * 
   * ## `"low"`
   * 
   * ## `"lowest"`
   */
  export type EventPriority = 'highest' | 'high' | 'normal' | 'low' | 'lowest';
  export interface PlayerJoinEventData {
    player: Player,
    joinMessage: TextComponent,
    cancelled: boolean,
  }
  export interface PlayerLeaveEventData {
    player: Player,
    leaveMessage: TextComponent,
    cancelled: boolean,
  }
  export interface PlayerLoginEventData {
    player: Player,
    kickMessage: TextComponent,
    cancelled: boolean,
  }
  export interface PlayerChatEventData {
    player: Player,
    message: string,
    recipients: Array<Player>,
    cancelled: boolean,
  }
  export interface PlayerCommandSendEventData {
    player: Player,
    command: string,
    cancelled: boolean,
  }
  export interface PlayerPermissionCheckEventData {
    player: Player,
    permission: string,
    permissionResult: boolean,
  }
  export interface PlayerMoveEventData {
    player: Player,
    fromPosition: Position,
    toPosition: Position,
    cancelled: boolean,
  }
  export interface PlayerTeleportEventData {
    player: Player,
    fromPosition: Position,
    toPosition: Position,
    cancelled: boolean,
  }
  export interface PlayerChangeWorldEventData {
    player: Player,
    previousWorld: World,
    newWorld: World,
    position: Position,
    yaw: number,
    pitch: number,
    cancelled: boolean,
  }
  export interface PlayerExpChangeEventData {
    player: Player,
    amount: number,
  }
  export interface PlayerItemHeldEventData {
    player: Player,
    previousSlot: number,
    newSlot: number,
    cancelled: boolean,
  }
  export interface PlayerChangedMainHandEventData {
    player: Player,
    mainHand: Hand,
  }
  export interface PlayerGamemodeChangeEventData {
    player: Player,
    previousGamemode: GameMode,
    newGamemode: GameMode,
    cancelled: boolean,
  }
  export interface PlayerCustomPayloadEventData {
    player: Player,
    channel: string,
    data: Uint8Array,
  }
  /**
   * # Variants
   * 
   * ## `"fishing"`
   * 
   * ## `"caught-fish"`
   * 
   * ## `"caught-entity"`
   * 
   * ## `"in-ground"`
   * 
   * ## `"failed-attempt"`
   * 
   * ## `"reel-in"`
   * 
   * ## `"bite"`
   */
  export type PlayerFishState = 'fishing' | 'caught-fish' | 'caught-entity' | 'in-ground' | 'failed-attempt' | 'reel-in' | 'bite';
  export interface PlayerFishEventData {
    player: Player,
    caughtUuid?: string,
    caughtType: string,
    hookUuid: string,
    state: PlayerFishState,
    hand: Hand,
    expToDrop: number,
    cancelled: boolean,
  }
  export interface PlayerEggThrowEventData {
    player: Player,
    eggUuid: string,
    hatching: boolean,
    numHatches: number,
    hatchingType: string,
    cancelled: boolean,
  }
  /**
   * # Variants
   * 
   * ## `"interact"`
   * 
   * ## `"attack"`
   * 
   * ## `"interact-at"`
   */
  export type EntityInteractionAction = 'interact' | 'attack' | 'interact-at';
  /**
   * # Variants
   * 
   * ## `"left-click-block"`
   * 
   * ## `"left-click-air"`
   * 
   * ## `"right-click-air"`
   * 
   * ## `"right-click-block"`
   */
  export type InteractAction = 'left-click-block' | 'left-click-air' | 'right-click-air' | 'right-click-block';
  export interface PlayerInteractEventData {
    player: Player,
    action: InteractAction,
    clickedPos?: BlockPosition,
    item: ItemStack,
    block: string,
    cancelled: boolean,
  }
  export interface PlayerToggleSneakEventData {
    player: Player,
    isSneaking: boolean,
    cancelled: boolean,
  }
  export interface PlayerToggleFlightEventData {
    player: Player,
    isFlying: boolean,
    cancelled: boolean,
  }
  export interface PlayerToggleSprintEventData {
    player: Player,
    isSprinting: boolean,
    cancelled: boolean,
  }
  export interface PlayerInteractUnknownEntityEventData {
    player: Player,
    entityId: number,
    action: EntityInteractionAction,
    cancelled: boolean,
  }
  export interface BlockRedstoneEventData {
    targetWorld: World,
    stateId: number,
    blockPosition: BlockPosition,
    oldCurrent: number,
    newCurrent: number,
    cancelled: boolean,
  }
  export interface BlockBreakEventData {
    player?: Player,
    block: string,
    blockPosition: BlockPosition,
    exp: number,
    shouldDrop: boolean,
    cancelled: boolean,
  }
  export interface BlockBurnEventData {
    ignitingBlock: string,
    block: string,
    cancelled: boolean,
  }
  export interface BlockCanBuildEventData {
    blockToBuild: string,
    buildable: boolean,
    player: Player,
    block: string,
    cancelled: boolean,
  }
  export interface BlockGrowEventData {
    targetWorld: World,
    oldBlock: string,
    oldStateId: number,
    newBlock: string,
    newStateId: number,
    blockPosition: BlockPosition,
    cancelled: boolean,
  }
  export interface BlockPlaceEventData {
    player: Player,
    blockPlaced: string,
    blockPlacedAgainst: string,
    blockPosition: BlockPosition,
    canBuild: boolean,
    cancelled: boolean,
  }
  export interface ServerCommandEventData {
    command: string,
    cancelled: boolean,
  }
  export interface SpawnChangeEventData {
    targetWorld: World,
    previousPosition: BlockPosition,
    previousYaw: number,
    previousPitch: number,
    newPosition: BlockPosition,
    newYaw: number,
    newPitch: number,
  }
  export interface ServerBroadcastEventData {
    message: TextComponent,
    sender: TextComponent,
    cancelled: boolean,
  }
  /**
   * # Variants
   * 
   * ## `"player-join-event"`
   * 
   * ## `"player-leave-event"`
   * 
   * ## `"player-login-event"`
   * 
   * ## `"player-chat-event"`
   * 
   * ## `"player-command-send-event"`
   * 
   * ## `"player-permission-check-event"`
   * 
   * ## `"player-move-event"`
   * 
   * ## `"player-teleport-event"`
   * 
   * ## `"player-change-world-event"`
   * 
   * ## `"player-exp-change-event"`
   * 
   * ## `"player-item-held-event"`
   * 
   * ## `"player-changed-main-hand-event"`
   * 
   * ## `"player-gamemode-change-event"`
   * 
   * ## `"player-custom-payload-event"`
   * 
   * ## `"player-fish-event"`
   * 
   * ## `"player-egg-throw-event"`
   * 
   * ## `"player-interact-unknown-entity-event"`
   * 
   * ## `"player-interact-event"`
   * 
   * ## `"player-toggle-sneak-event"`
   * 
   * ## `"player-toggle-flight-event"`
   * 
   * ## `"player-toggle-sprint-event"`
   * 
   * ## `"block-redstone-event"`
   * 
   * ## `"block-break-event"`
   * 
   * ## `"block-burn-event"`
   * 
   * ## `"block-can-build-event"`
   * 
   * ## `"block-grow-event"`
   * 
   * ## `"block-place-event"`
   * 
   * ## `"server-command-event"`
   * 
   * ## `"spawn-change-event"`
   * 
   * ## `"server-broadcast-event"`
   */
  export type EventType = 'player-join-event' | 'player-leave-event' | 'player-login-event' | 'player-chat-event' | 'player-command-send-event' | 'player-permission-check-event' | 'player-move-event' | 'player-teleport-event' | 'player-change-world-event' | 'player-exp-change-event' | 'player-item-held-event' | 'player-changed-main-hand-event' | 'player-gamemode-change-event' | 'player-custom-payload-event' | 'player-fish-event' | 'player-egg-throw-event' | 'player-interact-unknown-entity-event' | 'player-interact-event' | 'player-toggle-sneak-event' | 'player-toggle-flight-event' | 'player-toggle-sprint-event' | 'block-redstone-event' | 'block-break-event' | 'block-burn-event' | 'block-can-build-event' | 'block-grow-event' | 'block-place-event' | 'server-command-event' | 'spawn-change-event' | 'server-broadcast-event';
  export type Event = EventPlayerJoinEvent | EventPlayerLeaveEvent | EventPlayerLoginEvent | EventPlayerChatEvent | EventPlayerCommandSendEvent | EventPlayerPermissionCheckEvent | EventPlayerMoveEvent | EventPlayerTeleportEvent | EventPlayerChangeWorldEvent | EventPlayerExpChangeEvent | EventPlayerItemHeldEvent | EventPlayerChangedMainHandEvent | EventPlayerGamemodeChangeEvent | EventPlayerCustomPayloadEvent | EventPlayerFishEvent | EventPlayerEggThrowEvent | EventPlayerInteractUnknownEntityEvent | EventPlayerInteractEvent | EventPlayerToggleSneakEvent | EventPlayerToggleFlightEvent | EventPlayerToggleSprintEvent | EventBlockRedstoneEvent | EventBlockBreakEvent | EventBlockBurnEvent | EventBlockCanBuildEvent | EventBlockGrowEvent | EventBlockPlaceEvent | EventServerCommandEvent | EventSpawnChangeEvent | EventServerBroadcastEvent;
  export interface EventPlayerJoinEvent {
    tag: 'player-join-event',
    val: PlayerJoinEventData,
  }
  export interface EventPlayerLeaveEvent {
    tag: 'player-leave-event',
    val: PlayerLeaveEventData,
  }
  export interface EventPlayerLoginEvent {
    tag: 'player-login-event',
    val: PlayerLoginEventData,
  }
  export interface EventPlayerChatEvent {
    tag: 'player-chat-event',
    val: PlayerChatEventData,
  }
  export interface EventPlayerCommandSendEvent {
    tag: 'player-command-send-event',
    val: PlayerCommandSendEventData,
  }
  export interface EventPlayerPermissionCheckEvent {
    tag: 'player-permission-check-event',
    val: PlayerPermissionCheckEventData,
  }
  export interface EventPlayerMoveEvent {
    tag: 'player-move-event',
    val: PlayerMoveEventData,
  }
  export interface EventPlayerTeleportEvent {
    tag: 'player-teleport-event',
    val: PlayerTeleportEventData,
  }
  export interface EventPlayerChangeWorldEvent {
    tag: 'player-change-world-event',
    val: PlayerChangeWorldEventData,
  }
  export interface EventPlayerExpChangeEvent {
    tag: 'player-exp-change-event',
    val: PlayerExpChangeEventData,
  }
  export interface EventPlayerItemHeldEvent {
    tag: 'player-item-held-event',
    val: PlayerItemHeldEventData,
  }
  export interface EventPlayerChangedMainHandEvent {
    tag: 'player-changed-main-hand-event',
    val: PlayerChangedMainHandEventData,
  }
  export interface EventPlayerGamemodeChangeEvent {
    tag: 'player-gamemode-change-event',
    val: PlayerGamemodeChangeEventData,
  }
  export interface EventPlayerCustomPayloadEvent {
    tag: 'player-custom-payload-event',
    val: PlayerCustomPayloadEventData,
  }
  export interface EventPlayerFishEvent {
    tag: 'player-fish-event',
    val: PlayerFishEventData,
  }
  export interface EventPlayerEggThrowEvent {
    tag: 'player-egg-throw-event',
    val: PlayerEggThrowEventData,
  }
  export interface EventPlayerInteractUnknownEntityEvent {
    tag: 'player-interact-unknown-entity-event',
    val: PlayerInteractUnknownEntityEventData,
  }
  export interface EventPlayerInteractEvent {
    tag: 'player-interact-event',
    val: PlayerInteractEventData,
  }
  export interface EventPlayerToggleSneakEvent {
    tag: 'player-toggle-sneak-event',
    val: PlayerToggleSneakEventData,
  }
  export interface EventPlayerToggleFlightEvent {
    tag: 'player-toggle-flight-event',
    val: PlayerToggleFlightEventData,
  }
  export interface EventPlayerToggleSprintEvent {
    tag: 'player-toggle-sprint-event',
    val: PlayerToggleSprintEventData,
  }
  export interface EventBlockRedstoneEvent {
    tag: 'block-redstone-event',
    val: BlockRedstoneEventData,
  }
  export interface EventBlockBreakEvent {
    tag: 'block-break-event',
    val: BlockBreakEventData,
  }
  export interface EventBlockBurnEvent {
    tag: 'block-burn-event',
    val: BlockBurnEventData,
  }
  export interface EventBlockCanBuildEvent {
    tag: 'block-can-build-event',
    val: BlockCanBuildEventData,
  }
  export interface EventBlockGrowEvent {
    tag: 'block-grow-event',
    val: BlockGrowEventData,
  }
  export interface EventBlockPlaceEvent {
    tag: 'block-place-event',
    val: BlockPlaceEventData,
  }
  export interface EventServerCommandEvent {
    tag: 'server-command-event',
    val: ServerCommandEventData,
  }
  export interface EventSpawnChangeEvent {
    tag: 'spawn-change-event',
    val: SpawnChangeEventData,
  }
  export interface EventServerBroadcastEvent {
    tag: 'server-broadcast-event',
    val: ServerBroadcastEventData,
  }
}
