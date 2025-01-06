import { JWTService } from './jwt.service';
import { Model } from 'mongoose';
import { User } from '../users/interfaces/user.interface';
import { UserDto } from '../users/dto/user.dto';
import { EmailVerification } from './interfaces/emailverification.interface';
import { ForgottenPassword } from './interfaces/forgottenpassword.interface';
import { ConsentRegistry } from './interfaces/consentregistry.interface';
export declare class AuthService {
    private readonly userModel;
    private readonly emailVerificationModel;
    private readonly forgottenPasswordModel;
    private readonly consentRegistryModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, emailVerificationModel: Model<EmailVerification>, forgottenPasswordModel: Model<ForgottenPassword>, consentRegistryModel: Model<ConsentRegistry>, jwtService: JWTService);
    validateLogin(email: any, password: any): Promise<{
        token: {
            expires_in: number;
            access_token: any;
        };
        user: UserDto;
    }>;
    createEmailToken(email: string): Promise<boolean>;
    saveUserConsent(email: string): Promise<ConsentRegistry>;
    createForgottenPasswordToken(email: string): Promise<ForgottenPassword>;
    verifyEmail(token: string): Promise<boolean>;
    getForgottenPasswordModel(newPasswordToken: string): Promise<ForgottenPassword>;
    sendEmailVerification(email: string): Promise<boolean>;
    checkPassword(email: string, password: string): Promise<any>;
    sendEmailForgotPassword(email: string): Promise<boolean>;
}
