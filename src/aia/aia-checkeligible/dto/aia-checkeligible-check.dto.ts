
import { IsDateString ,IsDecimal,IsArray, IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQuerycheckeligibleDto }  from '../../../utils/dto/transaction-query.dto';

export class CheckEligibleDto {

   HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQuerycheckeligibleDto;
  Result?: ResultInfo;
}


export class AIACheckEligibleRequestBody{

    @IsString()
    @IsOptional()
    RefId?: string;

    @IsString()
    @IsOptional()
    Username?: string;


    @IsString()
    @IsOptional()
    HospitalCode?: string;

    @IsInt()
    @IsOptional()
    InsurerCode?: number;

    @IsString()
    @IsOptional()
    ElectronicSignature?: string;

    @IsInt()
    @IsOptional()
    DataJsonType?: number;

    DataJson:DataJson
    
}

class DataJson{
    @IsString()
    @IsOptional()
    IdType?: string;

    @IsString()
    @IsOptional()
    Id?: string;

    @IsString()
    @IsOptional()
    PolicyType?: string;

    @IsString()
    @IsOptional()
    ServiceSetting?: string;

    @IsString()
    @IsOptional()
    IllnessType?: string;

    @IsString()
    @IsOptional()
    SurgeryType?: string;
    Patient:DataJsonPatient;
    Visit:DataJsonVisit;

}
class DataJsonPatient{

    @IsString()
    @IsOptional()
    FirstName?: string;

    @IsString()
    @IsOptional()
    LastName?: string;

    @IsString()
    @IsOptional()
    Dob?: string;

}
class DataJsonVisit{

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate?: string;
}
export class CheckEligibleBodyDto {
    PatientInfo?: SearchPatientBodyDto
  }
class SearchPatientBodyDto{
    
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
    GivenNameTH?: string;

    @IsString()
    @IsOptional()
    SurnameTH?: string;

    @IsString()
    @IsOptional()
    DateOfBirth?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    PolicyTypeCode?: string;

    @IsString()
    @IsOptional()
    ServiceSettingCode?: string;

    @IsString()
    @IsOptional()
    IllnessTypeCode?: string;

    @IsString()
    @IsOptional()
    SurgeryTypeCode?: string;

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate?: string;
    
    
  }

export class ResultInfo{
    InsuranceResult?:InsuranceResult;
    InsuranceData?:InsuranceData;
    InsuranceCustomerDetail?:InsuranceCustomerDetail;
}

 export class InsuranceResult{

    @IsString()
    @IsOptional()
    Code?: string;

    @IsString()
    @IsOptional()
    Message?: string;

    @IsString()
    @IsOptional()
    MessageTh?: string;

    // @IsArray()
    // @IsOptional()
    // InsuranceData?:InsuranceData[]

  }
export class InsuranceData{

    @IsString()
    @IsOptional()
    RefId?: string;

    @IsString()
    @IsOptional()
    TransactionNo?: string;

    @IsInt()
    @IsOptional()
    InsurerCode:number

    @IsBoolean()
    @IsOptional()
    CoverageClaimStatus?: boolean;

    @IsArray()
    @IsOptional()
    RemarkList?:[]

    @IsArray()
    @IsOptional()
    PolicyCoverageDesc?:[]

    CoverageList:CoverageList
    
    @IsString()
    @IsOptional()
    PolicyInfoList?: string;
    
  }
export class CoverageList{
    @IsString()
    @IsOptional()
    Type?: string;
    @IsString()
    @IsOptional()
    Status?: string;
    @IsArray()
    @IsOptional()
    MessageList?: MessageList[]
}
class MessageList{

    @IsString()
    @IsOptional()
    PolicyNo?: string;

    @IsString()
    @IsOptional()
    PlanName?: string;

    @IsString()
    @IsOptional()
    MessageTh?: string;

    @IsString()
    @IsOptional()
    MessageEn?: string;

    @IsString()
    @IsOptional()
    RuleNo?: string;

}
export class InsuranceCustomerDetail{

    @IsString()
    @IsOptional()
    PolicyNo?: string;

    @IsString()
    @IsOptional()
    MemberShipId?: string;

    @IsString()
    @IsOptional()
    FirstName?: string;

    @IsString()
    @IsOptional()
    LastName?: string;

    @IsString()
    @IsOptional()
    NationalId?: string;
    
  }

  export class CreateTransectionDto{

    @IsString()
    @IsOptional()
    refid?: string;

    @IsString()
    @IsOptional()
    transactionid?: string;

    @IsString()
    @IsOptional()
    statusid?: number;

    @IsString()
    @IsOptional()
    hn?: string;

    @IsString()
    @IsOptional()
    vn?: string;

    @IsString()
    @IsOptional()
    insurerid?: number;

    @IsString()
    @IsOptional()
    accidentdate?: string;

  }

  export class CreateTransactionclaimDto{

    @IsString()
    @IsOptional()
    refid?: string;

    @IsInt()
    @IsOptional()
    insurerid?: number;

    @IsString()
    @IsOptional()
    transactionno?: string;

    @IsString()
    @IsOptional()
    furtherclaimid?: string;

    @IsString()
    //@IsOptional()
    hn: string;

    @IsString()
    @IsOptional()
    vn?: string;
    
    @IsString()
    @IsOptional()
    presentillness?: string;

    @IsString()
    @IsOptional()
    chiefcomplaint?: string;


    @IsString()
    @IsOptional()
    accidentplacecode?: string;

    @IsString()
    @IsOptional()
    causeofinjury?: string;

    @IsString()
    @IsOptional()
    commentofinjury?: string;

    @IsString()
    @IsOptional()
    woundtypecode?: string;

    @IsString()
    @IsOptional()
    injurysidecode?: string;
    @IsString()
    @IsOptional()
    injuryarea?: string;
 
    @IsString()
    @IsOptional()
    messageclaim?: string;
    @IsString()
    @IsOptional()
    messageth?: string;
    
    @IsDateString()
    @IsOptional()
    accidentdate?: string;

@IsString()
    @IsOptional()
    claimno?: string;

    @IsString()
    @IsOptional()
    statuscode?: string;

    @IsString()
    @IsOptional()
    occurrenceno?: string;

    @IsDecimal()
    @IsOptional()
    totalapprovedamount?: number;
    @IsDecimal()
    @IsOptional()
    totalexcessamount?: number;
 
    @IsString()
    @IsOptional()
    batchnumber?: string;
    @IsString()
    @IsOptional()
    invoicenumber?: string;


    @IsDateString()
    @IsOptional()
    visitdate?: string;

       
    @IsBoolean()
    @IsOptional()
    isreimbursement?: boolean;

  }