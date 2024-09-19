
import { IsArray, IsInt, IsOptional, IsString } from 'class-validator';
import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
import { TransactionQuerycheckeligibleDto }  from '../../../utils/dto/transaction-query.dto';

export class CheckEligibleDto {

    HTTPStatus: HttpMessageDto;
     TransactionQuery :TransactionQuerycheckeligibleDto;
   Result?: ResultInfo;
 }
 export class ResultInfo{
    InsuranceResult?:ResultPreAuthTransactionList;
    InsuranceData?:DataFutherClaimList;
}
 class ResultPreAuthTransactionList{
    @IsString()
    @IsOptional()
    Code?: string;

    @IsString()
    @IsOptional()
    Message?: string;

    @IsString()
    @IsOptional()
    MessageTh?: string;
 }
class DataAttachDocList{

    @IsString()
    @IsOptional()
    DocName?: string;

    @IsString()
    @IsOptional()
    Base64Data?: string;

}
 class DataFutherClaimList{

    @IsInt()
    @IsOptional()
    InsurerCode:number

    @IsString()
    @IsOptional()
    RefID?: string;

    @IsString()
    @IsOptional()
    TransactionNo?: string;

    @IsString()
    @IsOptional()
    DataJson?: string;

    @IsString()
    @IsOptional()
    DataJsonType?: string;

    @IsArray()
    @IsOptional()
    AttachDocList?:DataAttachDocList[]

    @IsArray()
    @IsOptional()
    FurtherClaimList?:FurtherClaimList[]
    
 }
 class FurtherClaimList{
    
    @IsString()
    @IsOptional()
    ClaimNo?: string;

    @IsString()
    @IsOptional()
    OccerrenceNo?: string;

    @IsString()
    @IsOptional()
    ClaimStatus?: string;


    @IsString()
    @IsOptional()
    ClaimStatusDesc?: string;

    @IsString()
    @IsOptional()
    ExpectedAdmitDate?: string;

    @IsString()
    @IsOptional()
    VisitDateTime?: string;

    @IsArray()
    @IsOptional()
    Procedure?: Procedure[]

    @IsArray()
    @IsOptional()
    Diagnosis?: Diagnosis[]
 }
 class Procedure{
    @IsString()
    @IsOptional()
    Icd9?: string;

    @IsString()
    @IsOptional()
    ProcedureName?: string;

    @IsString()
    @IsOptional()
    ProcedureDate?: string;

}
class Diagnosis{
    @IsString()
    @IsOptional()
    Icd10?: string;

    @IsString()
    @IsOptional()
    DxName?: string;

}