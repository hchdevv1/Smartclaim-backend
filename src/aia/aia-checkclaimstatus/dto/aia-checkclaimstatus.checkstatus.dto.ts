import {  IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionCheckStatusClaimDto } from '../../../utils/dto/transaction-query.dto';

export class CheckStatusClaimInfoDto {

    HTTPStatus: HttpMessageDto;
   TransactionQuery :TransactionCheckStatusClaimDto;
    Result?: ResultStatusClaimInfo;
}
export class ResultStatusClaimInfo{
    Data?: StatusClaimInfo;
}
class StatusClaimInfo {
    @IsString()
    @IsOptional()
    RefId?: string;

    @IsInt()
    @IsOptional()
    InsurerCode?: number;

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    Claimstatuscode: string;

    @IsString()
    @IsOptional()
    ClaimstatusName: string;

    @IsString()
    @IsOptional()
    batchnumber?: string;

    @IsString()
    @IsOptional()
    ClaimNo?: string;

    @IsString()
    @IsOptional()
    StatusUpdateAt?: string;

    @IsString()
    @IsOptional()
    invoicenumber?: string;

    @IsString()
    @IsOptional()
    note?: string;

    @IsString()
    @IsOptional()
    totalApproveAmount?: string;

    @IsString()
    @IsOptional()
    paymentDate?: string;

    @IsString()
    @IsOptional()
    transactionNo?: string;

    @IsString()
    @IsOptional()
    TitleTH?: string;

    @IsString()
    @IsOptional()
    GivenNameTH?: string;

    @IsString()
    @IsOptional()
    SurnameTH?: string;

}

export class QueryCheckStatusClaimBodyDto {
    PatientInfo?: QueryCheckStatusClaimPatientBodyDto
  }
class QueryCheckStatusClaimPatientBodyDto{
    
    @IsInt()
    @IsOptional()
    InsurerCode:number

    @IsString()
    @IsOptional()
    RefId?: string;

    @IsString()
    @IsOptional()
    TransactionNo?: string;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    IdType?: string;
    
    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    ClaimNo?: string;

    @IsString()
    @IsOptional()
    Note?: string;
    
  }

  export class CreateTransactionclaimstatus{

   

    @IsString()
    refid: string;

    @IsString()
    insurerid: number;

    @IsString()
    @IsOptional()
    hn?: string;

    @IsString()
    @IsOptional()
    vn?: string;

    @IsString()
    
    statuscode: string;

    @IsString()
    @IsOptional()
    batchnumber?: string;

    @IsString()
    @IsOptional()
    claimno?: string;

    @IsString()
    @IsOptional()
    invoicenumber?: string;

    @IsString()
    @IsOptional()
    note?: string;

    @IsString()
    @IsOptional()
    totalApproveAmount?: string;

    @IsString()
    @IsOptional()
    paymentDate?: string;
    
    @IsString()
    @IsOptional()
    transactionNo?: string;

  }

  export class QueryListPatientClaimByStatusBodyDto {
    PatientInfo?: QueryListPatientClaimBodyDto
  }
  class QueryListPatientClaimBodyDto{
    @IsInt()
    @IsOptional()
    InsurerCode:number

    @IsString()
    @IsOptional()
    RefId?: string;

    @IsString()
    @IsOptional()
    TransactionNo?: string;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    IdType?: string;
    

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    StatusClaimCode?: string;

    @IsString()
    @IsOptional()
    VisitDatefrom?: string;

    @IsString()
    @IsOptional()
    VisitDateto?: string;

    @IsString()
    @IsOptional()
    Invoicenumber?: string;

    @IsString()
    @IsOptional()
    Claimno?: string;
   
    
  }