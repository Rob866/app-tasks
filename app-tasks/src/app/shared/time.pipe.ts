import { Pipe,PipeTransform } from "@angular/core";
import { pipe } from "@angular/core/src/render3/pipe";
const TIME_MINUTE :number =60;
const TIME_HOUR:number= TIME_MINUTE * 60;
const TIME_DAY: number = TIME_HOUR *24;


@Pipe({
    name :'time'
})
export class TimePipe implements PipeTransform {

   transform(value : any, args?: any){
      value = +value;
      let days = Math.floor(value / TIME_DAY);
      let hours = Math.floor(value % TIME_DAY / TIME_HOUR);
      let minutes=Math.floor(value % TIME_HOUR / TIME_MINUTE);
      let seconds = value % TIME_MINUTE;

      let result= [];
      if (days > 0) result.push(days + " dia"+ (days > 1 ? 's': ''));
      if (hours > 0) result.push(hours + " hora"+ (hours > 1 ? 's': ''));
      if (minutes > 0) result.push(minutes + " minuto"+ (minutes > 1 ? 's': ''));
      if (seconds > 0) result.push(seconds + " segundo"+ (seconds > 1 ? 's': ''));
   
    return result.join(' ');
    }
}
