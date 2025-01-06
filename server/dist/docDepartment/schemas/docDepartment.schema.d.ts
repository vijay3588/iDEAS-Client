import { Document } from 'mongoose';
export declare class DocDepartments extends Document {
    name: string;
    description: string;
    isActive: boolean;
}
export declare const DocDepartmentsSchema: import("mongoose").Schema<DocDepartments, import("mongoose").Model<DocDepartments, any, any>, undefined, {}>;
