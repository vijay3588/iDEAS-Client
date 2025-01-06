import { Model } from 'mongoose';
import { DocDepartment } from './interfaces/docDepartment.interface';
import { DocDepartments } from './schemas/docDepartment.schema';
export declare class DocDepartmentService {
    private DocDepartmentModel;
    constructor(DocDepartmentModel: Model<DocDepartments>);
    findAll(): Promise<DocDepartment[]>;
    findOne(id: string): Promise<DocDepartment>;
    create(DocDepartment: DocDepartment): Promise<DocDepartment>;
    delete(id: string): Promise<DocDepartment>;
    update(id: string, DocDepartment: DocDepartment): Promise<DocDepartment>;
}
