import { Document } from 'mongoose';
export declare class DocCategories extends Document {
    name: string;
    description: string;
    isActive: boolean;
}
export declare const DocCategorySchema: import("mongoose").Schema<DocCategories, import("mongoose").Model<DocCategories, any, any>, undefined, {}>;
