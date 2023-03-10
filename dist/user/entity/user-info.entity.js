"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
const typeorm_1 = require("typeorm");
let UserInfo = class UserInfo extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserInfo.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'pet_name', type: "varchar", nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "petName", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "photo", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], UserInfo.prototype, "modified_photo", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], UserInfo.prototype, "address", void 0);
UserInfo = __decorate([
    typeorm_1.Entity()
], UserInfo);
exports.UserInfo = UserInfo;
//# sourceMappingURL=user-info.entity.js.map