import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Apartado} from '../models';
import {ApartadoRepository} from '../repositories';

export class ApartadoController {
  constructor(
    @repository(ApartadoRepository)
    public apartadoRepository : ApartadoRepository,
  ) {}

  @post('/apartados')
  @response(200, {
    description: 'Apartado model instance',
    content: {'application/json': {schema: getModelSchemaRef(Apartado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartado, {
            title: 'NewApartado',
            exclude: ['id'],
          }),
        },
      },
    })
    apartado: Omit<Apartado, 'id'>,
  ): Promise<Apartado> {
    return this.apartadoRepository.create(apartado);
  }

  @get('/apartados/count')
  @response(200, {
    description: 'Apartado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Apartado) where?: Where<Apartado>,
  ): Promise<Count> {
    return this.apartadoRepository.count(where);
  }

  @get('/apartados')
  @response(200, {
    description: 'Array of Apartado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Apartado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Apartado) filter?: Filter<Apartado>,
  ): Promise<Apartado[]> {
    return this.apartadoRepository.find(filter);
  }

  @patch('/apartados')
  @response(200, {
    description: 'Apartado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartado, {partial: true}),
        },
      },
    })
    apartado: Apartado,
    @param.where(Apartado) where?: Where<Apartado>,
  ): Promise<Count> {
    return this.apartadoRepository.updateAll(apartado, where);
  }

  @get('/apartados/{id}')
  @response(200, {
    description: 'Apartado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Apartado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Apartado, {exclude: 'where'}) filter?: FilterExcludingWhere<Apartado>
  ): Promise<Apartado> {
    return this.apartadoRepository.findById(id, filter);
  }

  @patch('/apartados/{id}')
  @response(204, {
    description: 'Apartado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Apartado, {partial: true}),
        },
      },
    })
    apartado: Apartado,
  ): Promise<void> {
    await this.apartadoRepository.updateById(id, apartado);
  }

  @put('/apartados/{id}')
  @response(204, {
    description: 'Apartado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() apartado: Apartado,
  ): Promise<void> {
    await this.apartadoRepository.replaceById(id, apartado);
  }

  @del('/apartados/{id}')
  @response(204, {
    description: 'Apartado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.apartadoRepository.deleteById(id);
  }
}
