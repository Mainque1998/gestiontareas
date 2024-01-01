import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';
import { TareaI } from '../../interfaces/tarea.interface';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit{

  tareas: TareaI[] = [];

  constructor(
    private tareaService: TareaService,
    private router: Router
  ){}

  ngOnInit(): void {
    //antes habría que llamar al update de prioridades
    this.tareaService.getAllTareasByUser().subscribe( data =>{
      this.tareas = data;
      console.log(this.tareas);
    });
  }
}
