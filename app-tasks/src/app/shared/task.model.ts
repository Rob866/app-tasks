export class Task{
    $ID: number;
    Completado:boolean;
    DeadLine :Date;
    Duracion: number;
    Nombre: string;
    Notas :string;
    Agenda: Date;

    static fromJSON(json:any):Task{
        return null; //TODO :implement
    }

    static toJSON(obj:Task):any{
         return null; //TODO: implement
    }

    isToday() :boolean {

        return this.Agenda != null && this.Agenda.toDateString() == new Date().toDateString();
    }

    isSchedule() :boolean {

        return this.Agenda && !this.Completado && !this.isToday();
    }



   }