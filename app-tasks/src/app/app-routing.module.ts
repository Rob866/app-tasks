import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {TodoListComponent} from '../app/todo/todo-list/todo-list.component'

const routes:Routes = [
 { path:'',component: TodoListComponent }
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
