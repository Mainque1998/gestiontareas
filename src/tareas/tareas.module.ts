import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from './entities/tarea.entity';
import { TareasService } from './services/tareas.service';
import { TareasController } from './controllers/tareas.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarea]),
    TareasModule],
  exports: [TypeOrmModule],
  providers: [TareasService],
  controllers: [TareasController]
})
export class TareasModule {}
