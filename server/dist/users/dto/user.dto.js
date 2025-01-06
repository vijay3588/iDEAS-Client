"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const settings_dto_1 = require("./settings.dto");
const photo_dto_1 = require("../../common/dto/photo.dto");
class UserDto {
    constructor(object) {
        this.name = object.name;
        this.surname = object.surname;
        this.email = object.email;
        this.roles = object.roles;
        this.phone = object.phone;
        this.birthdaydate = object.birthdaydate;
        this.settings = new settings_dto_1.SettingsDto(object.settings);
        this.photos = {
            profilePic: new photo_dto_1.PhotoDto(object.photos.profilePic),
            gallery: []
        };
        if (object.photos && object.photos.gallery) {
            object.photos.gallery.forEach(photo => {
                this.photos.gallery.push(new photo_dto_1.PhotoDto(photo));
            });
        }
        ;
        this.approved = object.approved;
        this.isAllowedForApproval = object.isAllowedForApproval;
        this.emp_id = object.emp_id;
        this.departments = object.departments;
    }
    ;
}
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map