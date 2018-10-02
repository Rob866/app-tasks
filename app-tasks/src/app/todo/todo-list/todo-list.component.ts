import { Component, OnInit, OnDestroy } from '@angular/core';
import {faCheck,faCalendarAlt,faClock,faCircle,faCheckCircle}  from "@fortawesome/free-solid-svg-icons"
import {TodoService} from '../../shared/todo.service';
import {Task} from "../../shared/task.model";
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  implements OnInit,OnDestroy{
  /* from fontawesome*/ 
   faCheck = faCheck;
   faCalendarAlt =faCalendarAlt;
   faClock = faClock;
   faCircle = faCircle;
   faCheckCircle= faCheckCircle;

   TodoListTab = TodoListTab;
   tab: TodoListTab = TodoListTab.AHORA;
   
   tasksByTab : {[key:string]:Task[]} ={};
   subscriptionsTasks:Subscription;
  
  constructor(private todoService:TodoService) {

   }


  onTasksChange(tasks:Task[]){
      this.tasksByTab = tasks.reduce((acomulador,value)=>{ 
      let tab:TodoListTab;
      if (value.Completado)  tab= TodoListTab.COMPLETADO;
      else if (value.isToday()) tab= TodoListTab.AHORA;
      else if (value.isSchedule()) tab = TodoListTab.AGENDA;

      acomulador[tab] = acomulador[tab] || [];
      acomulador[tab].push(value)
      return acomulador
   },{})

   console.log(this.tasksByTab);

  }

  ngOnInit(){
   this.subscriptionsTasks && this.subscriptionsTasks.unsubscribe();
   this.subscriptionsTasks= this.todoService.getTasks().subscribe(value=> this.onTasksChange(value));
  }

  ngOnDestroy(){
    this.subscriptionsTasks && this.subscriptionsTasks.unsubscribe();
  }


  OnTabClick(tab : TodoListTab){
    this.tab = tab;
  }
}

  enum TodoListTab{
  
    COMPLETADO ="Completado",
    AHORA="Ahora",
    AGENDA="Agenda"
}
