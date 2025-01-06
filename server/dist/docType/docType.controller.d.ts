import { CreateDocTypeDto } from './dto/create-docType.dto';
import { DocType } from './interfaces/docType.interface';
import { DocTypeService } from './docType.service';
export declare class DocTypeController {
    private readonly DocTypeService;
    constructor(DocTypeService: DocTypeService);
    findAll(): Promise<DocType[]>;
    findOne(id: string): Promise<DocType>;
    create(createDocTypeDto: CreateDocTypeDto): Promise<DocType>;
    delete(id: string): Promise<DocType>;
    update(id: string, updateDocTypeDto: CreateDocTypeDto): Promise<DocType>;
}
