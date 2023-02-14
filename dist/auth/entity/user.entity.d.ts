import { BaseEntity } from "typeorm";
import { Todo } from "../../todo/entity/todo.entity";
import { UserInfo } from "../../user/entity/user-info.entity";
export declare class User extends BaseEntity {
    id: number;
    username: string;
    password: string;
    salt: string;
    todo: Todo[];
    user_info: UserInfo;
    validatePassword(password: string): Promise<boolean>;
}
