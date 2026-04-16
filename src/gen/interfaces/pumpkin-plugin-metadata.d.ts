declare module 'pumpkin:plugin/metadata' {
  export function getMetadata(): PluginMetadata;
  export interface PluginMetadata {
    /**
     * Name of the plugin.
     */
    name: string,
    /**
     * Plugin version (semver).
     */
    version: string,
    /**
     * Plugin authors.
     */
    authors: Array<string>,
    /**
     * Short description of the plugin.
     */
    description: string,
    /**
     * Plugin dependencies.
     */
    dependencies: Array<string>,
  }
}
