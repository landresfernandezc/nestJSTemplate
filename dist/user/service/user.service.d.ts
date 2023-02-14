import { User } from "../../auth/entity/user.entity";
import { UserInfoDto } from "../dto/user-info.dto";
import { UserInfo } from "../entity/user-info.entity";
import { userInfoData } from "../interface/user-info.interface";
import { UserInfoRepository } from "../repository/user-info.repository";
export declare class UserService {
    private userInfoRepository;
    constructor(userInfoRepository: UserInfoRepository);
    getUser(user: User): Promise<UserInfo>;
    updateUserProfile(user: User, userInfoDto: UserInfoDto): Promise<userInfoData>;
}
