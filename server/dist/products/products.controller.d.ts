import { Document } from './interfaces/product.interface';
import { DocumentsService } from './products.service';
import { BoxService } from '../box/box.service';
export declare class DocumentsController {
    private readonly productsService;
    private readonly boxService;
    constructor(productsService: DocumentsService, boxService: BoxService);
    getDashboardList(loginUser: string): Promise<{}>;
    findAll(modes: string, id: string): Promise<Document[]>;
    findOne(id: string): Promise<import("./schemas/product.schema").Documents>;
    create(createProductDto: any): Promise<import("./schemas/product.schema").Documents>;
    delete(id: string): Promise<import("./schemas/product.schema").Documents>;
    logSheets(mode: string, params: any): Promise<Document[]>;
    destructiveDocList(params: any): Promise<Document[]>;
    destructDoc(params: any): any;
    getRandomCode(generateQrCode: any): Promise<{
        code: string;
    }> | Promise<{
        code: string;
    }[]>;
    update(id: string, updateProductDto: any): Promise<void | import("./schemas/product.schema").Documents>;
    getCountOfDoc(generateQrCode: any): Promise<any>;
}
