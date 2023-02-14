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
exports.SignInCredentialsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignInCredentialsDto {
}
__decorate([
    swagger_1.ApiProperty({ minimum: 4, maximum: 20 }),
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], SignInCredentialsDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ minimum: 6, maximum: 20, description: 'At least 1 capital, 1 small, 1 special character & 1 number' }),
    class_validator_1.IsString(),
    class_validator_1.MinLength(6),
    class_validator_1.MaxLength(20),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\w+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Password too weak' }),
    __metadata("design:type", String)
], SignInCredentialsDto.prototype, "password", void 0);
exports.SignInCredentialsDto = SignInCredentialsDto;
//# sourceMappingURL=signin-credentials.dto.js.map