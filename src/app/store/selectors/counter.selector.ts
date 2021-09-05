import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ICounterState} from '../state/counter.state';
import {IAppState} from '../state/app.state';

const selectCounterFeature = (state: IAppState) => state.counter;
// export const selectCounterFeature = createFeatureSelector<ICounterState>('counter');

export const selectCounter = createSelector(
  selectCounterFeature,
  (state: ICounterState): number => state.count
);
