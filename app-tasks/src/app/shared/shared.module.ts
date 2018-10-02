import  { NgModule } from '@angular/core';
import  { CommonModule } from '@angular/common';
import  {TimePipe} from "./time.pipe";
@NgModule({
  imports: [
    CommonModule
  ],
  exports :[
      TimePipe 
  ],
  declarations: [TimePipe]
})
export class SharedModule { }
