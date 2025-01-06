import { Document } from 'mongoose';
export declare class DocTypes extends Document {
    name: string;
    description: string;
    isActive: boolean;
}
export declare const DocTypeSchema: import("mongoose").Schema<DocTypes, import("mongoose").Model<DocTypes, any, any>, undefined, {}>;
