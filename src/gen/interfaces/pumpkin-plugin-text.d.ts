/// <reference path="./pumpkin-plugin-common.d.ts" />
declare module 'pumpkin:plugin/text' {
  export type NamedColor = import('pumpkin:plugin/common').NamedColor;
  export type RgbColor = import('pumpkin:plugin/common').RgbColor;
  export type ArgbColor = import('pumpkin:plugin/common').ArgbColor;
  
  export class TextComponent implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    static text(plain: string): TextComponent;
    static translate(key: string, with_: Array<TextComponent>): TextComponent;
    addChild(child: TextComponent): void;
    addText(text: string): void;
    getText(): string;
    encode(): Uint8Array;
    /**
    * Style
    */
    colorNamed(color: NamedColor): void;
    colorRgb(color: RgbColor): void;
    bold(value: boolean): void;
    italic(value: boolean): void;
    underlined(value: boolean): void;
    strikethrough(value: boolean): void;
    obfuscated(value: boolean): void;
    /**
    * Text inserted into chat when shift-clicked
    */
    insertion(text: string): void;
    font(font: string): void;
    shadowColor(color: ArgbColor): void;
    /**
    * Click events
    */
    clickOpenUrl(url: string): void;
    clickRunCommand(command: string): void;
    clickSuggestCommand(command: string): void;
    clickCopyToClipboard(text: string): void;
    /**
    * Hover events
    */
    hoverShowText(text: TextComponent): void;
    /**
    * Item data as SNBT string
    */
    hoverShowItem(item: string): void;
    hoverShowEntity(entityType: string, id: string, name: TextComponent | undefined): void;
    [Symbol.dispose](): void;
  }
}
