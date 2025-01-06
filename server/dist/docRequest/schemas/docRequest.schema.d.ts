import { Document } from 'mongoose';
export declare class RequestedDocuments extends Document {
    document_name: string;
    document_no: string;
    no_of_copy: number;
    no_of_page: number;
    isActive: boolean;
    reason_for_request: string;
}
export declare class RequestedDocumentsApproval extends Document {
    empl_id: string;
    empl_email_id: string;
    status: string;
    approve_access_level: string;
    approvedOn: string;
}
export declare class rejectDocumentRequest extends Document {
    is_rejected: boolean;
    rejected_by: string;
    rejected_on: Date;
    rejected_reason: string;
    rejected_from_page: string;
}
export declare class RequestDocumentIssuance extends Document {
    empl_id: string;
    empl_email_id: string;
    status: string;
    approve_access_level: string;
}
export declare class DocumentRequestIssuedBy extends Document {
    empl_id: string;
    empl_email_id: string;
    document_id: string;
    document_issued_on: Date;
}
export declare class DocumentRequestIssuanceStatus extends Document {
    is_issued: Boolean;
    doc_issued_on: Date;
    doc_issued_by: DocumentRequestIssuedBy;
}
export declare class MasterRowFormat extends Document {
    id: string;
    name: string;
}
export declare class DocRequests extends Document {
    empl_id: string;
    doc_type: string;
    request_no: string;
    isActive: boolean;
    requested_doc: RequestedDocuments;
    approval: RequestedDocumentsApproval;
    rejectDocumentRequest: rejectDocumentRequest;
    comments: string;
    no_of_copy: number;
    no_of_page: number;
    issuance: DocumentRequestIssuanceStatus;
    doc_requested_department: MasterRowFormat;
    doc_requested_doctype: MasterRowFormat;
    requested_on: string;
    requested_by: string;
}
export declare const DocRequestsSchema: import("mongoose").Schema<DocRequests, import("mongoose").Model<DocRequests, any, any>, undefined, {}>;
