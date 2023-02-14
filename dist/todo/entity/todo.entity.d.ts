import { User } from "../../auth/entity/user.entity";
import { BaseEntity } from "typeorm";
export declare class Todo extends BaseEntity {
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    updatedDate: Date;
    user: User;
    userId: number;
}
