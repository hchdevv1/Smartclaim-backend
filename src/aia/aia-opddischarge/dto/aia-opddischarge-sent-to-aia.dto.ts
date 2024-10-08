import { ValidateNested, IsArray ,IsInt, IsString ,IsBoolean,  IsObject} from 'class-validator';
import { Type  } from 'class-transformer';


////////////////////////////// sender aia ///////////////////////////////////////

class PatientDto {
    @IsString()
    Dob: string;

    @IsString()
    Gender: string;

    @IsString()
    Hn: string;
}

class VisitDto {
    @IsString()
    FurtherClaimId: string;

    @IsString()
    AccidentCauseOver45Days: string;

    @IsString()
    AdditionalNote: string;

    @IsBoolean()
    AlcoholRelated: boolean;

    @IsString()
    ChiefComplaint: string;

    @IsString()
    ComaScore: string;

    @IsString()
    DxFreeText: string;

    @IsString()
    ExpectedDayOfRecovery: string;

    @IsString()
    Height: string;

    @IsString()
    PhysicalExam: string;

    @IsString()
    PlanOfTreatment: string;

    @IsBoolean()
    Pregnant: boolean;

    @IsString()
    PresentIllness: string;

    @IsString()
    PreviousTreatmentDate: string;

    @IsString()
    PreviousTreatmentDetail: string;

    @IsBoolean()
    PrivateCase: boolean;

    @IsString()
    ProcedureFreeText: string;

    @IsString()
    SignSymptomsDate: string;

    @IsString()
    UnderlyingCondition: string;

    @IsString()
    VisitDateTime: string;

    @IsString()
    Vn: string;

    @IsString()
    Weight: string;
}

class VitalSignDto {
    @IsString()
    DiastolicBp: string;

    @IsString()
    HeartRate: string;

    @IsString()
    OxygenSaturation: string;

    @IsString()
    PainScore: string;

    @IsString()
    RespiratoryRate: string;

    @IsString()
    SystolicBp: string;

    @IsString()
    Temperature: string;

    @IsString()
    VitalSignEntryDateTime: string;
}

class DiagnosisDto {
    @IsString()
    DxName: string;

    @IsString()
    DxType: string;

    @IsString()
    Icd10: string;
}

class AccidentDetailDto {
    @IsString()
    AccidentPlace: string;

    @IsString()
    AccidentDate: string;

    @IsArray()
    CauseOfInjuryDetail: Array<{
        CauseOfInjury: string;
        CommentOfInjury: string;
    }>;

    @IsArray()
    InjuryDetail: Array<{
        WoundType: string;
        InjurySide: string;
        InjuryArea: string;
    }>;
}

class ProcedureDto {
    @IsString()
    Icd9: string;

    @IsString()
    ProcedureDate: string;

    @IsString()
    ProcedureName: string;
}

class InvestigationDto {
    @IsString()
    InvestigationCode: string;

    @IsString()
    InvestigationGroup: string;

    @IsString()
    InvestigationName: string;

    @IsString()
    InvestigationResult: string;

    @IsString()
    ResultDateTime: string;
}

class OrderItemDto {
    @IsString()
    Discount: string;

    @IsString()
    Initial: string;

    @IsString()
    ItemAmount: string;

    @IsString()
    ItemId: string;

    @IsString()
    ItemName: string;

    @IsString()
    LocalBillingCode: string;

    @IsString()
    LocalBillingName: string;

    @IsString()
    NetAmount: string;
}

class DoctorDto {
    @IsString()
    DoctorLicense: string;

    @IsString()
    DoctorRole: string;

    @IsString()
    DoctorFirstName: string;

    @IsString()
    DoctorLastName: string;
}

class BillingDto {
    @IsString()
    LocalBillingCode: string;

    @IsString()
    LocalBillingName: string;

    @IsString()
    SimbBillingCode: string;

    @IsString()
    PayorBillingCode: string;

    @IsString()
    BillingInitial: string;

    @IsString()
    BillingDiscount: string;

    @IsString()
    BillingNetAmount: string;
}

class PssDto {
    @IsString()
    Exclusion: string;

    @IsString()
    FinalScore: string;

    @IsArray()
    Findings: Array<{
        Description: string;
        Exclusion: string;
        Medical: string;
        Reference: string;
    }>;

    @IsString()
    Id: string;

    @IsString()
    Medical: string;
}

export class ResultDataJsonDto {
    @IsObject()
    Patient: PatientDto;

    @IsObject()
    Visit: VisitDto;

    @IsArray()
    VitalSign: VitalSignDto[];

    @IsArray()
    Diagnosis: DiagnosisDto[];

    @IsObject()
    AccidentDetail: AccidentDetailDto;

    @IsArray()
    Procedure: ProcedureDto[];

    @IsArray()
    Investigation: InvestigationDto[];

    @IsArray()
    OrderItem: OrderItemDto[];

    @IsArray()
   Doctor: DoctorDto[];

    @IsArray()
    Billing: BillingDto[];

    @IsString()
    TotalBillAmount: string;

    @IsObject()
    Pss: PssDto;
}

export class OPDDischargeResponseDto {
    @IsString()
    RefId: string;

    @IsString()
    TransactionNo: string;

    @IsString()
    Username: string;

    @IsString()
    HospitalCode: string;

    @IsString()
    InsurerCode: string;

    @IsString()
    ElectronicSignature: string;

    @IsString()
    DataJsonType: string;

    @IsObject()
    DataJson: ResultDataJsonDto;

    @IsArray()
    AttachDocList: Array<{
        Base64Data: string;
        DocName: string;
    }>;
}





///////////////////////// DTO Result from Trakcare////////////////////////////////////////////

export class SentDiagnosisResponseDto {
    @IsString()
    message: string;
  
    @IsString()
    error: string;
  
    @IsInt()
    statusCode: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SentDiagnosisInfoDto)
    DiagnosisInfo: SentDiagnosisInfoDto[];
  }
export class SentDiagnosisInfoDto {
    @IsString()
    DxTypeCode: string;
  
    @IsString()
    DxCode: string;
  
    @IsString()
    DxName: string;
  }
  export class ResultDiagnosisInfoDto {
    DxName: string; 
    DxType: string; 
    Icd10: string; 
  }
  export class ResultProcedureInfoDto {
    Icd9: string; 
    ProcedureDate: string; 
    ProcedureName: string; 
  }
  export class ResultInvestigationInfoDto {
    InvestigationCode: string; 
    InvestigationGroup: string; 
    InvestigationName: string;
    InvestigationResult: string; 
    ResultDateTime: string; 
  }
  export class ResultPatientInfoDto {
    Dob: string; // ชื่อโรค
    Gender: string; // ประเภทของโรค (ใช้ dxtypecodeinsurance ถ้ามีการแมป)
    Hn: string; // รหัสโรค Icd10
  }
  export class ResultDoctorInfoDto {
    DoctorLicense: string; 
    DoctorRole: string; 
    DoctorFirstName: string;
    DoctorLastName: string; 
  }
  export class ResultVitalSignInfoDto {
    DiastolicBp: string; 
    HeartRate: string; 
    OxygenSaturation: string;
    PainScore: string; 
    RespiratoryRate: string; 
    SystolicBp: string; 
    Temperature: string;
    VitalSignEntryDateTime: string; 
  }
  export class ResultOrderItemInfoDto {
    ItemId: string; 
    ItemName: string; 
    ItemAmount: string;
    Discount: string; 
    Initial: string; 
    LocalBillingCode: string; 
    LocalBillingName: string;
    Location: string; 
    NetAmount: string; 
    SimbVersion: string; 
    Terminology: string; 
  }

  export class ResultBillingInfoDto {
    LocalBillingCode: string; 
    LocalBillingName: string; 
    SimbBillingCode: string;
    PayorBillingCode: string; 
    BillingInitial: string; 
    BillingDiscount: string; 
    BillingNetAmount: string;

  }
  export class ResultTotalBillAmountInfoDto {
    TotalBillAmount: string; 
  }
  export class ResultAttachDocListInfoDto {
    Base64Data: string; 
    DocName: string;
  }


  export class ResultVisitInfoDto {
    FurtherClaimId: string; 
    AccidentCauseOver45Days: string;
    AdditionalNote: string;
    AlcoholRelated: boolean;
    ChiefComplaint: string;
    ComaScore: string;
    DxFreeText: string;
    ExpectedDayOfRecovery: string;
    Height: string;
    PhysicalExam: string;
    PlanOfTreatment: string;
    Pregnant: boolean;
    PresentIllness: string;
    PreviousTreatmentDate: string;
    PreviousTreatmentDetail: string;
    PrivateCase: boolean;
    ProcedureFreeText: string;
    SignSymptomsDate: string;
    UnderlyingCondition: string;
    VisitDateTime: string;
    Vn: string;
    Weight: string;

  }

/////////////////////////////////////////////////////////////////////

 // ResultBillingInfoDto ,ResultTotalBillAmountInfoDto
