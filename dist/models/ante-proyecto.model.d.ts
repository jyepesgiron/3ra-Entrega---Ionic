import { Entity } from '@loopback/repository';
export declare class AnteProyecto extends Entity {
    id?: string;
    Nombre: string;
    Descripcion: string;
    Estado: string;
    ID_Estudiante: string;
    constructor(data?: Partial<AnteProyecto>);
}
export interface AnteProyectoRelations {
}
export type AnteProyectoWithRelations = AnteProyecto & AnteProyectoRelations;
