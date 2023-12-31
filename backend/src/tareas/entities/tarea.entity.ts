import { Estado } from 'src/common/enums/estado.enum';
import { Prioridad } from 'src/common/enums/prioridad.enum';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column({type: 'enum', enum: Prioridad})
  prioridad: string;

  @Column({type: 'enum', enum: Estado})
  estado: string;

  @Column()
  vencimiento: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'emailUsuario', referencedColumnName: 'email' })
  usuario: User;

  @Column()
  emailUsuario: string;
}