import { Model } from "mongoose";
import { Document } from "./interfaces/product.interface";
import { Documents } from "./schemas/product.schema";
import { Boxes } from "./schemas/box.schema";
import { Racks } from "./schemas/rack.schema";
export declare class DocumentsService {
    private productModel;
    private readonly boxModel;
    private readonly rackModel;
    constructor(productModel: Model<Documents>, boxModel: Model<Boxes>, rackModel: Model<Racks>);
    findAll(mode: any, id?: any): Promise<Document[]>;
    searchDocument(params: any): Promise<any[]>;
    takeOutRequest(params: any): Promise<any[]>;
    getCountOfDoc(params: any): Promise<any>;
    findAllDocuments(): Promise<Documents[]>;
    getDashboardList(id: string): Promise<Documents>;
    findOne(id: string): Promise<Documents>;
    create(product: Document): Promise<Documents>;
    delete(id: string): Promise<Documents>;
    update(id: string, product: Document): Promise<void | Documents>;
    destructDoc(idList: string[]): Promise<void>;
    getQRCode(qrData: any): Promise<any>;
    getRandomCode(dat: any): Promise<{
        code: string;
    }>;
    runAsyncFunctions(qrData: any): Promise<any>;
    getLogSheet({ startDate, endDate, }: {
        startDate?: Date;
        endDate?: Date;
    }): Promise<Document[]>;
    getDestructiveDocList({ startDate, endDate, }: {
        startDate?: Date;
        endDate?: Date;
    }): Promise<Document[]>;
    getAuditLogList({ startDate, endDate, }: {
        startDate?: Date;
        endDate?: Date;
    }): Promise<Document[]>;
}
