import { Model } from "mongoose";
import { DocRequest } from "./interfaces/docRequest.interface";
import { DocApprovalHistory } from "./interfaces/docApprovalHistoryinterface ";
import { DocRequests } from "./schemas/docRequest.schema";
import { DocApprovalHistories } from "./schemas/docApprovalHistory.schema";
import { Documents } from "../products/schemas/product.schema";
export declare class DocRequestService {
    private DocRequestModel;
    private readonly docApprovalHistModel;
    private readonly documentModal;
    constructor(DocRequestModel: Model<DocRequests>, docApprovalHistModel: Model<DocApprovalHistories>, documentModal: Model<Documents>);
    findAll(mode: string, empl_id: string): Promise<DocRequest[]>;
    findAllAprove(): Promise<DocRequest[]>;
    findOne(id: string): Promise<DocRequest>;
    create(docRequest: DocRequest): Promise<DocRequests>;
    checkInitialHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    createInitialHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    checkRecentHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    createRecentHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    createDocRequestApprovalHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    updateRecentHistory(docApprovalHistory: DocApprovalHistory, temp: any): Promise<void>;
    createApprovalHistory(docApprovalHistory: DocApprovalHistory): Promise<DocApprovalHistories>;
    delete(id: string): Promise<DocRequest>;
    update(id: string, DocRequest: DocRequest, page: string, updateBy: string): Promise<DocRequest>;
    update1(id: string, DocRequest: DocRequest, page: string): Promise<DocRequest>;
}
