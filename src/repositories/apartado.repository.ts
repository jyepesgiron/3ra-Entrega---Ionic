import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataBaseDataSource} from '../datasources';
import {Apartado, ApartadoRelations} from '../models';

export class ApartadoRepository extends DefaultCrudRepository<
  Apartado,
  typeof Apartado.prototype.id,
  ApartadoRelations
> {
  constructor(
    @inject('datasources.DataBase') dataSource: DataBaseDataSource,
  ) {
    super(Apartado, dataSource);
  }
}
