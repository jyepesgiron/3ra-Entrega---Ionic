"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartadoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ApartadoController = class ApartadoController {
    constructor(apartadoRepository) {
        this.apartadoRepository = apartadoRepository;
    }
    async create(apartado) {
        return this.apartadoRepository.create(apartado);
    }
    async count(where) {
        return this.apartadoRepository.count(where);
    }
    async find(filter) {
        return this.apartadoRepository.find(filter);
    }
    async updateAll(apartado, where) {
        return this.apartadoRepository.updateAll(apartado, where);
    }
    async findById(id, filter) {
        return this.apartadoRepository.findById(id, filter);
    }
    async updateById(id, apartado) {
        await this.apartadoRepository.updateById(id, apartado);
    }
    async replaceById(id, apartado) {
        await this.apartadoRepository.replaceById(id, apartado);
    }
    async deleteById(id) {
        await this.apartadoRepository.deleteById(id);
    }
};
exports.ApartadoController = ApartadoController;
tslib_1.__decorate([
    (0, rest_1.post)('/apartados'),
    (0, rest_1.response)(200, {
        description: 'Apartado model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Apartado) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Apartado, {
                    title: 'NewApartado',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/apartados/count'),
    (0, rest_1.response)(200, {
        description: 'Apartado model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Apartado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/apartados'),
    (0, rest_1.response)(200, {
        description: 'Array of Apartado model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Apartado, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Apartado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/apartados'),
    (0, rest_1.response)(200, {
        description: 'Apartado PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Apartado, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Apartado)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Apartado, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/apartados/{id}'),
    (0, rest_1.response)(200, {
        description: 'Apartado model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Apartado, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Apartado, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/apartados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Apartado PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Apartado, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Apartado]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/apartados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Apartado PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Apartado]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/apartados/{id}'),
    (0, rest_1.response)(204, {
        description: 'Apartado DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ApartadoController.prototype, "deleteById", null);
exports.ApartadoController = ApartadoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ApartadoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ApartadoRepository])
], ApartadoController);
//# sourceMappingURL=apartado.controller.js.map