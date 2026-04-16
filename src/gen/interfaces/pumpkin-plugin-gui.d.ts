/// <reference path="./pumpkin-plugin-common.d.ts" />
/// <reference path="./pumpkin-plugin-text.d.ts" />
declare module 'pumpkin:plugin/gui' {
  export type TextComponent = import('pumpkin:plugin/text').TextComponent;
  export type ItemStack = import('pumpkin:plugin/common').ItemStack;
  /**
   * # Variants
   * 
   * ## `"generic-9x1"`
   * 
   * ## `"generic-9x2"`
   * 
   * ## `"generic-9x3"`
   * 
   * ## `"generic-9x4"`
   * 
   * ## `"generic-9x5"`
   * 
   * ## `"generic-9x6"`
   * 
   * ## `"generic-3x3"`
   * 
   * ## `"crafter-3x3"`
   * 
   * ## `"anvil"`
   * 
   * ## `"beacon"`
   * 
   * ## `"blast-furnace"`
   * 
   * ## `"brewing-stand"`
   * 
   * ## `"crafting"`
   * 
   * ## `"enchantment"`
   * 
   * ## `"furnace"`
   * 
   * ## `"grindstone"`
   * 
   * ## `"hopper"`
   * 
   * ## `"lectern"`
   * 
   * ## `"loom"`
   * 
   * ## `"merchant"`
   * 
   * ## `"shulker-box"`
   * 
   * ## `"smithing"`
   * 
   * ## `"smoker"`
   * 
   * ## `"cartography-table"`
   * 
   * ## `"stonecutter"`
   */
  export type GuiType = 'generic-9x1' | 'generic-9x2' | 'generic-9x3' | 'generic-9x4' | 'generic-9x5' | 'generic-9x6' | 'generic-3x3' | 'crafter-3x3' | 'anvil' | 'beacon' | 'blast-furnace' | 'brewing-stand' | 'crafting' | 'enchantment' | 'furnace' | 'grindstone' | 'hopper' | 'lectern' | 'loom' | 'merchant' | 'shulker-box' | 'smithing' | 'smoker' | 'cartography-table' | 'stonecutter';
  
  export class Gui implements Disposable {
    constructor(type: GuiType, title: TextComponent)
    setItem(slot: number, item: ItemStack): void;
    getItem(slot: number): ItemStack | undefined;
    [Symbol.dispose](): void;
  }
}
