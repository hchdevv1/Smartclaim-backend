import { IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryPatientCreateDto }  from '../../../utils/dto/transaction-query.dto';
export class PatientUpdateDto {

    HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQueryPatientCreateDto;
   // Result?: UpdateResultDto;
}

export class UpdateBodyDto {
    PatientInfo?: UpdatePatientBodyDto
  }
  class UpdatePatientBodyDto{
    
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

  export class ComparePatientInfo{

    PatientInfo?:ComparePatientData

  }
  class ComparePatientData{
    PatientDatabase?:PatientDatabase
    PatientTrakcar?:PatientTrakcare
  }
  class PatientTrakcare{

  }
  class PatientDatabase{
    
  }