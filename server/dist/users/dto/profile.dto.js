"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDto = void 0;
class ProfileDto {
    constructor(object) {
        this.email = object.email;
        this.name = object.name;
        this.surname = object.surname;
        this.birthdaydate = object.birthdaydate;
        this.phone = object.phone;
        this.profilepicture = object.profilepicture;
        this.roles = object.roles;
        this.isAllowedForApproval = object.isAllowedForApproval;
        this.emp_id = object.emp_id;
        this._id = object._id;
        this.departments = object.departments;
        this.isRemoved = object.isRemoved;
    }
    ;
}
exports.ProfileDto = ProfileDto;
//# sourceMappingURL=profile.dto.js.map