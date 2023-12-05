import { Entity } from '@loopback/repository';
export declare class Apartado extends Entity {
    id?: string;
    Nombre: string;
    [prop: string]: any;
    constructor(data?: Partial<Apartado>);
}
export interface ApartadoRelations {
}
export type ApartadoWithRelations = Apartado & ApartadoRelations;
