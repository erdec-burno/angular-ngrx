import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {counterReducer} from "./counter.reducer";
import {environment} from "../../../environments/environment";

export const appReducer: ActionReducerMap<IAppState, any> = {
  counter: counterReducer
}
export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [] : [];
