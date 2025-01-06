import { Document } from 'mongoose';
export declare class User extends Document {
    name: string;
    id: string;
    roles: string[];
    approved: boolean;
}
export declare const DocTypeSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any>, undefined, {}>;
