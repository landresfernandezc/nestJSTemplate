import { User } from "../auth/entity/user.entity";
import { userInfoData } from "./interface/user-info.interface";
import { UserService } from "./service/user.service";
import { UserInfoDto } from "./dto/user-info.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserInfo(user: User): Promise<userInfoData>;
    updateUserInfo(file: any, userInfoDto: UserInfoDto, user: User): Promise<userInfoData>;
}
