import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//import { prismaProgest } from '../../database/database';
import { Prisma } from '../../../prisma/generate-client-db';
//import { lastValueFrom } from 'rxjs'

/* ////// utils //////  */
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
import { HttpStatusMessageService } from '../../utils/http-status-message.service';
import { UtilsService } from '../../utils/utils.service';
/* ////// DTO //////  */
import { QueryBodyDto, QueryDiagnosisInfoDto } from  './dto/aia-opddischarge.dto';

const httpStatusMessageService = new HttpStatusMessageService();
let TrakcarepatientInfo,RequesetBody,ResponeTrakcareHTTPStatus;
@Injectable()
export class AiaOpddischargeService {
    constructor(
      
      private readonly httpService: HttpService,
      private readonly trakcarePatientInfoService: TrakcarePatientInfoService ,
      private readonly utilsService:UtilsService
    ) {}

  findAll() {
    return `This action returns all aiaOpddischarge`;
  }

  async getOPDDischargeDiagnosis(queryBodyDto:QueryBodyDto){
    
   

 try{
  RequesetBody ={
      
    xInsurerCode:queryBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryBodyDto.PatientInfo.RefId||'', 
    xPID:queryBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryBodyDto.PatientInfo.IdType||'', 
    xHN:queryBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryBodyDto.PatientInfo.WoundDetails||'', 
  }

    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeDiagnosis(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
        xstatusCode :TrakcarepatientInfo.statusCode,
        xmessage :TrakcarepatientInfo.message,
        xerror :TrakcarepatientInfo.error
      }
    let  newQueryDiagnosisInfoDto =new QueryDiagnosisInfoDto ();
    newQueryDiagnosisInfoDto = {

      DxTypeCode: TrakcarepatientInfo.PatientInfo.DxTypeCode,
      DxCode: TrakcarepatientInfo.PatientInfo.DxCode,
      DxName: TrakcarepatientInfo.PatientInfo.DxName
  
  

}
/*
const newHttpMessageDto =new HttpMessageDto();
this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
const newTransactionQueryDto =new TransactionQueryDto();
this.addFormatTransactionQuery(newTransactionQueryDto, 
  RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
  RequesetBody.xIdType,RequesetBody.xStatusClaimCode,RequesetBody.xInsurerCode,
  RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)
let newPatientfindDto= new PatientFindDto();
newPatientfindDto={
  HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryDto,
  Result:{
    PatientInfo:newFindPatientResult
  }

}
*/
return newQueryDiagnosisInfoDto
  }catch(error)
  {
    if (error instanceof Prisma.PrismaClientInitializationError) {
      throw new HttpException(
       { 
        HTTPStatus: {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR)),
          error: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR)),
        },
        },HttpStatus.INTERNAL_SERVER_ERROR );
    }else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          {  
            HTTPStatus: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR),error.code),
              error: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR),error.code),
           },
          },HttpStatus.INTERNAL_SERVER_ERROR ); 
    }else{    // กรณีเกิดข้อผิดพลาดอื่น ๆ
      if (error.message.includes('Connection') || error.message.includes('ECONNREFUSED')) {
        throw new HttpException({
          HTTPStatus: {
          statusCode: HttpStatus.SERVICE_UNAVAILABLE,
          message: 'Cannot connect to the database server. Please ensure it is running.',
          error: 'Cannot connect to the database server. Please ensure it is running.',
        },
        }, HttpStatus.SERVICE_UNAVAILABLE);
      }else if (error.message.includes('Conversion') || error.message.includes('Invalid input syntax')) {
        throw new HttpException({
          HTTPStatus: {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Invalid data format or conversion error.',
          error: 'Invalid data format or conversion error.',
        },
        }, HttpStatus.BAD_REQUEST);
      }else if (error.message.includes('Permission') || error.message.includes('Access denied')) {
        throw new HttpException({
          HTTPStatus: {
          statusCode: HttpStatus.FORBIDDEN,
          message: 'You do not have permission to perform this action.',
          error: 'You do not have permission to perform this action.',
        },
        }, HttpStatus.FORBIDDEN);
      }else if (error.message.includes('Unable to fit integer value')) {
        // Handle integer overflow or similar errors
        throw new HttpException({
          HTTPStatus: {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'The integer value is too large for the database field.',
          error: 'The integer value is too large for the database field.',
        },
        }, HttpStatus.BAD_REQUEST);
      }
      else{
        throw new HttpException({  
          HTTPStatus: {
             statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
             message: 'An unexpected error occurred.',
             error: 'An unexpected error occurred.',
            },
          },HttpStatus.INTERNAL_SERVER_ERROR,);
      }
    }
  }


    return TrakcarepatientInfo
  }



  addFormatHTTPStatus(data: HttpMessageDto,inputstatusCode:number,inputmessage:string,inputerror:string):void{
    if(inputstatusCode !==200){
      if(data){
        data.statusCode=inputstatusCode
        data.message=inputmessage||''
        data.error=inputerror||''
      }
    }
    else{
      if(data){
        data.statusCode=200
        data.message='success'
        data.error=''
      }
    }
    
  }

}
