import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, MoreThan, Between, In, Not } from 'typeorm';
import { Tarea } from './entities/tarea.entity';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { IdNotFound } from 'src/common/customs_exceptions/id.not.found';
import { ActiveUserInterface } from 'src/common/interfaces/active-user.interface';
import { UserNotOwner } from 'src/common/customs_exceptions/user.not.owner';
import { Estado } from 'src/common/enums/estado.enum';
import { Prioridad } from 'src/common/enums/prioridad.enum';

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

    getAllTareasByUserInOrder(u: ActiveUserInterface){
        return this.tareasRepository.find({
            where: {
                emailUsuario: u.email,
            },
            order: {
                prioridad: "ASC",
                vencimiento: "ASC"
            }
        });   
    }

    async createTarea(t: CreateTareaDto, u: ActiveUserInterface){
        if(t.estado == Estado.DONE)
            t.prioridad = Prioridad.Nula;
        return this.tareasRepository.save({
            ...t,
            emailUsuario: u.email
        });
    }

    async updateTarea(id: number, newT: UpdateTareaDto, u: ActiveUserInterface){
        const oldT = await this.tareasRepository.findOneBy({id: id});
        const error = await this.checkTarea(id, oldT, u);
        if(error == null){
            if(newT.estado == Estado.DONE)//t.estado != null && 
                newT.prioridad = Prioridad.Nula;
            this.tareasRepository.merge(oldT, newT)
            return this.tareasRepository.save(oldT);
        }
        throw error;
    }

    async updateTareaPrioridadByVencimiento(u: ActiveUserInterface){
        //Primero actualiza a prioridad Alta las tareas a una semana de expirar
        const oneW = new Date();
        oneW.setDate(oneW.getDate() + 7);

        await this.tareasRepository
            .createQueryBuilder()
            .update(Tarea)
            .set({ prioridad: Prioridad.Alta })
            .where({
                emailUsuario: u.email,
                estado: Not(Estado.DONE),
                vencimiento: LessThan(oneW)
            })
            .execute();

        //Luego actualiza a prioridad Media a las tareas a dos semana de expirar que son de prioridad baja
        const twoW = new Date();
        twoW.setDate(twoW.getDate() + 14);

        await this.tareasRepository
            .createQueryBuilder()
            .update(Tarea)
            .set({ prioridad: Prioridad.Media })
            .where({
                emailUsuario: u.email,
                estado: Not(Estado.DONE),
                prioridad: Prioridad.Baja,
                vencimiento: Between(oneW, twoW)
            })
            .execute();

        return true;
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
