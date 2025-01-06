import { Document } from 'mongoose';
export declare class RequestedDocuments extends Document {
    document_name: string;
    document_no: string;
    no_of_copy: number;
    no_of_page: number;
    isActive: boolean;
    request_id: string;
    reason_for_request: string;
}
export declare class documentApproval extends Document {
    isApproved: boolean;
    approvedBy: string;
    isRejected: boolean;
    rejectedBy: string;
    approvedOn: Date;
}
export declare const RequestedDocumentsSchema: import("mongoose").Schema<RequestedDocuments, import("mongoose").Model<RequestedDocuments, any, any>, undefined, {}>;
