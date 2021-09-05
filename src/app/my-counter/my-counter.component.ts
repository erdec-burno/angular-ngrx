import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { Decrement, Increment, Reset} from '../store/actions/counter.actions';
import {IAppState} from '../store/state/app.state';
import {selectCounter} from '../store/selectors/counter.selector';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {

  public count$: Observable<number> = this.store.pipe(select(selectCounter));

  constructor(private store: Store<IAppState>) {
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
