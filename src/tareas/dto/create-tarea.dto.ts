import { IsOptional, IsDateString, IsString} from 'class-validator';
  
  export class CreateTareaDto {
    @IsString()
    nombre: string;
  
    @IsString()
    descripcion: string;
  
    @IsString()
    prioridad: string;
  
    @IsString()
    estado: string;
  
    @IsDateString()
    vencimiento: Date;
  }