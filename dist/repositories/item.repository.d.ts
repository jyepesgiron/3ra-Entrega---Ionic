import { DefaultCrudRepository } from '@loopback/repository';
import { DataBaseDataSource } from '../datasources';
import { Item, ItemRelations } from '../models';
export declare class ItemRepository extends DefaultCrudRepository<Item, typeof Item.prototype.id, ItemRelations> {
    constructor(dataSource: DataBaseDataSource);
}
