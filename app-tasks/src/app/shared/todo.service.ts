import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from "../shared/task.model";

@Injectable({
    providedIn: 'root'
})

export  class TodoService{
   
    getTasks():Observable<Task[]>{
        //TODO: implement for real with http service
       
       return Observable.create((observable)=>{
        let result :Task[] =[];

        for(let i=0 ; i< 30 ; i++){
            let task= new Task();
            task.$ID=i;
            task.Completado= i % 2 ==0;
            task.Duracion =i * 30;
            task.Agenda = i % 3 == 0 ? new Date(): new Date(new Date().getTime()+ i*24*60*60*1000);
            task.Nombre = "Comprar Leche" +i;
            task.Notas= "Notas x" + i
            result.push(task);
        }
        observable.next(result);
        observable.complete();
     
       }) 

           
    }
}