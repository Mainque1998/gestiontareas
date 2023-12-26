import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TareasService} from '../services/tareas.service';
import { Tarea } from '../entities/tarea.entity';

@Controller('tareas')
export class TareasController {
    constructor(private tareaService: TareasService) {}
    
  
    @Get()
    findAll() {
      return this.tareaService.getAllTareas()
    }
  
    @Post()
    create(@Body() t: Tarea) {
      return this.tareaService.createTarea(t);
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() t: Tarea) {
      return this.tareaService.updateTarea(id, t);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.tareaService.deleteTarea(id);
    }
}
