import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TareasService} from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Controller('tareas')
export class TareasController {
    constructor(private tareaService: TareasService) {}
    
  
    @Get()
    findAll() {
      return this.tareaService.getAllTareas()
    }
  
    @Post()
    create(@Body() t: CreateTareaDto) {
      return this.tareaService.createTarea(t);
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() t: UpdateTareaDto) {
      return this.tareaService.updateTarea(id, t);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.tareaService.deleteTarea(id);
    }
}
