import { IsOptional, IsDateString, IsString} from 'class-validator';
  
  export class UpdateTareaDto {
    @IsOptional()
    @IsString()
    nombre: string;
  
    @IsOptional()
    @IsString()
    descripcion: string;
  
    @IsOptional()
    @IsString()
    prioridad: string;
  
    @IsOptional()
    @IsString()
    estado: string;
  
    @IsOptional()
    @IsDateString()
    vencimiento: Date;
  }