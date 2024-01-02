import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { TareaEditI } from '../../interfaces/tarea-edit.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrl: './new-tarea.component.css'
})

export class NewTareaComponent implements OnInit{

  newForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    prioridad: new FormControl(null, Validators.required),
    estado: new FormControl(null, Validators.required),
    vencimiento: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private tareaService: TareaService
  ){}

  ngOnInit(): void {
    
  }

  create(form: TareaEditI){
    this.tareaService.createTarea(form).subscribe( data => {
      console.log(data);
      this.router.navigate(['tareas']);
    });
  }

  cancel(){
    this.router.navigate(['tareas']);
  }
}
