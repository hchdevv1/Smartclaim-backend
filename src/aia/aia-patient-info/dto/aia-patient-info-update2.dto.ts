import {  IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryDto }  from '../../../utils/dto/transaction-query.dto';
export class PatientUpdateDto {

    HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQueryDto;
    Result?: UpdateResultDto;
}
export class PostPatientBodyUpdateDto {
    PatientInfo?: PatientBodyUpdateDto
  }
  export class PatientBodyUpdateDto{
    @IsInt()
    @IsOptional()
    Insurerid:number

    @IsInt()
    @IsOptional()
    PatientID?: number;


    // @IsString()
    // @IsOptional()
    // Insurerid:string

    // @IsString()
    // @IsOptional()
    // PatientID?: string;

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


    @IsBoolean()
    @IsOptional()
    StatusActive?: boolean;
  }
 
  class UpdateResultDto {
   
      @IsOptional()
      PatientInfo?: PatientBodyUpdateDto;
      }