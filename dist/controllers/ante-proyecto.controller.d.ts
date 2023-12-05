import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { AnteProyecto } from '../models';
import { AnteProyectoRepository } from '../repositories';
export declare class AnteProyectoController {
    anteProyectoRepository: AnteProyectoRepository;
    constructor(anteProyectoRepository: AnteProyectoRepository);
    create(anteProyecto: Omit<AnteProyecto, 'id'>): Promise<AnteProyecto>;
    count(where?: Where<AnteProyecto>): Promise<Count>;
    find(filter?: Filter<AnteProyecto>): Promise<AnteProyecto[]>;
    updateAll(anteProyecto: AnteProyecto, where?: Where<AnteProyecto>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<AnteProyecto>): Promise<AnteProyecto>;
    updateById(id: string, anteProyecto: AnteProyecto): Promise<void>;
    replaceById(id: string, anteProyecto: AnteProyecto): Promise<void>;
    deleteById(id: string): Promise<void>;
}
