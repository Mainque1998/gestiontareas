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
    console.log("iniciando tareas");

    this.tareaService.updateTareasPrioridad().subscribe( data =>{
      this.tareas = data;
      console.log(this.tareas);
    });
  }

  newTarea(): void {
    this.router.navigate(['new-tarea']);
  }

  selectTarea(id: number): void {
    this.router.navigate(['edit-tarea', id]);
  }
  
  nextToExpire(vencimiento: Date): boolean {
    const unaSemanaEnMilisegundos = 7 * 24 * 60 * 60 * 1000;
    
    const fechaVencimientoDate = typeof vencimiento === 'string' ? new Date(vencimiento) : vencimiento;
    if (!(fechaVencimientoDate instanceof Date) || isNaN(fechaVencimientoDate.getTime())) {
      return false; // No es una fecha válida
    }
  
    const fechaActual = new Date();
    const diferencia = fechaVencimientoDate.getTime() - fechaActual.getTime();
    return diferencia <= unaSemanaEnMilisegundos;
  }
}
