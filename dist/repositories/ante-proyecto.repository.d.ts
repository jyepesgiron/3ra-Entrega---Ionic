import { DefaultCrudRepository } from '@loopback/repository';
import { DataBaseDataSource } from '../datasources';
import { AnteProyecto, AnteProyectoRelations } from '../models';
export declare class AnteProyectoRepository extends DefaultCrudRepository<AnteProyecto, typeof AnteProyecto.prototype.id, AnteProyectoRelations> {
    constructor(dataSource: DataBaseDataSource);
}
