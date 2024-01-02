import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { TareaI } from '../../interfaces/tarea.interface';
import { TareaEditI } from '../../interfaces/tarea-edit.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrl: './edit-tarea.component.css'
})
export class EditTareaComponent implements OnInit{

  editForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    prioridad: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required),
    vencimiento: new FormControl('', Validators.required)
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private tareaService: TareaService
  ){}
  
  ngOnInit(): void {
    let tareaId = this.activeRoute.snapshot.paramMap.get('id');
    if( tareaId != null){
      this.tareaService.getTareaById(parseInt(tareaId)).subscribe( data =>{
        let tarea: TareaI = data;
        this.editForm.setValue({
          id: tareaId,
          nombre: tarea.nombre,
          descripcion: tarea.descripcion,
          prioridad: tarea.prioridad,
          estado: tarea.estado,
          vencimiento: formatDate(tarea.vencimiento, 'yyyy-MM-dd', 'en')
        });
      });
    }
  }

  update(form:TareaEditI){
    this.tareaService.updateTarea(form).subscribe( data => {
      console.log(data);
      this.router.navigate(['tareas']);
    });
  }

  delete(form:TareaEditI){
    this.tareaService.deleteTarea(form.id).subscribe( data => {
      console.log(data);
      this.router.navigate(['tareas']);
    });
  }

  cancel(){
    this.router.navigate(['tareas']);
  }

}
