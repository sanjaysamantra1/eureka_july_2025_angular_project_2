import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, toggleTodo } from '../../state_management/actions/todo.actions';

@Component({
  selector: 'app-todo-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './todocrud.html',
  styleUrl: './todocrud.css'
})
export class Todocrud {
  todos$: Observable<any> | undefined;

  constructor(private store: Store) {
    this.todos$ = this.store.select((fullStore: any) => fullStore.todoReducer);
  }

  deleteMyTodo(todoId: number) {
    this.store.dispatch(deleteTodo({ id: todoId }))
  }
  toggleMyTodo(todoId: number) {
    this.store.dispatch(toggleTodo({ id: todoId }))
  }
}
