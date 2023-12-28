import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarea]),
  ],
  exports: [TypeOrmModule],
  providers: [TareasService],
  controllers: [TareasController]
})
export class TareasModule {}
