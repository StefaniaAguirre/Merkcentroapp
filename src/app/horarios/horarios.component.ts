import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  constructor() { }

  public events: any[];
  public options: any;
  ngOnInit(): void {

this.options = {
    plugins: [dayGridPlugin,timeGridPlugin,interactionPlugin],
    deafulDate: new Date(),
    locale: esLocale,
    header:{
      center: 'tittle',
      left: 'dayGridMonth,timeGridWeek,timeGridDay',
      right: 'prev,next'
    }, 

}

    this.events =[

    {
      title: "Evento 1",
      start: new Date(),
      description: "Evento 1",
  
      editable: true
    },
    {
      title: "Evento 2",
      start: new Date(),
      description: "Evento 2"

    }
    ]








  }

}
