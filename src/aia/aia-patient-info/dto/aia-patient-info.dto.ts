import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryDto }  from '../../../utils/dto/transaction-query.dto';

export class PatientInfoDto {

    HTTPStatus: HttpMessageDto;
    TransactionQuery :TransactionQueryDto;
    Result?: ResultDto;
}

// class TransactionQueryDto{

//     @IsString()
//     @IsOptional()
//     PID?: string;


//     @IsString()
//     @IsOptional()
//     RefID: string;

//     @IsString()
//     @IsOptional()
//     TransactionNo: string;

//     @IsString()
//     @IsOptional()
//     InsurerCode: string;

//     @IsString()
//     @IsOptional()
//     HN: string;

//     @IsString()
//     @IsOptional()
//     VN: string;
// }
export class ResultDto {
    PatientInfo?: PatientQureyDto
  }

 export class PatientQureyDto{
    
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
 export class ResultDtotest{
    @IsArray()
    @IsOptional()
    PatientInfo?: {
        firstnameA?: string;
    }
  
    @IsString()
    @IsOptional()
    firstname?: string;
  
    @IsString()
    @IsOptional()
    lastname?: string;
  
    @IsOptional()
    Phone?: {
      home?: string;
      office?: string;
      mobile?: string;
    };
  }