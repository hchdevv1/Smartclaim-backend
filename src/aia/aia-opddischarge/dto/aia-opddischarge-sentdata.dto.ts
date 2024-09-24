
import { IsDateString ,IsDecimal, IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
//import { HttpMessageDto } from '../../../utils/dto/http-status-message.dto';
//import { TransactionQuerycheckeligibleDto }  from '../../../utils/dto/transaction-query.dto';


export class CreateTransactionclaimDto{

    @IsString()
    @IsOptional()
    refid?: string;

    @IsInt()
    @IsOptional()
    insurerid?: number;

    @IsString()
    @IsOptional()
    transactionno?: string;

    @IsString()
    @IsOptional()
    furtherclaimid?: string;

    @IsString()
    //@IsOptional()
    hn: string;

    @IsString()
    @IsOptional()
    vn?: string;
    
    @IsString()
    @IsOptional()
    presentillness?: string;

    @IsString()
    @IsOptional()
    chiefcomplaint?: string;


    @IsString()
    @IsOptional()
    accidentplacecode?: string;

    @IsString()
    @IsOptional()
    causeofinjury?: string;

    @IsString()
    @IsOptional()
    commentofinjury?: string;

    @IsString()
    @IsOptional()
    woundtypecode?: string;

    @IsString()
    @IsOptional()
    injurysidecode?: string;
    @IsString()
    @IsOptional()
    injuryarea?: string;
 
    @IsString()
    @IsOptional()
    messageclaim?: string;
    @IsString()
    @IsOptional()
    messageth?: string;
    
    @IsDateString()
    @IsOptional()
    accidentdate?: string;

@IsString()
    @IsOptional()
    claimno?: string;

    @IsString()
    @IsOptional()
    statuscode?: string;

    @IsString()
    @IsOptional()
    occurrenceno?: string;

    @IsDecimal()
    @IsOptional()
    totalapprovedamount?: number;
    @IsDecimal()
    @IsOptional()
    totalexcessamount?: number;
 
    @IsString()
    @IsOptional()
    batchnumber?: string;
    @IsString()
    @IsOptional()
    invoicenumber?: string;


    @IsDateString()
    @IsOptional()
    visitdate?: string;

       
    @IsBoolean()
    @IsOptional()
    isreimbursement?: boolean;

  }