import { createAction, Action } from '@ngrx/store';
/*export const increment = createAction('[Counter component] Increment');
export const decrement = createAction('[Counter component] Decrement');
export const reset = createAction('[Counter component] Reset');*/

export enum ECounterActions {
  INCREMENT = "[Counter component] Increment",
  DECREMENT = "[Counter component] Decrement",
  RESET = "[Counter component] Reset",
}

export class Increment implements Action {
  public readonly type = ECounterActions.INCREMENT;
}

export class Decrement implements Action {
  public readonly type = ECounterActions.DECREMENT;
}

export class Reset implements Action {
  public readonly type = ECounterActions.RESET;
}

export type CounterActions = Increment
  | Decrement
  | Reset;
