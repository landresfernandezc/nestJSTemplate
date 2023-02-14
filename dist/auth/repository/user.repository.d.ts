import { Repository } from "typeorm";
import { SignupCredentialsDto } from "../dto/signup-credentials.dto";
import { SignInCredentialsDto } from "../dto/signin-credentials.dto";
import { User } from "../entity/user.entity";
import { JwtPayload } from "../interface/jwt-payload.interface";
export declare class UserRepository extends Repository<User> {
    signUp(signupCredentialsDto: SignupCredentialsDto): Promise<{
        message: string;
    }>;
    validateUserPassword(signinCredentialDto: SignInCredentialsDto): Promise<JwtPayload>;
    private hashPassword;
}
