import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Apartado extends Entity {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Apartado>) {
    super(data);
  }
}

export interface ApartadoRelations {
  // describe navigational properties here
}

export type ApartadoWithRelations = Apartado & ApartadoRelations;
