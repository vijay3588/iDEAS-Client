import { CreateDocDepartmentDto } from './dto/create-docDepartment.dto';
import { DocDepartment } from './interfaces/docDepartment.interface';
import { DocDepartmentService } from './docDepartment.service';
export declare class DocDepartmentsController {
    private readonly DocDepartmentsService;
    constructor(DocDepartmentsService: DocDepartmentService);
    findAll(): Promise<DocDepartment[]>;
    findOne(id: string): Promise<DocDepartment>;
    create(createDocDepartmentsDto: CreateDocDepartmentDto): Promise<DocDepartment>;
    delete(id: string): Promise<DocDepartment>;
    update(id: string, updateDocDepartmentsDto: CreateDocDepartmentDto): Promise<DocDepartment>;
}
