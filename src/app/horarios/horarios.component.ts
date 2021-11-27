import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';



@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  public events: any[];
  public options: any;
  constructor() { }

  ngOnInit(): void {

    this.options = {
      plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
      defaulDate : new Date(),
      locale: esLocale,
      
      header: {
        rigth: 'prev,next',
        center: 'title',
        left: 'dayGridMonth,timeGridWeek,timeGridDay'
        
      },
      editable: true
    }
    this.events =[
    {
      title: "Entrada Juan",
      start: new Date(),
      description: "Hora de llegada de juan",
      backgroundColor: "#006D44",
      
    },
    {
      title: "Evento2",
      start: new Date(new Date().getTime() ),
      description: "Evento 2"
    },
  ]

  }

}
