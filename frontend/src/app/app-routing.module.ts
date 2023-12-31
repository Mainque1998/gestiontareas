import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { EditTareaComponent } from './components/edit-tarea/edit-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'new-tarea', component: NewTareaComponent},
  { path: 'edit-tarea', component: EditTareaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, TareasComponent, NewTareaComponent, EditTareaComponent];