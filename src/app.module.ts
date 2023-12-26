import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasModule } from './tareas/tareas.module';
import { Tarea } from './tareas/entities/tarea.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'GestorTareas',
      entities: [Tarea],
      logging: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([Tarea]),
    TareasModule],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
