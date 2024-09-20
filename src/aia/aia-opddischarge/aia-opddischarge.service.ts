import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//import { prismaProgest } from '../../database/database';
import { Prisma } from '../../../prisma/generate-client-db';
//import { lastValueFrom } from 'rxjs'

/* ////// utils //////  */
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionQueryOPDDischargeDto  } from '../../utils/dto/transaction-query.dto';

import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
import { HttpStatusMessageService } from '../../utils/http-status-message.service';
import { UtilsService } from '../../utils/utils.service';
/* ////// DTO //////  */
import { QueryDiagnosisBodyDto, QueryDiagnosis ,DiagnosisInfoDto } from  './dto/aia-opddischarge-diagnosis.dto';
import { QueryDoctorBodyDto ,QueryDoctor ,DoctorInfoDto } from './dto/aia-opddischarge-doctor.dto';
import { QueryVitalSignBodyDto ,QueryVitalSign ,VitalSignInfoDto} from './dto/aia-opddischarge-vitalsign.dto';
import { QueryProcedureBodyDto ,QueryProcedure ,ProcedureInfoDto}from './dto/aia-opddischarge-procedure.dto';
import { QueryInvestigationBodyDto ,QueryInvestigation ,InvestigationInfoDto} from './dto/aia-opddischarge-Investigation.dto';
import { QueryAccidentBodyDto ,QueryAccident ,AccidentInfoDto} from  './dto/aia-opddischarge-Accident.dto';


const httpStatusMessageService = new HttpStatusMessageService();
let TrakcarepatientInfo,RequesetBody,ResponeTrakcareHTTPStatus;
@Injectable()
export class AiaOpddischargeService {
    constructor(
      
      private readonly httpService: HttpService,
      private readonly trakcarePatientInfoService: TrakcarePatientInfoService ,
      private readonly utilsService:UtilsService
    ) {}

  async getOPDDischargeDiagnosis(queryDiagnosisBodyDto:QueryDiagnosisBodyDto){
 
    const newTransactionQueryDiagnosisDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryDiagnosisBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryDiagnosisBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryDiagnosisBodyDto.PatientInfo.RefId||'', 
    xPID:queryDiagnosisBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryDiagnosisBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryDiagnosisBodyDto.PatientInfo.IdType||'', 
    xHN:queryDiagnosisBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryDiagnosisBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryDiagnosisBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryDiagnosisBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryDiagnosisBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryDiagnosisBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryDiagnosisBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryDiagnosisBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryDiagnosisBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryDiagnosisBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryDiagnosisBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryDiagnosisBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryDiagnosisBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryDiagnosisBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryDiagnosisBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryDiagnosisBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryDiagnosisBodyDto.PatientInfo.PresentIllness||'',  
  }

    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeDiagnosis(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    let  newQueryDiagnosisInfoDto =new QueryDiagnosis ();
    if (TrakcarepatientInfo.DiagnosisInfo && TrakcarepatientInfo.DiagnosisInfo.length > 0) {
    newQueryDiagnosisInfoDto = TrakcarepatientInfo.DiagnosisInfo.map((item) => {
      return {
        DxTypeCode: item.DxTypeCode,  
        DxCode:item.DxCode,
        DxName:item.DxName,
        Dxtypenametrakcare:'',
        Dxtypecodeinsurance:'',
        Dxtypenameinsurance:'Principal (โรคหลักที่ให้การรักษา)xxx'
        
      };
    }
  );
    console.log('HHHHHH')
    
     
     const convertDxtypename = await this.convertDxTypeCode(RequesetBody.xInsurerCode,'M')
     this.addDxtype(newQueryDiagnosisInfoDto,convertDxtypename)
    // if (Array.isArray(newQueryDiagnosisInfoDto)) {
    //   newQueryDiagnosisInfoDto.forEach((item) => {
    //     convertDxtypename = await this.utilsService.getDiagnosisTypeMapping(RequesetBody.xInsurerCode,item.DxTypeCode)
        
    //     console.log(item.DxTypeCode)
    //     console.log(convertDxtypename)     
    //   });
      
   // } 
  console.log(convertDxtypename.dxtypenameinsurance)
    console.log('XXXXXXX')
    
    //TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeDiagnosis(DxTypeCode);
  }else{
    newQueryDiagnosisInfoDto = {
      DxTypeCode: '',  
        DxCode:'',
        DxName:'',
        Dxtypenametrakcare:'',
        Dxtypecodeinsurance:'',
        Dxtypenameinsurance:''
    }
  }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryDiagnosisDto,
     
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness

    )
    
    let newDiagnosisInfoDto= new DiagnosisInfoDto();
    newDiagnosisInfoDto={
          HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryDiagnosisDto,
  Result:{DiagnosisInfo:newQueryDiagnosisInfoDto}

  
    }
 
return newDiagnosisInfoDto
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
  }

  async getOPDDischargeDoctor(queryDoctorBodyDto:QueryDoctorBodyDto){
 
    const newTransactionQueryOPDDischargeDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryDoctorBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryDoctorBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryDoctorBodyDto.PatientInfo.RefId||'', 
    xPID:queryDoctorBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryDoctorBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryDoctorBodyDto.PatientInfo.IdType||'', 
    xHN:queryDoctorBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryDoctorBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryDoctorBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryDoctorBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryDoctorBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryDoctorBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryDoctorBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryDoctorBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryDoctorBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryDoctorBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryDoctorBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryDoctorBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryDoctorBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryDoctorBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryDoctorBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryDoctorBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryDoctorBodyDto.PatientInfo.PresentIllness||'',  
  }
  
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeDoctor(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
   
    let  newQueryDoctor =new QueryDoctor ();
    if (TrakcarepatientInfo.DoctorInfo && TrakcarepatientInfo.DoctorInfo.length > 0) {
        newQueryDoctor = TrakcarepatientInfo.DoctorInfo.map((item) => {
        return {
          DoctorLicense: item.DoctorLicense,  
          DoctorRole:item.DoctorRole,
          DoctorFirstName:item.DoctorFirstName,
          DoctorLastName:item.DoctorLastName
            };
          });
    } else {
        newQueryDoctor = {
          DoctorLicense: '',  
          DoctorRole:'',
          DoctorFirstName:'',
          DoctorLastName:''
          }
     }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryOPDDischargeDto,
     
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness

    )
    
    let newDoctorInfoDto= new DoctorInfoDto();
    newDoctorInfoDto={
          HTTPStatus:newHttpMessageDto,
          TransactionQuery:newTransactionQueryOPDDischargeDto,
          Result:{DoctorInfo:newQueryDoctor}
     }
 
return newDoctorInfoDto
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
  }

  async getOPDDischargeVitalSign(queryVitalSignBodyDto:QueryVitalSignBodyDto){
 
    const newTransactionQueryOPDDischargeDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryVitalSignBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryVitalSignBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryVitalSignBodyDto.PatientInfo.RefId||'', 
    xPID:queryVitalSignBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryVitalSignBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryVitalSignBodyDto.PatientInfo.IdType||'', 
    xHN:queryVitalSignBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryVitalSignBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryVitalSignBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryVitalSignBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryVitalSignBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryVitalSignBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryVitalSignBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryVitalSignBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryVitalSignBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryVitalSignBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryVitalSignBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryVitalSignBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryVitalSignBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryVitalSignBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryVitalSignBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryVitalSignBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryVitalSignBodyDto.PatientInfo.PresentIllness||'',  
  }
   //RequesetBody.xVN = 'O412935-67'
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeVitalSign(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    
    let  newQueryVitalSign =new QueryVitalSign ();
   if (TrakcarepatientInfo.VitalSignInfo && TrakcarepatientInfo.VitalSignInfo.length > 0) {
      newQueryVitalSign = TrakcarepatientInfo.VitalSignInfo.map((item) => {
      return {
        DiastolicBp: item.DiastolicBp,  
        HeartRate:item.HeartRate,
        OxygenSaturation:item.OxygenSaturation,
        PainScore:item.PainScore,
        RespiratoryRate:item.RespiratoryRate,
        SystolicBp:item.SystolicBp,
        Temperature:item.Temperature,
        VitalSignEntryDateTime:item.VitalSignEntryDateTime, 
      };
    });
  } else {
    newQueryVitalSign = {
      DiastolicBp: '',  
      HeartRate: '',
      OxygenSaturation: '',
      PainScore: '',
      RespiratoryRate: '',
      SystolicBp: '',
      Temperature: '',
      VitalSignEntryDateTime: ''
    };
  }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryOPDDischargeDto,
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness
    )
    let newVitalSignInfoDto= new VitalSignInfoDto();
    newVitalSignInfoDto={
          HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryOPDDischargeDto,
  Result:{VitalSignInfo:newQueryVitalSign}
 }
 
return newVitalSignInfoDto
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
  }

  async getOPDDischargeProcedure(queryProcedureBodyDto:QueryProcedureBodyDto){
 
    const newTransactionQueryOPDDischargeDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryProcedureBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryProcedureBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryProcedureBodyDto.PatientInfo.RefId||'', 
    xPID:queryProcedureBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryProcedureBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryProcedureBodyDto.PatientInfo.IdType||'', 
    xHN:queryProcedureBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryProcedureBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryProcedureBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryProcedureBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryProcedureBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryProcedureBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryProcedureBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryProcedureBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryProcedureBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryProcedureBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryProcedureBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryProcedureBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryProcedureBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryProcedureBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryProcedureBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryProcedureBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryProcedureBodyDto.PatientInfo.PresentIllness||'',  
  }
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeProcedure(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    
    let  newQueryProcedure =new QueryProcedure ();
   if (TrakcarepatientInfo.ProcedureInfo && TrakcarepatientInfo.ProcedureInfo.length > 0) {
    newQueryProcedure = TrakcarepatientInfo.ProcedureInfo.map((item) => {
      return {
        Icd9: item.Icd9,  
        ProcedureName:item.ProcedureName,
        ProcedureDate:item.ProcedureDate,
      };
    });
  } else {
    newQueryProcedure = {
      Icd9: '',  
      ProcedureName: '',
      ProcedureDate: ''
     
    };
  }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryOPDDischargeDto,
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness
    )
    let newProcedureInfoDto= new ProcedureInfoDto();
    newProcedureInfoDto={
          HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryOPDDischargeDto,
  Result:{ProcedureInfo:newQueryProcedure}
 }
 
return newProcedureInfoDto
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
  }

  async getOPDDischargeInvestigation(queryInvestigationBodyDto:QueryInvestigationBodyDto){
 
    const newTransactionQueryOPDDischargeDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryInvestigationBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryInvestigationBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryInvestigationBodyDto.PatientInfo.RefId||'', 
    xPID:queryInvestigationBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryInvestigationBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryInvestigationBodyDto.PatientInfo.IdType||'', 
    xHN:queryInvestigationBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryInvestigationBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryInvestigationBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryInvestigationBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryInvestigationBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryInvestigationBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryInvestigationBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryInvestigationBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryInvestigationBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryInvestigationBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryInvestigationBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryInvestigationBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryInvestigationBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryInvestigationBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryInvestigationBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryInvestigationBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryInvestigationBodyDto.PatientInfo.PresentIllness||'',  
  }
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeInvestigation(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    
    let  newQueryInvestigation =new QueryInvestigation ();
   if (TrakcarepatientInfo.InvestigationInfo && TrakcarepatientInfo.InvestigationInfo.length > 0) {
    newQueryInvestigation = TrakcarepatientInfo.InvestigationInfo.map((item) => {
      return {
        InvestigationCode: item.InvestigationCode,  
        InvestigationGroup:item.InvestigationGroup,
        InvestigationName:item.InvestigationName,
        InvestigationResult:item.InvestigationResult,
        ResultDateTime:item.ResultDateTime
      };
    });
  } else {
    newQueryInvestigation = {
      InvestigationCode: '',  
      InvestigationGroup: '',
      InvestigationName: '',
      InvestigationResult: '',
      ResultDateTime: ''
     
    };
  }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryOPDDischargeDto,
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness
    )
    let newInvestigationInfoDto= new InvestigationInfoDto();
    newInvestigationInfoDto={
          HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryOPDDischargeDto,
  Result:{InvestigationInfo:newQueryInvestigation}
 }
 
return newInvestigationInfoDto
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
  }

  async getOPDDischargeAccident(queryAccidentBodyDto:QueryAccidentBodyDto){
 
    const newTransactionQueryOPDDischargeDto =new TransactionQueryOPDDischargeDto();
    const newHttpMessageDto =new HttpMessageDto();
 try{
  RequesetBody ={
      
    xInsurerCode:queryAccidentBodyDto.PatientInfo.InsurerCode||null, 
    xTransactionNo:queryAccidentBodyDto.PatientInfo.TransactionNo||'',
    xRefId:queryAccidentBodyDto.PatientInfo.RefId||'', 
    xPID:queryAccidentBodyDto.PatientInfo.PID||'', 
    xPassportNumber:queryAccidentBodyDto.PatientInfo.PassportNumber||'', 
    xIdType:queryAccidentBodyDto.PatientInfo.IdType||'', 
    xHN:queryAccidentBodyDto.PatientInfo.HN||'', 
    xGivenNameTH:queryAccidentBodyDto.PatientInfo.GivenNameTH||'', 
    xSurnameTH:queryAccidentBodyDto.PatientInfo.SurnameTH||'', 
    xDateOfBirth:queryAccidentBodyDto.PatientInfo.DateOfBirth||'', 
    xVN:queryAccidentBodyDto.PatientInfo.VN||'', 
    xPolicyTypeCode:queryAccidentBodyDto.PatientInfo.PolicyTypeCode||'', 
    xServiceSettingCode:queryAccidentBodyDto.PatientInfo.ServiceSettingCode||'', 
    xIllnessTypeCode:queryAccidentBodyDto.PatientInfo.IllnessTypeCode||'', 
    xSurgeryTypeCode:queryAccidentBodyDto.PatientInfo.SurgeryTypeCode||'', 
    xVisitDateTime:queryAccidentBodyDto.PatientInfo.VisitDateTime||'', 
    xAccidentDate:queryAccidentBodyDto.PatientInfo.AccidentDate||'', 
    xAccidentPlaceCode:queryAccidentBodyDto.PatientInfo.AccidentPlaceCode||null, 
    xAccidentInjuryWoundtypeCode:queryAccidentBodyDto.PatientInfo.AccidentInjuryWoundtypeCode||'', 
    xAccidentInjurySideCode:queryAccidentBodyDto.PatientInfo.AccidentInjurySideCode||'', 
    xWoundDetails:queryAccidentBodyDto.PatientInfo.WoundDetails||'', 
    xChiefComplaint:queryAccidentBodyDto.PatientInfo.ChiefComplaint||'',
    xPresentIllness:queryAccidentBodyDto.PatientInfo.PresentIllness||'',  
  }
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getOPDDischargeAccident(RequesetBody.xVN);
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    
    let  newQueryAccident =new QueryAccident ();
   if (TrakcarepatientInfo.AccidentInfo && TrakcarepatientInfo.AccidentInfo.length > 0) {
    newQueryAccident = TrakcarepatientInfo.AccidentInfo.map((item) => {
      return {
        CauseOfInjuryCode: item.CauseOfInjuryCode,  
        CauseOfInjuryName:item.CauseOfInjuryName,
        InjuryAreaCode:item.InjuryAreaCode,
        InjuryAreaName:item.InjuryAreaName
       
      };
    });
  } else {
    newQueryAccident = {
      CauseOfInjuryCode: '',  
      CauseOfInjuryName: '',
      InjuryAreaCode: '',
      InjuryAreaName: ''
      
     
    };
  }
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    this.addFormatTransactionQueryOPDDischargeDto(
      newTransactionQueryOPDDischargeDto,
      RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
      RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xGivenNameTH,
      RequesetBody.xSurnameTH,RequesetBody.xDateOfBirth,RequesetBody.xPassportNumber,
      RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,
      RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode,
      RequesetBody.xAccidentPlaceCode,RequesetBody.xAccidentInjuryWoundtypeCode,
      RequesetBody.xAccidentInjurySideCode,RequesetBody.xWoundDetails,
      RequesetBody.xChiefComplaint,RequesetBody.xPresentIllness
    )
    let newAccidentInfoDto= new AccidentInfoDto();
    newAccidentInfoDto={
          HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryOPDDischargeDto,
  Result:{AccidentInfo:newQueryAccident}
 }
 
return newAccidentInfoDto
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
  }

async convertDxTypeCode(inputInsurerCode:string,inputdxTypeCodeTrakcare:string) {
   const convertDxtypename = await this.utilsService.getDiagnosisTypeMapping(inputInsurerCode,inputdxTypeCodeTrakcare);
  return convertDxtypename
}
addDxtype(data:any,inputconvert:string):void{
  console.log('GGGGG')
  console.log(data)
  if(data){
   data.Dxtypenameinsurance= 'jjjj'+inputconvert
  }
  console.log('GGGGG')
}
  addFormatTransactionQueryOPDDischargeDto(data: TransactionQueryOPDDischargeDto,
    inputInsurerCode:number,inputRefID:string,inputTransactionNo:string
    ,inputPID:string,inputHN:string,inputGivenNameTH :string 
    ,inputSurnameTH:string,inputDateOfBirth:string,inputPassportNumber:string
    ,inputIdType:string,inputVN:string,inputVisitDateTime:string
    ,inputAccidentDate:string,inputPolicyTypeCode:string,inputServiceSettingCode:string
    ,inputIllnessTypeCode:string,inputSurgeryTypeCodestring:string
    ,inputAccidentPlaceCode:number,inputAccidentInjuryWoundtypeCode:string
    ,inputAccidentInjurySideCode:string,inputWoundDetails:string
    ,inputPresentIllness:string,inputChiefComplaint:string
  ):void{

    if(data){
  
        data.InsurerCode = inputInsurerCode||null
        data.RefId = inputRefID||''
        data.TransactionNo = inputTransactionNo||''
        data.PID = inputPID||''
        data.HN= inputHN||''
        data.GivenNameTH = inputGivenNameTH ||''
        data.SurnameTH = inputSurnameTH ||''
        data.DateOfBirth = inputDateOfBirth ||''
        data.PassportNumber = inputPassportNumber ||''
        data.IdType = inputIdType||''
        data.VN = inputVN||''
        data.VisitDateTime = inputVisitDateTime||''
        data.AccidentDate = inputAccidentDate||''
        data.PolicyTypeCode = inputPolicyTypeCode||''
        data.ServiceSettingCode = inputServiceSettingCode||''
        data.IllnessTypeCode = inputIllnessTypeCode||''
        data.SurgeryTypeCode = inputSurgeryTypeCodestring||''
        data.AccidentPlaceCode = inputAccidentPlaceCode||null
        data.AccidentInjuryWoundtypeCode = inputAccidentInjuryWoundtypeCode||''
        data.AccidentInjurySideCode = inputAccidentInjurySideCode||''
        data.WoundDetails = inputWoundDetails||''
        data.PresentIllness = inputPresentIllness||''
        data.ChiefComplaint = inputChiefComplaint||''
    }
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
