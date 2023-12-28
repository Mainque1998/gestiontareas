import { IsOptional, IsDateString, IsString, IsEnum} from 'class-validator';
import { Estado } from 'src/common/enums/estado.enum';
import { Prioridad } from 'src/common/enums/prioridad.enum';
  
  export class UpdateTareaDto {
    @IsOptional()
    @IsString()
    nombre: string;
  
    @IsOptional()
    @IsString()
    descripcion: string;
  
    @IsOptional()
    @IsEnum(Prioridad)
    prioridad: Prioridad;
  
    @IsOptional()
    @IsEnum(Estado)
    estado: Estado;
  
    @IsOptional()
    @IsDateString()
    vencimiento: Date;
  }