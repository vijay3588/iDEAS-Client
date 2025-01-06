import { Model } from 'mongoose';
import { RequestedDocuments } from './schemas/requestedDocument.schema';
export declare class RequestedDocumentService {
    private DocRequestModel;
    constructor(DocRequestModel: Model<RequestedDocuments>);
    findAll(): Promise<RequestedDocuments[]>;
    findOne(id: string): Promise<RequestedDocuments>;
    create(DocRequest: RequestedDocuments): Promise<RequestedDocuments>;
    delete(id: string): Promise<RequestedDocuments>;
    update(id: string, DocRequest: RequestedDocuments): Promise<RequestedDocuments>;
}
