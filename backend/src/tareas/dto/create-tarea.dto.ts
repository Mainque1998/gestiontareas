import { IsDateString, IsString, IsEnum} from 'class-validator';
import { Estado } from 'src/common/enums/estado.enum';
import { Prioridad } from 'src/common/enums/prioridad.enum';
  
  export class CreateTareaDto {
    @IsString()
    nombre: string;
  
    @IsString()
    descripcion: string;
  
    @IsEnum(Prioridad)
    prioridad: Prioridad;
  
    @IsEnum(Estado)
    estado: Estado;
  
    @IsDateString()
    vencimiento: Date;
  }