/// <reference path="./pumpkin-plugin-common.d.ts" />
declare module 'pumpkin:plugin/block-entity' {
  export type BlockPosition = import('pumpkin:plugin/common').BlockPosition;
  export type BlockEntityType = BlockEntityTypeCommandBlockEntity;
  export interface BlockEntityTypeCommandBlockEntity {
    tag: 'command-block-entity',
    val: CommandBlockEntity,
  }
  
  export class BlockEntity implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    resourceLocation(): string;
    getPosition(): BlockPosition;
    getId(): number;
    /**
    * write-nbt: func(nbt: nbt-compound);
    * from-nbt: func(nbt: nbt-compound, position: block-position) -> entity;
    * tick: func(world: simple-world);
    * write-internal: func(nbt: nbt-compound);
    * chunk-data-nbt: func() -> option<nbt-compound;
    * get-inventory: func() -> option<inventory>;
    * set-block-state: func(block-state: block-state-id);
    * on-block-replaced: func(world: simple-world, position: block-position);
    */
    isDirty(): boolean;
    clearDirty(): void;
    [Symbol.dispose](): void;
  }
  
  export class CommandBlockEntity implements Disposable {
    /**
     * This type does not have a public constructor.
     */
    private constructor();
    getBlockEntity(): BlockEntity;
    lastOutput(): string;
    trackOutput(): boolean;
    successCount(): number;
    command(): string;
    auto(): boolean;
    conditionMet(): boolean;
    powered(): boolean;
    [Symbol.dispose](): void;
  }
}
