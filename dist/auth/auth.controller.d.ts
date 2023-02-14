import { SignInCredentialsDto } from "./dto/signin-credentials.dto";
import { SignupCredentialsDto } from "./dto/signup-credentials.dto";
import { JwtPayload } from "./interface/jwt-payload.interface";
import { AuthService } from "./service/auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(signupCredentialsDto: SignupCredentialsDto): Promise<{
        message: string;
    }>;
    signIn(signinCredentialsDto: SignInCredentialsDto): Promise<{
        accessToken: string;
        user: JwtPayload;
    }>;
}
