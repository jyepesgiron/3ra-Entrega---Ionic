"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Item = class Item extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Item = Item;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "Nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "Contenido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "ID_Estudiante", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "Correo_Estudiante", void 0);
exports.Item = Item = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Item);
//# sourceMappingURL=item.model.js.map