import { UsersService } from './users.service';
import { IResponse } from '../common/interfaces/response.interface';
import { ProfileDto } from './dto/profile.dto';
import { SettingsDto } from './dto/settings.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findById(params: any): Promise<IResponse>;
    allUsers(): Promise<IResponse>;
    userList(): Promise<{}>;
    updateStatus(profileDto: ProfileDto): Promise<IResponse>;
    findByEmpId(params: any): Promise<IResponse>;
    updateProfile(profileDto: ProfileDto): Promise<IResponse>;
    updateGallery(galleryRequest: UpdateGalleryDto): Promise<IResponse>;
    updateSettings(settingsDto: SettingsDto): Promise<IResponse>;
}
