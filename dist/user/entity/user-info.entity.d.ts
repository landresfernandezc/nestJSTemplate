import { BaseEntity } from "typeorm";
export declare class UserInfo extends BaseEntity {
    id: number;
    petName: string;
    photo: string;
    modified_photo: string;
    address: string;
}
