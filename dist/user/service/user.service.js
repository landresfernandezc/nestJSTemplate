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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_info_repository_1 = require("../repository/user-info.repository");
let UserService = class UserService {
    constructor(userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }
    async getUser(user) {
        const userInfo = await this.userInfoRepository.findOne({ where: { id: user.user_info.id } });
        if (!userInfo) {
            throw new common_1.NotFoundException("User not found.");
        }
        return userInfo;
    }
    async updateUserProfile(user, userInfoDto) {
        const userInfo = await this.getUser(user);
        if (userInfoDto.address)
            userInfo.address = userInfoDto.address;
        if (userInfoDto.petName)
            userInfo.petName = userInfoDto.petName;
        if (userInfoDto.photo)
            userInfo.photo = userInfoDto.photo;
        if (userInfoDto.modified_photo)
            userInfo.modified_photo = userInfoDto.modified_photo;
        await userInfo.save();
        return userInfo;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_info_repository_1.UserInfoRepository)),
    __metadata("design:paramtypes", [user_info_repository_1.UserInfoRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map