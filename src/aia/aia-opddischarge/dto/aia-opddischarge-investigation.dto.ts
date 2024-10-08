
import { IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryOPDDischargeDto }  from '../../../utils/dto/transaction-query.dto';


export class InvestigationInfoDto {

    HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQueryOPDDischargeDto;
    Result?: QueryInvestigationInfoDto;
}

export class QueryInvestigationBodyDto {
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

export class QueryInvestigationInfoDto {
    InvestigationInfo?: QueryInvestigation
  }
export class QueryInvestigation{

    @IsString()
    @IsOptional()
    InvestigationCode?: string;

    @IsString()
    @IsOptional()
    InvestigationGroup?: string;

    @IsString()
    @IsOptional()
    InvestigationName?: string;

    @IsString()
    @IsOptional()
    InvestigationResult?: string;

    @IsString()
    @IsOptional()
    ResultDateTime?: string;
  }