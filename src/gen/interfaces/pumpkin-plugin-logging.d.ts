declare module 'pumpkin:plugin/logging' {
  /**
   * log any general purpose message
   */
  export function log(level: Level, message: string): void;
  /**
   * This function is meant to be used by the tracing crate.
   */
  export function logTracing(event: Uint8Array): void;
  /**
   * # Variants
   * 
   * ## `"trace"`
   * 
   * ## `"debug"`
   * 
   * ## `"info"`
   * 
   * ## `"warn"`
   * 
   * ## `"error"`
   */
  export type Level = 'trace' | 'debug' | 'info' | 'warn' | 'error';
}
