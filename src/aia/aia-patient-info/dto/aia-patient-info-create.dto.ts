import {  IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryPatientCreateDto }  from '../../../utils/dto/transaction-query.dto';
export class PatientCreateDto {

    HTTPStatus: HttpMessageDto;
    TransactionQuery? :TransactionQueryPatientCreateDto;
    Result?: ResultInfo;
}
class ResultInfo{
    PatientInfo?: CreatePatientBodyDto
}

export class CreateBodyDto {
    PatientInfo?: CreatePatientBodyDto
  }

class CreatePatientBodyDto{
    
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