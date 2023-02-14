"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../entity/user.entity");
const user_info_entity_1 = require("../../user/entity/user-info.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(signupCredentialsDto) {
        const { username, password } = signupCredentialsDto;
        const user = new user_entity_1.User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);
        try {
            const userInfo = new user_info_entity_1.UserInfo();
            await userInfo.save();
            user.user_info = userInfo;
            await user.save();
            return { message: 'User successfully created !' };
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async validateUserPassword(signinCredentialDto) {
        const { username, password } = signinCredentialDto;
        const auth = await this.findOne({ username });
        if (auth && await auth.validatePassword(password)) {
            return {
                username: auth.username,
                user_info: auth.user_info
            };
        }
        else {
            return null;
        }
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map