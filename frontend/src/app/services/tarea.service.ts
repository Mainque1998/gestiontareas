import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaI } from '../interfaces/tarea.interface';
import { Observable } from 'rxjs';
import { TareaEditI } from '../interfaces/tarea-edit.interface';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url: string = "http://localhost:3000/tareas";

  constructor(private http: HttpClient) { }

  getTareaById(id:number):Observable<TareaI>{
    let path = this.url + '/' + id;

    return this.http.get<TareaI>(path);
  }

  /*
  getAllTareasByUser():Observable<TareaI[]>{
    let path = this.url;

    return this.http.get<TareaI[]>(path);
  }*/

  updateTareasPrioridad():Observable<TareaI[]>{
    let path = this.url;
    return this.http.get<TareaI[]>(path);
  }

  updateTarea(form:TareaEditI):Observable<TareaI>{
    let path = this.url + '/' + form.id;
    let t = {
      nombre: form.nombre,
      descripcion: form.descripcion,
      prioridad: form.prioridad,
      estado: form.estado,
      vencimiento: form.vencimiento
    };
    return this.http.put<TareaI>(path, t);
  }

  deleteTarea(id: string){
    let path = this.url + '/' + id;
    return this.http.delete(path);
  }

}
