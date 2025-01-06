import { Document } from 'mongoose';
export declare class RequestedDocuments extends Document {
    document_name: string;
    document_no: string;
    no_of_copy: number;
    no_of_page: string;
    isActive: boolean;
}
export declare class documentApproval extends Document {
    isApproved: boolean;
    approvedBy: string;
    isRejected: boolean;
    rejectedBy: string;
    approvedOn: Date;
}
export declare const RequestedDocumentsSchema: import("mongoose").Schema<RequestedDocuments, import("mongoose").Model<RequestedDocuments, any, any>, undefined, {}>;
