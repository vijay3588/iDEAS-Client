import { SettingsDto } from "./settings.dto";
import { PhotoDto } from "../../common/dto/photo.dto";
export declare class UserDto {
    constructor(object: any);
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly roles: string;
    readonly phone: string;
    readonly birthdaydate: Date;
    readonly approved: boolean;
    readonly isAllowedForApproval: boolean;
    readonly isRemoved: boolean;
    readonly emp_id: string;
    settings: SettingsDto;
    photos: {
        profilePic: PhotoDto;
        gallery: PhotoDto[];
    };
    readonly departments: any;
}
