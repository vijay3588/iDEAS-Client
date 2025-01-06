import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { ProfileDto } from './dto/profile.dto';
import { SettingsDto } from './dto/settings.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    createNewUser(newUser: CreateUserDto): Promise<User>;
    isValidEmail(email: string): boolean;
    setPassword(email: string, newPassword: string): Promise<boolean>;
    updateProfile(profileDto: ProfileDto): Promise<User>;
    checkApprovalUser(id: string): Promise<User>;
    updateGallery(galleryRequest: UpdateGalleryDto): Promise<User>;
    writeFile(dir: string, filename: string, base64Data: string): Promise<any>;
    removeFile(dir: string, filename: string): Promise<any>;
    guid(): string;
    updateSettings(settingsDto: SettingsDto): Promise<User>;
    getQualityUsers(): Promise<User[]>;
    getDocCreaters(): Promise<User[]>;
}
