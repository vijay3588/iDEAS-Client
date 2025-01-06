import { Document } from 'mongoose';
export declare class DocType extends Document {
    name: string;
    description: string;
}
export declare const DocTypeSchema: import("mongoose").Schema<DocType, import("mongoose").Model<DocType, any, any>, undefined, {}>;
