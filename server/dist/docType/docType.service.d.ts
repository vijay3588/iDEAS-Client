import { Model } from 'mongoose';
import { DocType } from './interfaces/docType.interface';
import { DocTypes } from './schemas/docType.schema';
export declare class DocTypeService {
    private DocTypeModel;
    constructor(DocTypeModel: Model<DocTypes>);
    findAll(): Promise<DocType[]>;
    findOne(id: string): Promise<DocType>;
    create(DocType: DocType): Promise<DocType>;
    delete(id: string): Promise<DocType>;
    update(id: string, DocType: DocType): Promise<DocType>;
}
