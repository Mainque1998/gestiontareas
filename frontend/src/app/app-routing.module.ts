import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { EditTareaComponent } from './components/edit-tarea/edit-tarea.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'tareas', component: TareasComponent},
  { path: 'new-tarea', component: NewTareaComponent},
  { path: 'edit-tarea/:id', component: EditTareaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent, 
  RegisterComponent, 
  TareasComponent, 
  NewTareaComponent, 
  EditTareaComponent
];