/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
declare module 'pumpkin:plugin/scoreboard' {
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  export type NamedColor = import('pumpkin:plugin/common').NamedColor;
  /**
   * # Variants
   * 
   * ## `"integer"`
   * 
   * ## `"hearts"`
   */
  export type RenderType = 'integer' | 'hearts';
  /**
   * # Variants
   * 
   * ## `"player-list"`
   * 
   * ## `"sidebar"`
   * 
   * ## `"below-name"`
   * 
   * ## `"sidebar-team-black"`
   * 
   * ## `"sidebar-team-dark-blue"`
   * 
   * ## `"sidebar-team-dark-green"`
   * 
   * ## `"sidebar-team-dark-aqua"`
   * 
   * ## `"sidebar-team-dark-red"`
   * 
   * ## `"sidebar-team-dark-purple"`
   * 
   * ## `"sidebar-team-gold"`
   * 
   * ## `"sidebar-team-gray"`
   * 
   * ## `"sidebar-team-dark-gray"`
   * 
   * ## `"sidebar-team-blue"`
   * 
   * ## `"sidebar-team-green"`
   * 
   * ## `"sidebar-team-aqua"`
   * 
   * ## `"sidebar-team-red"`
   * 
   * ## `"sidebar-team-light-purple"`
   * 
   * ## `"sidebar-team-yellow"`
   * 
   * ## `"sidebar-team-white"`
   */
  export type DisplaySlot = 'player-list' | 'sidebar' | 'below-name' | 'sidebar-team-black' | 'sidebar-team-dark-blue' | 'sidebar-team-dark-green' | 'sidebar-team-dark-aqua' | 'sidebar-team-dark-red' | 'sidebar-team-dark-purple' | 'sidebar-team-gold' | 'sidebar-team-gray' | 'sidebar-team-dark-gray' | 'sidebar-team-blue' | 'sidebar-team-green' | 'sidebar-team-aqua' | 'sidebar-team-red' | 'sidebar-team-light-purple' | 'sidebar-team-yellow' | 'sidebar-team-white';
  /**
   * # Variants
   * 
   * ## `"always"`
   * 
   * ## `"never"`
   * 
   * ## `"hide-for-other-teams"`
   * 
   * ## `"hide-for-own-team"`
   */
  export type NametagVisibility = 'always' | 'never' | 'hide-for-other-teams' | 'hide-for-own-team';
  /**
   * # Variants
   * 
   * ## `"always"`
   * 
   * ## `"never"`
   * 
   * ## `"push-other-teams"`
   * 
   * ## `"push-own-team"`
   */
  export type CollisionRule = 'always' | 'never' | 'push-other-teams' | 'push-own-team';
  export interface TeamSettings {
    displayName: TextComponent,
    friendlyFire: boolean,
    seeFriendlyInvisibles: boolean,
    nametagVisibility: NametagVisibility,
    collisionRule: CollisionRule,
    color: NamedColor,
    prefix: TextComponent,
    suffix: TextComponent,
  }
  
  export class Scoreboard implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    addObjective(name: string, displayName: TextComponent, renderType: RenderType): void;
    removeObjective(name: string): void;
    setDisplaySlot(slot: DisplaySlot, objectiveName: string): void;
    updateScore(entityName: string, objectiveName: string, value: number): void;
    removeScore(entityName: string, objectiveName: string): void;
    createTeam(name: string, settings: TeamSettings): void;
    removeTeam(name: string): void;
    updateTeam(name: string, settings: TeamSettings): void;
    addPlayerToTeam(teamName: string, playerName: string): void;
    removePlayerFromTeam(teamName: string, playerName: string): void;
    [Symbol.dispose](): void;
  }
}
