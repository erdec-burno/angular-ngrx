import {ICounterState, initialCounterState} from './counter.state';

export interface IAppState {
  counter: ICounterState
}

export const initialAppState: IAppState = {
  counter: initialCounterState
}
