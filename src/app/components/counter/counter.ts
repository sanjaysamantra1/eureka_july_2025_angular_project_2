import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../state_management/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [
    CommonModule
  ],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count$: Observable<number> | undefined;

  constructor(private store: Store) {
    this.count$ = this.store.select((fullStore: any) => fullStore.counterReducer); // selector
  }

  incrementCount() {
    let actionObject = increment();
    this.store.dispatch(actionObject); // dispatch Action
  }
  decrementCount() {
    this.store.dispatch(decrement());
  }
  resetCount() {
    this.store.dispatch(reset());
  }
}
