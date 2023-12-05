import { DefaultCrudRepository } from '@loopback/repository';
import { DataBaseDataSource } from '../datasources';
import { Apartado, ApartadoRelations } from '../models';
export declare class ApartadoRepository extends DefaultCrudRepository<Apartado, typeof Apartado.prototype.id, ApartadoRelations> {
    constructor(dataSource: DataBaseDataSource);
}
