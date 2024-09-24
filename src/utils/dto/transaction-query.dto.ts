import {  IsInt,IsOptional, IsString } from 'class-validator';

export class TransactionQueryDto {
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
    RefID: string;

    @IsString()
    @IsOptional()
    TransactionNo: string;

    @IsString()
    @IsOptional()
    StatusClaimCode: string;

    @IsString()
    @IsOptional()
    InsurerCode: number;

    @IsString()
    @IsOptional()
    HN: string;

    @IsString()
    @IsOptional()
    VN: string;

    @IsString()
    @IsOptional()
    VisitDatefrom:string;


    @IsString()
    @IsOptional()
    VisitDateto:string;
   
  }
  export class TransactionQueryEpisodeDto {
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
    RefID: string;

    @IsString()
    @IsOptional()
    TransactionNo: string;

    @IsString()
    @IsOptional()
    ServiceSettingCode: string;

    @IsString()
    @IsOptional()
    InsurerCode: number;

    @IsString()
    @IsOptional()
    HN: string;

    @IsString()
    @IsOptional()
    VN: string;

    @IsString()
    @IsOptional()
    VisitDatefrom:string;


    @IsString()
    @IsOptional()
    VisitDateto:string;
   
  }
export class TransactionQueryPatientCreateDto{

    @IsInt()
    @IsOptional()
    InsurerCode:number


    @IsInt()
    @IsOptional()
    PatientID?: number;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    HN?: string;

    @IsString()
    @IsOptional()
    TitleTH?: string;

    @IsString()
    @IsOptional()
    GivenNameTH?: string;

    @IsString()
    @IsOptional()
    SurnameTH?: string;

    @IsString()
    @IsOptional()
    TitleEN?: string;

    @IsString()
    @IsOptional()
    GivenNameEN?: string;

    @IsString()
    @IsOptional()
    SurnameEN?: string;

    @IsString()
    @IsOptional()
    DateOfBirth?: string;

    @IsString()
    @IsOptional()
    Gender?: string;

    @IsString()
    @IsOptional()
    MobilePhone?: string;
}

export class TransactionQuerycheckeligibleDto {

    @IsString()
    @IsOptional()
    InsurerCode: number;

    @IsString()
    @IsOptional()
    RefId: string;

    @IsString()
    @IsOptional()
    TransactionNo: string;

    @IsString()
    @IsOptional()
    PID?: string;

    @IsString()
    @IsOptional()
    HN: string;

    @IsString()
    @IsOptional()
    GivenNameTH:string;

    @IsString()
    @IsOptional()
    SurnameTH:string;

    @IsString()
    @IsOptional()
    DateOfBirth:string;

    @IsString()
    @IsOptional()
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    IdType?: string;

    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate: string;

    @IsString()
    @IsOptional()
    PolicyTypeCode: string;

    @IsString()
    @IsOptional()
    ServiceSettingCode: string;

    @IsString()
    @IsOptional()
    IllnessTypeCode: string;

    @IsString()
    @IsOptional()
    SurgeryTypeCode: string;
   
   
  }

  export class TransactionQueryOPDDischargeDto {

      
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

    @IsInt()
    @IsOptional()
    AccidentPlaceCode?: number;

    @IsString()
    @IsOptional()
    AccidentInjuryWoundtypeCode?: string;

    @IsString()
    @IsOptional()
    AccidentInjurySideCode?: string;

    @IsString()
    @IsOptional()
    WoundDetails?: string;

    @IsString()
    @IsOptional()
    PresentIllness?: string;
    
    @IsString()
    @IsOptional()
    ChiefComplaint?: string;
   
  }
  export class TransactionQueryetrieveFurtherClaimdDto {

      
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
    PassportNumber?: string;

    @IsString()
    @IsOptional()
    IdType?: string;
    
   
    @IsString()
    @IsOptional()
    VN?: string;

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate?: string;

  }
  
  export class TransactionCheckStatusClaimDto {

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