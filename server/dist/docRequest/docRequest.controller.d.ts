import { CreateDocRequestDto } from './dto/create-docRequest.dto';
import { CreateDocApprovalHistoryDto } from './dto/create-docApprovalHistoryi.dto';
import { DocRequest } from './interfaces/docRequest.interface';
import { DocRequestService } from './docRequest.service';
export declare class DocRequestsController {
    private readonly DocRequestsService;
    constructor(DocRequestsService: DocRequestService);
    findAll(mode: string, empl_id: string): Promise<DocRequest[]>;
    findOne(id: string): Promise<DocRequest>;
    create(createDocRequestsDto: CreateDocRequestDto): Promise<DocRequest>;
    initiateApprovalHistory(createDocRequestsDto: CreateDocApprovalHistoryDto): void;
    delete(id: string): Promise<DocRequest>;
    update(page_from: string, id: string, approvedBy: string, updateDocRequestsDto: CreateDocRequestDto): Promise<DocRequest>;
    issueGenaralIssuance(id: string, uniquenum: string, issueGenaralIssuanceDto: CreateDocRequestDto): Promise<DocRequest>;
}
