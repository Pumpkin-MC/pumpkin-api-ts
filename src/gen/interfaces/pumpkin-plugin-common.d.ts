declare module 'pumpkin:plugin/common' {
  /**
   * Serialized text component as a postcard byte array.
   * @deprecated Use the text-component resource from the text interface instead.
   */
  export type RawTextComponent = Uint8Array;
  /**
   * A position in the world grid (integers).
   */
  export type BlockPosition = [number, number, number];
  /**
   * A precise coordinate in the world (floats).
   */
  export type Position = [number, number, number];
  /**
   * Represents the hands of a player.
   * # Variants
   * 
   * ## `"left"`
   * 
   * ## `"right"`
   */
  export type Hand = 'left' | 'right';
  /**
   * Represents the game modes available in Minecraft.
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
  export type GameMode = 'survival' | 'creative' | 'adventure' | 'spectator';
  /**
   * The 16 base Minecraft colors.
   * # Variants
   * 
   * ## `"black"`
   * 
   * ## `"dark-blue"`
   * 
   * ## `"dark-green"`
   * 
   * ## `"dark-aqua"`
   * 
   * ## `"dark-red"`
   * 
   * ## `"dark-purple"`
   * 
   * ## `"gold"`
   * 
   * ## `"gray"`
   * 
   * ## `"dark-gray"`
   * 
   * ## `"blue"`
   * 
   * ## `"green"`
   * 
   * ## `"aqua"`
   * 
   * ## `"red"`
   * 
   * ## `"light-purple"`
   * 
   * ## `"yellow"`
   * 
   * ## `"white"`
   */
  export type NamedColor = 'black' | 'dark-blue' | 'dark-green' | 'dark-aqua' | 'dark-red' | 'dark-purple' | 'gold' | 'gray' | 'dark-gray' | 'blue' | 'green' | 'aqua' | 'red' | 'light-purple' | 'yellow' | 'white';
  /**
   * An RGB color represented by its red, green, and blue components.
   */
  export interface RgbColor {
    r: number,
    g: number,
    b: number,
  }
  /**
   * An ARGB color with alpha (transparency) channel.
   */
  export interface ArgbColor {
    a: number,
    r: number,
    g: number,
    b: number,
  }
  /**
   * Represents a stack of items with its type and count.
   */
  export interface ItemStack {
    /**
     * The unique registry key (e.g., "minecraft:diamond").
     */
    registryKey: string,
    /**
     * The number of items in the stack.
     */
    count: number,
  }
  /**
   * Represents the various poses an entity can be in.
   * # Variants
   * 
   * ## `"standing"`
   * 
   * ## `"fall-flying"`
   * 
   * ## `"sleeping"`
   * 
   * ## `"swimming"`
   * 
   * ## `"spin-attack"`
   * 
   * ## `"crouching"`
   * 
   * ## `"long-jumping"`
   * 
   * ## `"dying"`
   * 
   * ## `"croaking"`
   * 
   * ## `"using-tongue"`
   * 
   * ## `"sitting"`
   * 
   * ## `"roaring"`
   * 
   * ## `"sniffing"`
   * 
   * ## `"emerging"`
   * 
   * ## `"digging"`
   * 
   * ## `"sliding"`
   * 
   * ## `"shooting"`
   * 
   * ## `"inhaling"`
   */
  export type EntityPose = 'standing' | 'fall-flying' | 'sleeping' | 'swimming' | 'spin-attack' | 'crouching' | 'long-jumping' | 'dying' | 'croaking' | 'using-tongue' | 'sitting' | 'roaring' | 'sniffing' | 'emerging' | 'digging' | 'sliding' | 'shooting' | 'inhaling';
  /**
   * All Minecraft-supported locales.
   * # Variants
   * 
   * ## `"af-za"`
   * 
   * ## `"ar-sa"`
   * 
   * ## `"ast-es"`
   * 
   * ## `"az-az"`
   * 
   * ## `"ba-ru"`
   * 
   * ## `"bar"`
   * 
   * ## `"be-by"`
   * 
   * ## `"bg-bg"`
   * 
   * ## `"br-fr"`
   * 
   * ## `"brb"`
   * 
   * ## `"bs-ba"`
   * 
   * ## `"ca-es"`
   * 
   * ## `"cs-cz"`
   * 
   * ## `"cy-gb"`
   * 
   * ## `"da-dk"`
   * 
   * ## `"de-at"`
   * 
   * ## `"de-ch"`
   * 
   * ## `"de-de"`
   * 
   * ## `"el-gr"`
   * 
   * ## `"en-au"`
   * 
   * ## `"en-ca"`
   * 
   * ## `"en-gb"`
   * 
   * ## `"en-nz"`
   * 
   * ## `"en-pt"`
   * 
   * ## `"en-ud"`
   * 
   * ## `"en-us"`
   * 
   * ## `"enp"`
   * 
   * ## `"enws"`
   * 
   * ## `"eo-uy"`
   * 
   * ## `"es-ar"`
   * 
   * ## `"es-cl"`
   * 
   * ## `"es-ec"`
   * 
   * ## `"es-es"`
   * 
   * ## `"es-mx"`
   * 
   * ## `"es-uy"`
   * 
   * ## `"es-ve"`
   * 
   * ## `"esan"`
   * 
   * ## `"et-ee"`
   * 
   * ## `"eu-es"`
   * 
   * ## `"fa-ir"`
   * 
   * ## `"fi-fi"`
   * 
   * ## `"fil-ph"`
   * 
   * ## `"fo-fo"`
   * 
   * ## `"fr-ca"`
   * 
   * ## `"fr-fr"`
   * 
   * ## `"fra-de"`
   * 
   * ## `"fur-it"`
   * 
   * ## `"fy-nl"`
   * 
   * ## `"ga-ie"`
   * 
   * ## `"gd-gb"`
   * 
   * ## `"gl-es"`
   * 
   * ## `"haw-us"`
   * 
   * ## `"he-il"`
   * 
   * ## `"hi-in"`
   * 
   * ## `"hr-hr"`
   * 
   * ## `"hu-hu"`
   * 
   * ## `"hy-am"`
   * 
   * ## `"id-id"`
   * 
   * ## `"ig-ng"`
   * 
   * ## `"io-en"`
   * 
   * ## `"is-is"`
   * 
   * ## `"isv"`
   * 
   * ## `"it-it"`
   * 
   * ## `"ja-jp"`
   * 
   * ## `"jbo-en"`
   * 
   * ## `"ka-ge"`
   * 
   * ## `"kk-kz"`
   * 
   * ## `"kn-in"`
   * 
   * ## `"ko-kr"`
   * 
   * ## `"ksh"`
   * 
   * ## `"kw-gb"`
   * 
   * ## `"la-la"`
   * 
   * ## `"lb-lu"`
   * 
   * ## `"li-li"`
   * 
   * ## `"lmo"`
   * 
   * ## `"lo-la"`
   * 
   * ## `"lol-us"`
   * 
   * ## `"lt-lt"`
   * 
   * ## `"lv-lv"`
   * 
   * ## `"lzh"`
   * 
   * ## `"mk-mk"`
   * 
   * ## `"mn-mn"`
   * 
   * ## `"ms-my"`
   * 
   * ## `"mt-mt"`
   * 
   * ## `"nah"`
   * 
   * ## `"nds-de"`
   * 
   * ## `"nl-be"`
   * 
   * ## `"nl-nl"`
   * 
   * ## `"nn-no"`
   * 
   * ## `"no-no"`
   * 
   * ## `"oc-fr"`
   * 
   * ## `"ovd"`
   * 
   * ## `"pl-pl"`
   * 
   * ## `"pt-br"`
   * 
   * ## `"pt-pt"`
   * 
   * ## `"qya-aa"`
   * 
   * ## `"ro-ro"`
   * 
   * ## `"rpr"`
   * 
   * ## `"ru-ru"`
   * 
   * ## `"ry-ua"`
   * 
   * ## `"sah-sah"`
   * 
   * ## `"se-no"`
   * 
   * ## `"sk-sk"`
   * 
   * ## `"sl-si"`
   * 
   * ## `"so-so"`
   * 
   * ## `"sq-al"`
   * 
   * ## `"sr-cs"`
   * 
   * ## `"sr-sp"`
   * 
   * ## `"sv-se"`
   * 
   * ## `"sxu"`
   * 
   * ## `"szl"`
   * 
   * ## `"ta-in"`
   * 
   * ## `"th-th"`
   * 
   * ## `"tl-ph"`
   * 
   * ## `"tlh-aa"`
   * 
   * ## `"tok"`
   * 
   * ## `"tr-tr"`
   * 
   * ## `"tt-ru"`
   * 
   * ## `"uk-ua"`
   * 
   * ## `"val-es"`
   * 
   * ## `"vec-it"`
   * 
   * ## `"vi-vn"`
   * 
   * ## `"yi-de"`
   * 
   * ## `"yo-ng"`
   * 
   * ## `"zh-cn"`
   * 
   * ## `"zh-hk"`
   * 
   * ## `"zh-tw"`
   * 
   * ## `"zlm-arab"`
   */
  export type Locale = 'af-za' | 'ar-sa' | 'ast-es' | 'az-az' | 'ba-ru' | 'bar' | 'be-by' | 'bg-bg' | 'br-fr' | 'brb' | 'bs-ba' | 'ca-es' | 'cs-cz' | 'cy-gb' | 'da-dk' | 'de-at' | 'de-ch' | 'de-de' | 'el-gr' | 'en-au' | 'en-ca' | 'en-gb' | 'en-nz' | 'en-pt' | 'en-ud' | 'en-us' | 'enp' | 'enws' | 'eo-uy' | 'es-ar' | 'es-cl' | 'es-ec' | 'es-es' | 'es-mx' | 'es-uy' | 'es-ve' | 'esan' | 'et-ee' | 'eu-es' | 'fa-ir' | 'fi-fi' | 'fil-ph' | 'fo-fo' | 'fr-ca' | 'fr-fr' | 'fra-de' | 'fur-it' | 'fy-nl' | 'ga-ie' | 'gd-gb' | 'gl-es' | 'haw-us' | 'he-il' | 'hi-in' | 'hr-hr' | 'hu-hu' | 'hy-am' | 'id-id' | 'ig-ng' | 'io-en' | 'is-is' | 'isv' | 'it-it' | 'ja-jp' | 'jbo-en' | 'ka-ge' | 'kk-kz' | 'kn-in' | 'ko-kr' | 'ksh' | 'kw-gb' | 'la-la' | 'lb-lu' | 'li-li' | 'lmo' | 'lo-la' | 'lol-us' | 'lt-lt' | 'lv-lv' | 'lzh' | 'mk-mk' | 'mn-mn' | 'ms-my' | 'mt-mt' | 'nah' | 'nds-de' | 'nl-be' | 'nl-nl' | 'nn-no' | 'no-no' | 'oc-fr' | 'ovd' | 'pl-pl' | 'pt-br' | 'pt-pt' | 'qya-aa' | 'ro-ro' | 'rpr' | 'ru-ru' | 'ry-ua' | 'sah-sah' | 'se-no' | 'sk-sk' | 'sl-si' | 'so-so' | 'sq-al' | 'sr-cs' | 'sr-sp' | 'sv-se' | 'sxu' | 'szl' | 'ta-in' | 'th-th' | 'tl-ph' | 'tlh-aa' | 'tok' | 'tr-tr' | 'tt-ru' | 'uk-ua' | 'val-es' | 'vec-it' | 'vi-vn' | 'yi-de' | 'yo-ng' | 'zh-cn' | 'zh-hk' | 'zh-tw' | 'zlm-arab';
}
