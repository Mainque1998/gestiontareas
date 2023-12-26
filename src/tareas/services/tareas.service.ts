import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from '../entities/tarea.entity';
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

    async createTarea(p: Tarea)
    {
        const newP = await this.tareasRepository.create(p)
        return this.tareasRepository.save(newP);
    }

    async updateTarea(id: number, p: Tarea)
    {
        const oldP = await this.tareasRepository.findOneBy({id: id});
        if(oldP == null)
            throw new IdNotFound(id);
        this.tareasRepository.merge(oldP, p)
        return this.tareasRepository.save(oldP);
    }

    async deleteTarea(id: number)
    {
        if(await this.tareasRepository.findOneBy({id: id}) == null)
            throw new IdNotFound(id);
        await this.tareasRepository.delete(id);
        return true;
    }

}
