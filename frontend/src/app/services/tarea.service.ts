import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaI } from '../interfaces/tarea.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url: string = "http://localhost:3000/tareas";

  constructor(private http: HttpClient) { }

  getAllTareasByUser():Observable<TareaI[]>{
    let path = this.url;

    return this.http.get<TareaI[]>(path);
  }

}
