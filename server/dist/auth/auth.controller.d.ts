import { AuthService } from './auth.service';
import { Login } from './interfaces/login.interface';
import { IResponse } from '../common/interfaces/response.interface';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { ResetPasswordDto } from './dto/reset-password.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    login(login: Login): Promise<IResponse>;
    register(createUserDto: CreateUserDto): Promise<IResponse>;
    verifyEmail(params: any): Promise<IResponse>;
    sendEmailVerification(params: any): Promise<IResponse>;
    sendEmailForgotPassword(params: any): Promise<IResponse>;
    setNewPassord(resetPassword: ResetPasswordDto): Promise<IResponse>;
}
