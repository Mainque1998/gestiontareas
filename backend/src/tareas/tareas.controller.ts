import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { TareasService} from './tareas.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('tareas')
export class TareasController {
    constructor(private tareaService: TareasService) {}
    
  
    @Get()
    @UseGuards(AuthGuard)
    findAll(
      @ActiveUser() user: ActiveUserInterface
    ) {
      return this.tareaService.getAllTareasByUserInOrder(user);
    }
  
    @Post()
    @UseGuards(AuthGuard)
    create(
      @Body() t: CreateTareaDto,
      @ActiveUser() user: ActiveUserInterface
    ) {
      console.log(user)
      return this.tareaService.createTarea(t, user);
    }
  
    @Put(':id')
    @UseGuards(AuthGuard)
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() t: UpdateTareaDto,
      @ActiveUser() user: ActiveUserInterface
    ) {
      return this.tareaService.updateTarea(id, t, user);
    }
  
    @Put()
    @UseGuards(AuthGuard)
    updatePrioridadTareas(
      @ActiveUser() user: ActiveUserInterface
    ) {
      return this.tareaService.updateTareaPrioridadByVencimiento(user);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    delete(
      @Param('id', ParseIntPipe) id: number,
      @ActiveUser() user: ActiveUserInterface
    ) {
      return this.tareaService.deleteTarea(id, user);
    }
}
