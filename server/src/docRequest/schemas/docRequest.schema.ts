import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export class RequestedDocuments extends Document {
  @Prop()
  document_name: string;

  @Prop()
  document_no: string;

  @Prop()
  no_of_copy: number;

  @Prop()
  no_of_page: number;

  @Prop()
  isActive: boolean;

  @Prop()
  reason_for_request: string;
  
}
export class RequestedDocumentsApproval extends Document {
  @Prop()
  empl_id: string;

  @Prop()
  empl_email_id: string;

  @Prop()
  status: string;

  @Prop()
  approve_access_level: string;

  @Prop()
  approvedOn: string;
 
}

export class rejectDocumentRequest extends Document {
  @Prop()
  is_rejected: boolean;

  @Prop()
  rejected_by: string;

  @Prop()
  rejected_on: Date;

  @Prop()
  rejected_reason: string;

  @Prop()
  rejected_from_page: string;
 
}

export class RequestDocumentIssuance extends Document {
  @Prop()
  empl_id: string;

  @Prop()
  empl_email_id: string;

  @Prop()
  status: string;

  @Prop()
  approve_access_level: string;
 
}

export class DocumentRequestIssuedBy extends Document {
  @Prop()
  empl_id: string;

  @Prop()
  empl_email_id: string;

  @Prop()
  document_id: string;

  @Prop()
  document_issued_on: Date;
 
}
export class DocumentRequestIssuanceStatus extends Document {
  @Prop()
  is_issued: Boolean;

  @Prop()
  doc_issued_on: Date;

  @Prop()
  doc_issued_by: DocumentRequestIssuedBy;
}
export class MasterRowFormat extends Document {
  @Prop()
  id: string;

  @Prop()
  name: string;
}

@Schema()
export class DocRequests extends Document {
  @Prop()
  empl_id: string; 

  @Prop()
  doc_type: string;

  @Prop()
  request_no: string;

  @Prop()
  isActive: boolean;

  @Prop()
  requested_doc: RequestedDocuments;
  
  @Prop()
  approval: RequestedDocumentsApproval;
    
  @Prop()
  rejectDocumentRequest: rejectDocumentRequest;

  @Prop()
  comments: string;

  //@Prop()
  //issuance: RequestDocumentIssuance;

  @Prop()
  no_of_copy: number;

  @Prop()
  no_of_page: number;

  @Prop()
  issuance : DocumentRequestIssuanceStatus

  @Prop()
  doc_requested_department : MasterRowFormat

  @Prop()
  doc_requested_doctype : MasterRowFormat

  
  @Prop()
  requested_on: string;

 
	@Prop()
	requested_by: string;
 
}
  

export const DocRequestsSchema = SchemaFactory.createForClass(DocRequests);

