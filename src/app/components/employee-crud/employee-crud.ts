import { employeesReducer } from './../../state_management/reducers/employee.reducer';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { deleteEmployee, fetchEmployees } from '../../state_management/actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-crud',
  imports: [
    CommonModule
  ],
  templateUrl: './employee-crud.html',
  styleUrl: './employee-crud.css'
})
export class EmployeeCrud {
  employees$: Observable<Employee[]> | undefined;

  constructor(private store: Store) {
    this.employees$ = this.store.select((fullStore: any) => fullStore.employeesReducer)
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }

  deleteEmp(id: string) {
    this.store.dispatch(deleteEmployee({ id }));
  }
}
