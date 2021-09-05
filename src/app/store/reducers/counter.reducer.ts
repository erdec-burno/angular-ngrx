import { ECounterActions, CounterActions } from '../actions/counter.actions';
import {ICounterState, initialCounterState} from '../state/counter.state';

export const counterReducer = (
  state: ICounterState = initialCounterState,
  action: CounterActions,
) => {
  switch (action.type) {
    case ECounterActions.INCREMENT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case ECounterActions.DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case ECounterActions.RESET: {
      return {
        ...state,
        count: 0,
      };
    }

    default: {
      return state;
    }
  }
};

/*export const initialState = 0;
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}*/
