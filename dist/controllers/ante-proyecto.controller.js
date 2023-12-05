"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnteProyectoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AnteProyectoController = class AnteProyectoController {
    constructor(anteProyectoRepository) {
        this.anteProyectoRepository = anteProyectoRepository;
    }
    async create(anteProyecto) {
        return this.anteProyectoRepository.create(anteProyecto);
    }
    async count(where) {
        return this.anteProyectoRepository.count(where);
    }
    async find(filter) {
        return this.anteProyectoRepository.find(filter);
    }
    async updateAll(anteProyecto, where) {
        return this.anteProyectoRepository.updateAll(anteProyecto, where);
    }
    async findById(id, filter) {
        return this.anteProyectoRepository.findById(id, filter);
    }
    async updateById(id, anteProyecto) {
        await this.anteProyectoRepository.updateById(id, anteProyecto);
    }
    async replaceById(id, anteProyecto) {
        await this.anteProyectoRepository.replaceById(id, anteProyecto);
    }
    async deleteById(id) {
        await this.anteProyectoRepository.deleteById(id);
    }
};
exports.AnteProyectoController = AnteProyectoController;
tslib_1.__decorate([
    (0, rest_1.post)('/ante-proyectos'),
    (0, rest_1.response)(200, {
        description: 'AnteProyecto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto, {
                    title: 'NewAnteProyecto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ante-proyectos/count'),
    (0, rest_1.response)(200, {
        description: 'AnteProyecto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.AnteProyecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ante-proyectos'),
    (0, rest_1.response)(200, {
        description: 'Array of AnteProyecto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.AnteProyecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ante-proyectos'),
    (0, rest_1.response)(200, {
        description: 'AnteProyecto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.AnteProyecto)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.AnteProyecto, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/ante-proyectos/{id}'),
    (0, rest_1.response)(200, {
        description: 'AnteProyecto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.AnteProyecto, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/ante-proyectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'AnteProyecto PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.AnteProyecto, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AnteProyecto]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/ante-proyectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'AnteProyecto PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.AnteProyecto]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/ante-proyectos/{id}'),
    (0, rest_1.response)(204, {
        description: 'AnteProyecto DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], AnteProyectoController.prototype, "deleteById", null);
exports.AnteProyectoController = AnteProyectoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.AnteProyectoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AnteProyectoRepository])
], AnteProyectoController);
//# sourceMappingURL=ante-proyecto.controller.js.map