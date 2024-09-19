
import { IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQuerycheckeligibleDto }  from '../../../utils/dto/transaction-query.dto';

export class CheckEligibleDto {

   HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQuerycheckeligibleDto;
 // Result?: ResultInfo;
}



  export class QueryBodyDto {
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
    
    
  }


  export class DiagnosisInfoDto {
    DiagnosisInfo?: QueryDiagnosisInfoDto
  }
  export class QueryDiagnosisInfoDto{

    @IsString()
    @IsOptional()
    DxTypeCode?: string;

    @IsString()
    @IsOptional()
    DxCode?: string;

    @IsString()
    @IsOptional()
    DxName?: string;
  }