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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../auth/decorator/get-user.decorator");
const user_entity_1 = require("../auth/entity/user.entity");
const { editFileName, imageFileFilter } = require('../utils/file-upload.utils');
const user_service_1 = require("./service/user.service");
const multer_1 = require("multer");
const user_info_dto_1 = require("./dto/user-info.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUserInfo(user) {
        return this.userService.getUser(user);
    }
    updateUserInfo(file, userInfoDto, user) {
        if (file) {
            userInfoDto.photo = file.originalname;
            userInfoDto.modified_photo = file.filename;
        }
        return this.userService.updateUserProfile(user, userInfoDto);
    }
};
__decorate([
    common_1.Get(),
    __param(0, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserInfo", null);
__decorate([
    common_1.Patch(),
    swagger_1.ApiConsumes('multipart/form-data'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('photo', {
        limits: {
            fileSize: 2097152
        },
        fileFilter: imageFileFilter,
        storage: multer_1.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './uploads');
            },
            filename: editFileName
        }),
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body()),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_info_dto_1.UserInfoDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUserInfo", null);
UserController = __decorate([
    swagger_1.ApiTags('User'),
    swagger_1.ApiBearerAuth(),
    common_1.Controller('user'),
    common_1.UseGuards(passport_1.AuthGuard()),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map