import {Entity, model, property} from '@loopback/repository';

@model()
export class AnteProyecto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @property({
    type: 'string',
    required: true,
  })
  ID_Estudiante: string;


  constructor(data?: Partial<AnteProyecto>) {
    super(data);
  }
}

export interface AnteProyectoRelations {
  // describe navigational properties here
}

export type AnteProyectoWithRelations = AnteProyecto & AnteProyectoRelations;
