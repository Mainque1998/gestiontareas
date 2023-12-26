import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  prioridad: string;

  @Column()
  estado: string;

  @Column()
  vencimiento: Date;
}