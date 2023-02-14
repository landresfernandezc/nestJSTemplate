import { JwtService } from "@nestjs/jwt";
import { SignInCredentialsDto } from "../dto/signin-credentials.dto";
import { SignupCredentialsDto } from "../dto/signup-credentials.dto";
import { JwtPayload } from "../interface/jwt-payload.interface";
import { UserRepository } from "../repository/user.repository";
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(signupCredentialsDto: SignupCredentialsDto): Promise<{
        message: string;
    }>;
    signIn(signInCredentialsDto: SignInCredentialsDto): Promise<{
        accessToken: string;
        user: JwtPayload;
    }>;
}
