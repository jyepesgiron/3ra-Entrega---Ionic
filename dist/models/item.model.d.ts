import { Entity } from '@loopback/repository';
export declare class Item extends Entity {
    id?: string;
    Nombre: string;
    Contenido: string;
    ID_Estudiante: string;
    Correo_Estudiante: string;
    [prop: string]: any;
    constructor(data?: Partial<Item>);
}
export interface ItemRelations {
}
export type ItemWithRelations = Item & ItemRelations;
