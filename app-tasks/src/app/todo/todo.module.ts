import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FontAwesomeModule}  from '@fortawesome/angular-fontawesome'
import {SharedModule} from'../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports:[
    TodoListComponent
  ],
  declarations: [TodoListComponent]
})
export class TodoModule { }
