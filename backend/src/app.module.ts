import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TareasModule } from './tareas/tareas.module';
import { Tarea } from './tareas/entities/tarea.entity';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'GestorTareas',
      entities: [Tarea, User],
      logging: true,
      synchronize: true
    }),
    TareasModule,
    AuthModule],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
