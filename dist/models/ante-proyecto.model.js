"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnteProyecto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let AnteProyecto = class AnteProyecto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.AnteProyecto = AnteProyecto;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], AnteProyecto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AnteProyecto.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AnteProyecto.prototype, "Descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AnteProyecto.prototype, "Estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], AnteProyecto.prototype, "ID_Estudiante", void 0);
exports.AnteProyecto = AnteProyecto = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], AnteProyecto);
//# sourceMappingURL=ante-proyecto.model.js.map