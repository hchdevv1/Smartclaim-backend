import { IsArray ,IsInt, IsOptional, IsString } from 'class-validator';

export class QueryBillingSubmissionBodyDto {
    PatientInfo?: QueryPatientBodyDto
  }
  class QueryPatientBodyDto{
    
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
    invoicenumber?: string;

    @IsArray()
    @IsOptional()
    AttachDocList?:AttachDocList[]
  }
  class AttachDocList{

    @IsString()
    @IsOptional()
    DocName?: string;
  
  }