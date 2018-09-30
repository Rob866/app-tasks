import { Component, OnInit } from '@angular/core';
import {faCheck,faCalendarAlt,faClock}  from "@fortawesome/free-solid-svg-icons"
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
   faCheck = faCheck;
   faCalendarAlt =faCalendarAlt;
   faClock = faClock;

   TodoListTab = TodoListTab;
   tab: TodoListTab = TodoListTab.COMPLETADO;
  

  constructor() { }


  OnTabClick(tab : TodoListTab){
    this.tab = tab;

  }
}

  enum TodoListTab{
  
    COMPLETADO ="Completado",
    AHORA="Ahora",
    AGENDAR="Agendar"
}
