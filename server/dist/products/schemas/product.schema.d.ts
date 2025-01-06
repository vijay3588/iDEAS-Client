import { Document } from "mongoose";
export declare class CDocument extends Document {
    isActive: Boolean;
}
export declare class DocumentInfo extends Document {
    isActive: Boolean;
    status: String;
    createdOn: Date;
    approvedOn: Date;
}
export declare class Retenstion extends Document {
    time: Number;
    defaultYear: Number;
    calculateNonPerceptualTime: String;
    status: String;
    destructed_on: Date;
}
export declare class DocumentRequestInfo extends Document {
    document_request_no: string;
    document_issued_on: Date;
    document_issued_by: string;
    document_requested_by: string;
    document_issued_from: string;
    document_request_approved: [];
}
export declare class TakeoutInfo extends Document {
    doc_request_no: string;
    requested_by: string;
    requested_on: Date;
    approved_by: string;
    approved_on: Date;
}
export declare class Info extends Document {
    id: string;
    name: string;
}
export declare class TakeoutRequestStatus extends Document {
    code: string;
    label: string;
    request_no: string;
}
export declare class TakeoutRequestInfo extends Document {
    current_status: TakeoutRequestStatus;
    takeout_request_details_list: TakeoutInfo[];
    doc_request_no: string;
    requested_by: string;
    requested_on: Date;
}
export declare class Documents extends Document {
    name: string;
    qty: number;
    description: string;
    box: string;
    rack: string;
    category: string;
    qr_code: string;
    manufacturedate: Date;
    expiredate: Date;
    type_of_space: string;
    document_info: DocumentInfo;
    document_type: string;
    retension_time: Retenstion;
    isActive: boolean;
    isRequestedDocument: boolean;
    document_no: string;
    no_of_copy: number;
    no_of_page: number;
    reason_for_request: string;
    document_request_info: DocumentRequestInfo;
    is_requested_for_takeout: boolean;
    takeout_requested_details: TakeoutRequestInfo;
    takeout_return_date: Date;
    document_type_details: Info;
    document_category_details: Info;
    document_rack_details: Info;
    document_box_details: Info;
    docStatus: string;
    doc_issuance_ref_num: string;
}
export declare const DocumentSchema: import("mongoose").Schema<Documents, import("mongoose").Model<Documents, any, any>, undefined, {}>;
