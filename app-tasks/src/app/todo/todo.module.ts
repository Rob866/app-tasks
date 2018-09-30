import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FontAwesomeModule}  from '@fortawesome/angular-fontawesome'
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [TodoListComponent]
})
export class TodoModule { }
