import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { NewTareaComponent } from './components/new-tarea/new-tarea.component';
import { EditTareaComponent } from './components/edit-tarea/edit-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TareasComponent,
    NewTareaComponent,
    EditTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
