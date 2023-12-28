import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { IdNotFound } from 'src/customs_exceptions/id.not.found';

@Injectable()
export class TareasService {

    constructor(
        @InjectRepository(Tarea)
        private tareasRepository: Repository<Tarea>,
    ){}
    
    getAllTareas()
    {
        return this.tareasRepository.find();    
    }

    async createTarea(t: CreateTareaDto)
    {
        const newT = await this.tareasRepository.create(t)
        return this.tareasRepository.save(newT);
    }

    async updateTarea(id: number, t: UpdateTareaDto)
    {
        const oldT = await this.tareasRepository.findOneBy({id: id});
        if(oldT == null)
            throw new IdNotFound(id);
        this.tareasRepository.merge(oldT, t)
        return this.tareasRepository.save(oldT);
    }

    async deleteTarea(id: number)
    {
        if(await this.tareasRepository.findOneBy({id: id}) == null)
            throw new IdNotFound(id);
        await this.tareasRepository.delete(id);
        return true;
    }

}
