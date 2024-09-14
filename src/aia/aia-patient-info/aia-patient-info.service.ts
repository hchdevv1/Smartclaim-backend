import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { prismaProgest } from '../../database/database';
import { Prisma } from '../../../prisma/generate-client-db'
/* ////// utils //////  */
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionQueryDto, TransactionQueryPatientCreateDto } from '../../utils/dto/transaction-query.dto'
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto'
import { HttpStatusMessageService } from '../../utils/http-status-message.service'
/* ////// DTO //////  */
import { PatientFindDto, FindBodyDto ,FindPatientResultDto} from './dto/aia-patient-info-find.dto';
import { PatientCreateDto, CreateBodyDto  } from './dto/aia-patient-info-create.dto';
import { PatientSearchDto, SearchBodyDto } from './dto/aia-patient-info-search.dto';
import { FindforUpdateDto, FindforUpdateBodyDto, FindforUpdatePatientTrakcare, FindforUpdatePatientDatabase } from './dto/aia-patient-info-findforUpdate.dto';
import { PatientUpdateDto, UpdateBodyDto } from './dto/aia-patient-info-update.dto';

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
    if(RequesetBody.pid ='ต่างชาติ'){RequesetBody.pid = RequesetBody.hn}

    const result =await prismaProgest.claimants.create({  data: RequesetBody })

    console.log(result)
   
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
async PatientSearch(searchBodyDto:SearchBodyDto){
  console.log(searchBodyDto)
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
    console.log('----')
    let  results
    if( searchBodyDto.PatientInfo.IdType === "NATIONAL_ID"){
    
      results = await prismaProgest.claimants.findMany({
    where: {
      
        pid: searchBodyDto.PatientInfo.PID
      
    },
  })
  
   }else if( searchBodyDto.PatientInfo.IdType ==="HOSPITAL_ID"){
    results = await prismaProgest.claimants.findMany({
      where: {
        
          hn: searchBodyDto.PatientInfo.HN
        
      },
    })
  }else if( searchBodyDto.PatientInfo.IdType ==="PASSPORT_NO"){
    results = await prismaProgest.claimants.findMany({
      where: {
        
          passportnumber: searchBodyDto.PatientInfo.PassportNumber
        
      },
    })
  }else{
    results = await prismaProgest.claimants.findMany({
      where: {
        
          hn: RequesetBody.xHN,
          insurerid:13
         //insurerid : RequesetBody.xInsurerCode
        
      },})
  }
  console.log('00000')
console.log(results)
  //console.log(searchBodyDto.PatientInfo.IdType)
// console.log('HN')
// console.log(searchBodyDto.PatientInfo.HN)
// console.log('passport')
// console.log(searchBodyDto.PatientInfo.PassportNumber)
// console.log('PId')
// console.log(searchBodyDto.PatientInfo.PID)

  // console.log(results)
  const patientInfoArray = results.map((result) => ({
      PID: result.pid,
      HN: result.hn,
      PassportNumber:result.passportnumber,
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
    let httpcode,xmessageReturn
    if((results)&&(results.length>0)) {
      httpcode =HttpStatus.OK
      xmessageReturn = 'User search completed successfully'
    }else{
      httpcode =HttpStatus.BAD_REQUEST
      xmessageReturn = 'Not Found.'
    }
    //console.log(httpcode)
    //console.log(xmessageReturn)
    ResponeTrakcareHTTPStatus={
      xstatusCode :httpcode,
      xmessage :xmessageReturn,
      xerror :''
    }
    const newHttpMessageDto =new HttpMessageDto();
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    const newTransactionQueryDto =new TransactionQueryDto();
    this.addFormatTransactionQuery(newTransactionQueryDto, 
  RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
  RequesetBody.xIdType,RequesetBody.xStatusClaimCode,RequesetBody.xInsurerCode,
    RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)
    //console.log(patientInfoArray)
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
    if (RequesetBody.xHN){
      TrakcarepatientInfo = await this.trakcarePatientInfoService.getPatientInfoByHN(RequesetBody.xHN);
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
  const DatabasePatientInfo = await prismaProgest.claimants.findUnique({
    where: {
      hn_insurerid :{
        hn : findforUpdateBodyDto.PatientInfo.HN,
        insurerid:findforUpdateBodyDto.PatientInfo.InsurerCode
      }
      
      
      //pid: findforUpdateBodyDto.PatientInfo.PID,
    },select:{
      insurerid:true,
      pid:true,
      passportnumber:true,
      hn:true,
      title_th:true,
      givenname_th:true,
      surname_th:true,
      title_en:true,
      givenname_en:true,
      surname_en:true,
      mobilephone:true,
      dateofbirth:true,
      gender:true,
      patientid:true,
      statusactive:true
    }
  })
  console.log(DatabasePatientInfo)
  let newFindforUpdatePatientDatabase = new FindforUpdatePatientDatabase();
  if (DatabasePatientInfo){
  newFindforUpdatePatientDatabase = {

    PatientID: DatabasePatientInfo.patientid,
    PID: DatabasePatientInfo.pid,
    PassportNumber: DatabasePatientInfo.passportnumber,
    HN:DatabasePatientInfo.hn,
    TitleTH:DatabasePatientInfo.title_th,
    GivenNameTH: DatabasePatientInfo.givenname_th,
    SurnameTH: DatabasePatientInfo.surname_th,
    TitleEN:DatabasePatientInfo.title_en,
    GivenNameEN:DatabasePatientInfo.givenname_en,
    SurnameEN:DatabasePatientInfo.surname_en,
    DateOfBirth: DatabasePatientInfo.dateofbirth,
    Gender:  DatabasePatientInfo.gender,
    MobilePhone: DatabasePatientInfo.mobilephone
  
  }
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
    PatientDatabase:newFindforUpdatePatientDatabase,
    PatientTrakcare:newFindforUpdatePatientTrakcare
   }
  }

}
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
async updatePatientInfoByHN(updateBodyDto:UpdateBodyDto){
try {
  const xHN= updateBodyDto.PatientInfo.HN
  const xInsurerCode = updateBodyDto.PatientInfo.InsurerCode
  if ((xHN)&&(xInsurerCode)){
  const PostUpdatePatient ={
    pid: updateBodyDto.PatientInfo.PID|| undefined,
    hn: updateBodyDto.PatientInfo.HN|| undefined,
    passportnumber: updateBodyDto.PatientInfo.PassportNumber|| undefined,
    title_th: updateBodyDto.PatientInfo.TitleTH|| undefined,
    givenname_th: updateBodyDto.PatientInfo.GivenNameTH|| undefined,
    surname_th: updateBodyDto.PatientInfo.SurnameTH|| undefined,
    title_en: updateBodyDto.PatientInfo.TitleEN|| undefined,
    givenname_en: updateBodyDto.PatientInfo.GivenNameEN|| undefined,
    surname_en: updateBodyDto.PatientInfo.SurnameEN|| undefined,
    mobilephone: updateBodyDto.PatientInfo.MobilePhone|| undefined,
    dateofbirth: updateBodyDto.PatientInfo.DateOfBirth|| undefined,
    gender: updateBodyDto.PatientInfo.Gender|| undefined,
    statusactive:true //updateBodyDto.PatientInfo.StatusActive|| undefined,
  }
  const result = await prismaProgest.claimants.update({
    where: {
      hn_insurerid :{
        hn : updateBodyDto.PatientInfo.HN,
        insurerid:updateBodyDto.PatientInfo.InsurerCode
      }
      
    },data: PostUpdatePatient
  })

let httpcode
    if(result) {
      httpcode =HttpStatus.OK
    }
    ResponeTrakcareHTTPStatus={
      xstatusCode :httpcode,
      xmessage :'User update successfully',
      xerror :''
    }
    const newHttpMessageDto =new HttpMessageDto();
    this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
    const resultupdate = await prismaProgest.claimants.findUnique({
      where: {
       // pid: xPID,
        hn_insurerid :{
          hn : updateBodyDto.PatientInfo.HN,
          insurerid:updateBodyDto.PatientInfo.InsurerCode
        }
      },select:{
        insurerid:true,
        pid:true,
        passportnumber:true,
        hn:true,
        title_th:true,
        givenname_th:true,
        surname_th:true,
        title_en:true,
        givenname_en:true,
        surname_en:true,
        mobilephone:true,
        dateofbirth:true,
        gender:true,
        patientid:true,
        statusactive:true
      }
    })
    const RequesetBody ={
      PID :resultupdate.pid,
      PassportNumber: resultupdate.passportnumber,
      HN: resultupdate.hn,
      TitleTH: resultupdate.title_th,
      GivenNameTH: resultupdate.givenname_th,
      SurnameTH: resultupdate.surname_th,
      title_en: resultupdate.title_en,
      GivenNameEN: resultupdate.givenname_en,
      SurnameEN: resultupdate.surname_en,
      MobilePhone: resultupdate.mobilephone,
      InsurerCode: +resultupdate.insurerid,
      //statusactive: resultupdate.statusactive,
      DateOfBirth: resultupdate.dateofbirth,
      Gender: resultupdate.gender,
      PatientID: resultupdate.patientid,
    }
    const newTransactionQueryPatientCreateDto =new TransactionQueryPatientCreateDto();
    this.addFormatTransactionPatientCreateDto(newTransactionQueryPatientCreateDto, 
      resultupdate.insurerid,resultupdate.patientid,resultupdate.pid,
      resultupdate.passportnumber,resultupdate.hn,
      resultupdate.title_th,resultupdate.givenname_th,resultupdate.surname_th,
      resultupdate.title_en,resultupdate.givenname_en,resultupdate.surname_en,
      resultupdate.dateofbirth,resultupdate.gender,resultupdate.mobilephone
    )
    let newPatientUpdateDto= new PatientUpdateDto();
    newPatientUpdateDto={
      HTTPStatus:newHttpMessageDto,
       TransactionQuery:newTransactionQueryPatientCreateDto,
       Result:{
         PatientInfo:RequesetBody
         }
      }
    return newPatientUpdateDto
  }
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