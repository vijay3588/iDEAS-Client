import { CreateDocCategoryDto } from './dto/create-docCategory.dto';
import { DocCategory } from './interfaces/docCategory.interface';
import { DocCategoryService } from './docCategory.service';
export declare class DocCategoryController {
    private readonly DocCategoryService;
    constructor(DocCategoryService: DocCategoryService);
    findAll(): Promise<DocCategory[]>;
    findOne(id: string): Promise<DocCategory>;
    create(createDocCategoryDto: CreateDocCategoryDto): Promise<DocCategory>;
    delete(id: string): Promise<DocCategory>;
    update(id: string, updateDocCategoryDto: CreateDocCategoryDto): Promise<DocCategory>;
}
