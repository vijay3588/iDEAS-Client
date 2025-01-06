import { Model } from 'mongoose';
import { DocCategory } from './interfaces/docCategory.interface';
import { DocCategories } from './schemas/docCategory.schema';
export declare class DocCategoryService {
    private DocCategoryModel;
    constructor(DocCategoryModel: Model<DocCategories>);
    findAll(): Promise<DocCategory[]>;
    findOne(id: string): Promise<DocCategory>;
    create(DocCategory: DocCategory): Promise<DocCategory>;
    delete(id: string): Promise<DocCategory>;
    update(id: string, DocCategory: DocCategory): Promise<DocCategory>;
}
