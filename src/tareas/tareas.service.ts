import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarea } from './entities/tarea.entity';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { IdNotFound } from 'src/common/customs_exceptions/id.not.found';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { UserNotOwner } from 'src/common/customs_exceptions/user.not.owner';

@Injectable()
export class TareasService {

    constructor(
        @InjectRepository(Tarea)
        private tareasRepository: Repository<Tarea>,
    ){}
    
    getAllTareas(){
        return this.tareasRepository.find();    
    }

    getAllTareasByUser(u: ActiveUserInterface){
        return this.tareasRepository.find({where: {emailUsuario: u.email}});    
    }

    async createTarea(t: CreateTareaDto, u: ActiveUserInterface){
        return this.tareasRepository.save({
            ...t,
            emailUsuario: u.email
        });
    }

    async updateTarea(id: number, t: UpdateTareaDto, u: ActiveUserInterface){
        const oldT = await this.tareasRepository.findOneBy({id: id});
        const error = await this.checkTarea(id, oldT, u);
        if(error == null){
            this.tareasRepository.merge(oldT, t)
            return this.tareasRepository.save(oldT);
        }
        throw error;
    }

    async deleteTarea(id: number, u: ActiveUserInterface){
        const error = await this.checkTarea(id, await this.tareasRepository.findOneBy({id: id}), u);
        if(error == null){
            await this.tareasRepository.delete(id);
            return true;
        }
        throw error;
    }

    checkTarea(idT: number, t: Tarea, u: ActiveUserInterface){
        if(t == null)
            return new IdNotFound(idT);
        if(t.emailUsuario != u.email)
            return new UserNotOwner(idT);
        return null;
    }
}
