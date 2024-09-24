
import { ValidateNested, IsArray ,IsInt, IsOptional, IsString } from 'class-validator';
import { Type ,Transform } from 'class-transformer';

import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQueryetrieveFurtherClaimdDto }  from '../../../utils/dto/transaction-query.dto';

export class RetrieveFurtherClaimdInfoDto {

    HTTPStatus: HttpMessageDto;
   TransactionQuery :TransactionQueryetrieveFurtherClaimdDto;
    Result?: ResultRetrieveFurtherClaimDto;
}

export class QueryRetrieveFurtherClaimdtoBodyDto {
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
    VisitDateTime?: string;

    @IsString()
    @IsOptional()
    AccidentDate?: string;
    

  }


  class FurtherClaimDto {
    @IsOptional()
    @IsString()
    FurtherClaimId?: string;
  
    @IsOptional()
    @IsString()
    ClaimNo?: string;
  
    @IsOptional()
    @IsString()
    OccurrenceNo?: string;
  
    @IsOptional()
    @IsString()
    Icd10?: string;
  
    @IsOptional()
    @IsString()
    DxName?: string;
  
    @IsOptional()
    @IsString()
    @TransformDateString()
    DscDateTime?: string;
  
    @IsOptional()
    @IsString()
    @TransformDateString()
    VisitDateTime?: string;
  
    @IsOptional()
    @IsString()
    @TransformDateString()
    AccidentDate?: string;
  }
  
  export class ResultRetrieveFurtherClaimDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => FurtherClaimDto)
    @IsOptional() // เพิ่ม IsOptional ที่นี่หากต้องการให้ทั้งอาเรย์สามารถว่างได้
    FurtherClaimList?: FurtherClaimDto[];
  }
  
  // ตัวแปลงสำหรับการแสดงแค่วันที่ (YYYY-MM-DD)
function TransformDateString() {
    return Transform(({ value }) => {
      if (value) {
        const date = new Date(value);
        return date.toISOString().split('T')[0]; // ตัดเอาเฉพาะวันที่
      }
      return value;
    });
  }