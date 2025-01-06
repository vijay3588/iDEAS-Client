import { Document } from 'mongoose';
export declare class DocApprovalHistories extends Document {
    request_no: string;
    updated_by: string;
    updated_on: Date;
    history: string;
    mode_of_access: string;
    page_from: string;
}
export declare const DocApprovalHistorySchema: import("mongoose").Schema<DocApprovalHistories, import("mongoose").Model<DocApprovalHistories, any, any>, undefined, {}>;
