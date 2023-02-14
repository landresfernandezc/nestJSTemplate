import { User } from "./entity/user.entity";
import { JwtPayload } from "./interface/jwt-payload.interface";
import { UserRepository } from "./repository/user.repository";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
