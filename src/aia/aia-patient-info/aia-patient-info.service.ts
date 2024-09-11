import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { prismaProgest } from '../../database/database';
import { Prisma } from '../../../prisma/generate-client-db'


////////
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionQueryDto, TransactionQueryPatientCreateDto } from '../../utils/dto/transaction-query.dto'
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto'
import { HttpStatusMessageService } from '../../utils/http-status-message.service'

/* ////// DTO //////  */

import { PatientFindDto, FindBodyDto ,FindPatientResultDto} from './dto/aia-patient-info-find.dto';
import { PatientCreateDto, CreateBodyDto  } from './dto/aia-patient-info-create.dto';
import { PatientSearchDto, SearchBodyDto } from './dto/aia-patient-info-search.dto';
import { FindforUpdateDto, FindforUpdateBodyDto, FindforUpdatePatientTrakcare } from './dto/aia-patient-info-findforUpdate.dto';

import { UpdateBodyDto } from './dto/aia-patient-info-update.dto';

// let xRefID: string, xTransactionNo: string, xPID: string, xPassport: string,xIdType:string, xHN: string, xVN: string;
// let xStatusClaimCode :string ,xInsurerCode:number ,xVisitDatefrom:Date,xVisitDateto:Date;
const httpStatusMessageService = new HttpStatusMessageService();
let TrakcarepatientInfo;
let RequesetBody,ResponeTrakcareHTTPStatus;
@Injectable()
export class AiaPatientInfoService {
  constructor(
    private readonly httpService: HttpService,
    private readonly trakcarePatientInfoService: TrakcarePatientInfoService // Inject here
  ) {}


async FindPatient(findBodyDto : FindBodyDto){
  
  try{
 RequesetBody ={
  xRefID:findBodyDto.PatientInfo.RefID||'',
  xTransactionNo:findBodyDto.PatientInfo.TransactionNo||'',
  xPID : findBodyDto.PatientInfo.PID||'',
  xPassportnumber : findBodyDto.PatientInfo.PassportNumber||'',
  xIdType:findBodyDto.PatientInfo.IdType||'',
  xStatusClaimCode:findBodyDto.PatientInfo.StatusClaimCode||'',
  xInsurerCode:findBodyDto.PatientInfo.InsurerCode||null,
  xHN :findBodyDto.PatientInfo.HN||'',
  xVN: findBodyDto.PatientInfo.VN||'',
  xVisitDatefrom:findBodyDto.PatientInfo.VisitDatefrom||'',
  xVisitDateto:findBodyDto.PatientInfo.VisitDateto||'',
}
//console.log(RequesetBody.xHN);
 if( RequesetBody.xIdType === "NATIONAL_ID"){
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByPID(RequesetBody.xPID);

 }else if( RequesetBody.xIdType  ==="HOSPITAL_ID"){
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByHN(RequesetBody.xHN);
}else if( RequesetBody.xIdType  ==="PASSPORT_NO"){
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByPassportNumber(RequesetBody.xPassportnumber);
}else{
    TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByHN(RequesetBody.xHN);
}
ResponeTrakcareHTTPStatus={
  xstatusCode :TrakcarepatientInfo.statusCode,
  xmessage :TrakcarepatientInfo.message,
  xerror :TrakcarepatientInfo.error
}
let newFindPatientResult =new FindPatientResultDto ();
newFindPatientResult = {

  PatientID: TrakcarepatientInfo.PatientInfo.PatientID,
  PID: TrakcarepatientInfo.PatientInfo.PID,
  PassportNumber: TrakcarepatientInfo.PatientInfo.PassportNumber,
  HN:TrakcarepatientInfo.PatientInfo.HN,
  TitleTH:TrakcarepatientInfo.PatientInfo.TitleTH,
  GivenNameTH: TrakcarepatientInfo.PatientInfo.GivenNameTH,
  SurnameTH: TrakcarepatientInfo.PatientInfo.SurnameTH,
  TitleEN:TrakcarepatientInfo.PatientInfo.TitleEN,
  GivenNameEN:TrakcarepatientInfo.PatientInfo.GivenNameEN,
  SurnameEN:TrakcarepatientInfo.PatientInfo.SurnameEN,
  DateOfBirth: TrakcarepatientInfo.PatientInfo.DateOfBirth,
  Gender:  TrakcarepatientInfo.PatientInfo.Gender,
  MobilePhone: TrakcarepatientInfo.PatientInfo.MobilePhone

}
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

return newPatientfindDto
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
async create(createBodyDto:CreateBodyDto){
  try{

    const RequesetBody ={
      pid :createBodyDto.PatientInfo.PID,
      passportnumber: createBodyDto.PatientInfo.PassportNumber,
      hn: createBodyDto.PatientInfo.HN,
      title_th: createBodyDto.PatientInfo.TitleTH,
      givenname_th: createBodyDto.PatientInfo.GivenNameTH,
      surname_th: createBodyDto.PatientInfo.SurnameTH,
      title_en: createBodyDto.PatientInfo.TitleEN,
      givenname_en: createBodyDto.PatientInfo.GivenNameEN,
      surname_en: createBodyDto.PatientInfo.SurnameEN,
      mobilephone: createBodyDto.PatientInfo.MobilePhone,
      insurerid: +createBodyDto.PatientInfo.InsurerCode,
      statusactive: true,
      dateofbirth: createBodyDto.PatientInfo.DateOfBirth,
      gender: createBodyDto.PatientInfo.Gender,
      patientid: +createBodyDto.PatientInfo.PatientID,
    }

    const result =await prismaProgest.claimants.create({  data: RequesetBody })
    let httpcode
    if(result) {
      httpcode =HttpStatus.CREATED

    }
    ResponeTrakcareHTTPStatus={
      
      xstatusCode :httpcode,
      xmessage :'User created successfully',
      xerror :''
    }
    const newHttpMessageDto =new HttpMessageDto();
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    
    const newTransactionQueryPatientCreateDto =new TransactionQueryPatientCreateDto();
    this.addFormatTransactionPatientCreateDto(newTransactionQueryPatientCreateDto, 
      RequesetBody.insurerid,RequesetBody.patientid,RequesetBody.pid,
      RequesetBody.passportnumber,RequesetBody.hn,
      RequesetBody.title_th,RequesetBody.givenname_th,RequesetBody.surname_th,
      RequesetBody.title_en,RequesetBody.givenname_en,RequesetBody.surname_en,
      RequesetBody.dateofbirth,RequesetBody.gender,RequesetBody.mobilephone
    )
    let newPatientCreateDto= new PatientCreateDto();
    newPatientCreateDto={
      HTTPStatus:newHttpMessageDto,
       TransactionQuery:newTransactionQueryPatientCreateDto,
       Result:{
        PatientInfo:newTransactionQueryPatientCreateDto
         }
      }
    return newPatientCreateDto
  }catch(error)
  {
   // console.log(error)
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
async PatientSearchByPID(searchBodyDto:SearchBodyDto){
  try{
    RequesetBody ={
      xRefID:searchBodyDto.PatientInfo.RefID||'',
      xTransactionNo:searchBodyDto.PatientInfo.TransactionNo||'',
      xPID : searchBodyDto.PatientInfo.PID||'',
      xPassportnumber : searchBodyDto.PatientInfo.PassportNumber||'',
      xIdType:searchBodyDto.PatientInfo.IdType||'',
      xStatusClaimCode:searchBodyDto.PatientInfo.StatusClaimCode||'',
      xInsurerCode:searchBodyDto.PatientInfo.InsurerCode||null,
      xHN :searchBodyDto.PatientInfo.HN||'',
      xVN: searchBodyDto.PatientInfo.VN||'',
      xVisitDatefrom:searchBodyDto.PatientInfo.VisitDatefrom||'',
      xVisitDateto:searchBodyDto.PatientInfo.VisitDateto||'',
    }


  const  results = await prismaProgest.claimants.findMany({
    where: {
      OR:[
        {hn: searchBodyDto.PatientInfo.HN},
        {pid: searchBodyDto.PatientInfo.PID},
        {passportnumber: searchBodyDto.PatientInfo.PassportNumber}
      ]
    },
  })
  const patientInfoArray = results.map((result) => ({
      PID: result.pid,
      HN: result.hn,
      TitleTH: result.title_th,
      GivenNameTH: result.givenname_th,
      SurnameTH: result.surname_th,
      TitleEN: result.title_en,
      GivenNameEN: result.givenname_en,
      SurnameEN: result.surname_en,
      MobilePhone: result.mobilephone,
      DateOfBirth: result.dateofbirth,
      Gender: result.gender,
    }));
    let httpcode
    if(results) {
      httpcode =HttpStatus.OK

    }
    ResponeTrakcareHTTPStatus={
      
      xstatusCode :httpcode,
      xmessage :'User search completed successfully',
      xerror :''
    }
    const newHttpMessageDto =new HttpMessageDto();
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    const newTransactionQueryDto =new TransactionQueryDto();
    this.addFormatTransactionQuery(newTransactionQueryDto, 
  RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
  RequesetBody.xIdType,RequesetBody.xStatusClaimCode,RequesetBody.xInsurerCode,
    RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)
    let newPatientSearchDto= new PatientSearchDto();
    newPatientSearchDto={
  HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryDto,
   Result:{
    PatientInfo:patientInfoArray
   }

}

return newPatientSearchDto;

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

async FindforUpdate(findforUpdateBodyDto:FindforUpdateBodyDto){
  try {
    RequesetBody ={
      xRefID:findforUpdateBodyDto.PatientInfo.RefID||'',
      xTransactionNo:findforUpdateBodyDto.PatientInfo.TransactionNo||'',
      xPID : findforUpdateBodyDto.PatientInfo.PID||'',
      xPassportnumber : findforUpdateBodyDto.PatientInfo.PassportNumber||'',
      xIdType:findforUpdateBodyDto.PatientInfo.IdType||'',
      xStatusClaimCode:findforUpdateBodyDto.PatientInfo.StatusClaimCode||'',
      xInsurerCode:findforUpdateBodyDto.PatientInfo.InsurerCode||null,
      xHN :findforUpdateBodyDto.PatientInfo.HN||'',
      xVN: findforUpdateBodyDto.PatientInfo.VN||'',
      xVisitDatefrom:findforUpdateBodyDto.PatientInfo.VisitDatefrom||'',
      xVisitDateto:findforUpdateBodyDto.PatientInfo.VisitDateto||'',
    }
    if (RequesetBody.xPID){
      TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByPID(RequesetBody.xPID);
    }
    ResponeTrakcareHTTPStatus={
      xstatusCode :TrakcarepatientInfo.statusCode,
      xmessage :TrakcarepatientInfo.message,
      xerror :TrakcarepatientInfo.error
    }
    let newFindforUpdatePatientTrakcare =new FindforUpdatePatientTrakcare ();
    newFindforUpdatePatientTrakcare = {

  PatientID: TrakcarepatientInfo.PatientInfo.PatientID,
  PID: TrakcarepatientInfo.PatientInfo.PID,
  PassportNumber: TrakcarepatientInfo.PatientInfo.PassportNumber,
  HN:TrakcarepatientInfo.PatientInfo.HN,
  TitleTH:TrakcarepatientInfo.PatientInfo.TitleTH,
  GivenNameTH: TrakcarepatientInfo.PatientInfo.GivenNameTH,
  SurnameTH: TrakcarepatientInfo.PatientInfo.SurnameTH,
  TitleEN:TrakcarepatientInfo.PatientInfo.TitleEN,
  GivenNameEN:TrakcarepatientInfo.PatientInfo.GivenNameEN,
  SurnameEN:TrakcarepatientInfo.PatientInfo.SurnameEN,
  DateOfBirth: TrakcarepatientInfo.PatientInfo.DateOfBirth,
  Gender:  TrakcarepatientInfo.PatientInfo.Gender,
  MobilePhone: TrakcarepatientInfo.PatientInfo.MobilePhone

}


    const newHttpMessageDto =new HttpMessageDto();
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    const newTransactionQueryDto =new TransactionQueryDto();
    this.addFormatTransactionQuery(newTransactionQueryDto, 
    RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
    RequesetBody.xIdType,RequesetBody.xStatusClaimCode,RequesetBody.xInsurerCode,
    RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)

  let newFindforUpdateDto= new FindforUpdateDto();
  newFindforUpdateDto={
  HTTPStatus:newHttpMessageDto,
  TransactionQuery:newTransactionQueryDto,
  Result:{

   PatientInfo:{
    PatientDatabase:newFindforUpdatePatientTrakcare,
    PatientTrakcare:newFindforUpdatePatientTrakcare
   }
  }

}

  // FindforUpdateDto
      return newFindforUpdateDto
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

async updatePatientInfoByPID(updateBodyDto:UpdateBodyDto){
try {

    return updateBodyDto
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




 addFormatTransactionQuery(data: TransactionQueryDto,
  inputRefID:string,inputTransactionNo:string,inputPID:string,inputPassport:string
  ,inputIdType:string,inputStatusClaimCode :string ,inputInsurerCode:number
  ,inputHN:string,inputVN:string,inputVisitDatefrom:string,inputVisitDateto:string):void{
  if(data){
    data.RefID = inputRefID||''
    data.TransactionNo = inputTransactionNo||''
    data.PID = inputPID||''
    data.PassportNumber = inputPassport ||''
    data.IdType = inputIdType||''
    data.StatusClaimCode = inputStatusClaimCode||''
    data.InsurerCode = inputInsurerCode||null
    data.HN= inputHN||''
    data.VN = inputVN||''
    data.VisitDatefrom = inputVisitDatefrom||null
    data.VisitDateto = inputVisitDateto||null
   
  }
 }
 addFormatTransactionPatientCreateDto(data: TransactionQueryPatientCreateDto,
  inputInsurerCode:number,inputPatientID:number,inputPID:string,
  inputPassportNumber:string,inputHN:string,
  inputTitleTH:string,inputGivenNameTH:string,inputSurnameTH:string,
  inputTitleEN:string,inputGivenNameEN:string,inputSurnameEN:string,
  inputDateOfBirth:string,inputGender :string ,inputMobilePhone:string):void{
  if(data){

    data.InsurerCode = inputInsurerCode||null
    data.PatientID = inputPatientID||null
    data.PID = inputPID||''
    data.PassportNumber = inputPassportNumber ||''
    data.HN = inputHN||''

    data.TitleTH = inputTitleTH||''
    data.GivenNameTH = inputGivenNameTH||''
    data.SurnameTH= inputSurnameTH||''

    data.TitleEN = inputTitleEN||''
    data.GivenNameEN = inputGivenNameEN||''
    data.SurnameEN= inputSurnameEN||''
    data.DateOfBirth = inputDateOfBirth||''
    data.Gender = inputGender||null
    data.MobilePhone = inputMobilePhone||null
   
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