/// <reference path="./pumpkin-plugin-common.d.ts" />
declare module 'pumpkin:plugin/i18n' {
  /**
   * Retrieves a translated string from the host.
   * 
   * # Arguments
   * * `key`: The namespaced translation key (e.g. `pumpkin:my_key`).
   * * `locale`: The target locale.
   * 
   * # Returns
   * The localized string, falling back to English or the key itself.
   */
  export function translate(key: string, locale: Locale): string;
  /**
   * Loads custom translations from a JSON string.
   * 
   * # Arguments
   * * `namespace`: The namespace to associate these keys with.
   * * `json`: A JSON string containing a flat map of translations.
   * * `locale`: The target locale for these translations.
   */
  export function loadTranslations(namespace: string, json: string, locale: Locale): void;
  export type Locale = import('pumpkin:plugin/common').Locale;
}
