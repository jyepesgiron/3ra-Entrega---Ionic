import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Apartado } from '../models';
import { ApartadoRepository } from '../repositories';
export declare class ApartadoController {
    apartadoRepository: ApartadoRepository;
    constructor(apartadoRepository: ApartadoRepository);
    create(apartado: Omit<Apartado, 'id'>): Promise<Apartado>;
    count(where?: Where<Apartado>): Promise<Count>;
    find(filter?: Filter<Apartado>): Promise<Apartado[]>;
    updateAll(apartado: Apartado, where?: Where<Apartado>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Apartado>): Promise<Apartado>;
    updateById(id: string, apartado: Apartado): Promise<void>;
    replaceById(id: string, apartado: Apartado): Promise<void>;
    deleteById(id: string): Promise<void>;
}
