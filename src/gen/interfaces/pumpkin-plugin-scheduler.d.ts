declare module 'pumpkin:plugin/scheduler' {
  /**
   * Schedules a task to be executed once after the specified number of ticks.
   * 
   * * `handler-id`: The unique ID of the handler to call when the task executes.
   * * `delay-ticks`: The number of game ticks to wait before execution (20 ticks = 1 second).
   * 
   * Returns a unique task ID that can be used to cancel the task.
   */
  export function scheduleDelayedTask(handlerId: number, delayTicks: bigint): number;
  /**
   * Schedules a task to be executed repeatedly.
   * 
   * * `handler-id`: The unique ID of the handler to call when the task executes.
   * * `delay-ticks`: The number of game ticks to wait before the first execution.
   * * `period-ticks`: The number of game ticks between subsequent executions.
   * 
   * Returns a unique task ID that can be used to cancel the task.
   */
  export function scheduleRepeatingTask(handlerId: number, delayTicks: bigint, periodTicks: bigint): number;
  /**
   * Cancels a scheduled task if it hasn't finished yet.
   * 
   * * `task-id`: The ID of the task to cancel.
   */
  export function cancelTask(taskId: number): void;
}
