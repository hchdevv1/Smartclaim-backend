import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//import { prismaProgest } from '../../database/database';
import { Prisma } from '../../../prisma/generate-client-db';
import { lastValueFrom } from 'rxjs'

/* ////// utils //////  */
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionQueryEpisodeDto , TransactionQuerycheckeligibleDto} from '../../utils/dto/transaction-query.dto';
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
import { HttpStatusMessageService } from '../../utils/http-status-message.service';
import { UtilsService } from '../../utils/utils.service';
/* ////// DTO //////  */
import { SearchBodyDto,EligibleEpisodeDto ,FindPatientInfoResultInfo,FindEpisodeInfoResultInfo } from './dto/aia-checkeligible-search.dto';
import { CheckEligibleDto ,CheckEligibleBodyDto ,CreateTransectionDto }from './dto/aia-checkeligible-check.dto';
import { InsuranceCustomerDetail  ,InsuranceResult ,InsuranceData , ResultInfo ,CoverageList} from './dto/aia-checkeligible-check.dto';
import { prismaProgest } from 'src/database/database';
const httpStatusMessageService = new HttpStatusMessageService();
const AIA_APIURL= process.env.AIA_APIURL;
const AIA_APISecretkey = process.env.AIA_APISecretkey;
const AIA_APIHospitalCode =process.env.AIA_APIHospitalCode;
const AIA_APIHopitalUsername=process.env.AIA_APIHopitalUsername;
const AIA_APISubscription =process.env.AIA_APISubscription;


let TrakcarepatientInfo,RequesetBody,ResponeTrakcareHTTPStatus;
@Injectable()
export class AiaCheckeligibleService {
  constructor(
    private readonly httpService: HttpService,
    private readonly trakcarePatientInfoService: TrakcarePatientInfoService, // Inject here
    private readonly utilsService:UtilsService
  ) {}

  async getEpisodeByHN(searchBodyDto : SearchBodyDto){
    try{
   RequesetBody ={
    xRefID:searchBodyDto.PatientInfo.RefId||'',
    xTransactionNo:searchBodyDto.PatientInfo.TransactionNo||'',
    xPID : searchBodyDto.PatientInfo.PID||'',
    xPassportnumber : searchBodyDto.PatientInfo.PassportNumber||'',
    xIdType:searchBodyDto.PatientInfo.IdType||'',
    xServiceSettingCode:searchBodyDto.PatientInfo.ServiceSettingCode||'',
    xInsurerCode:searchBodyDto.PatientInfo.InsurerCode||null,
    xHN :searchBodyDto.PatientInfo.HN||'',
    xVN: searchBodyDto.PatientInfo.VN||'',
    xVisitDatefrom:searchBodyDto.PatientInfo.VisitDatefrom||'',
    xVisitDateto:searchBodyDto.PatientInfo.VisitDateto||'',
  }
 
 if (RequesetBody.xServiceSettingCode==="IPD"){RequesetBody.xServiceSettingCode ="I"}
 else{RequesetBody.xServiceSettingCode ="O"}

    TrakcarepatientInfo = await this.trakcarePatientInfoService.getEpisodeByHN(RequesetBody.xHN,RequesetBody.xVisitDatefrom,RequesetBody.xServiceSettingCode);
    ResponeTrakcareHTTPStatus={
    xstatusCode :TrakcarepatientInfo.statusCode,
    xmessage :TrakcarepatientInfo.message,
    xerror :TrakcarepatientInfo.error
  }
  let newFindPatientInfoResultInfo =new FindPatientInfoResultInfo ();
  newFindPatientInfoResultInfo = {
  
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
  let newFindEpisodeInfoResultInfo =new FindEpisodeInfoResultInfo ();
  newFindEpisodeInfoResultInfo = TrakcarepatientInfo.EpisodeInfo.map(episode => ({
    VN: episode.VN,
    EpisodeType: episode.EpisodeType,
    VisitDate: episode.VisitDate,
    VisitTime: episode.VisitTime,
    VisitDateTime: episode.VisitDateTime,
    AccidentDate: episode.AccidentDate,
    LocationCode: episode.LocationCode,
    LocationDesc: episode.LocationDesc,
    WardCode: episode.WardCode,
    WardDesc: episode.WardDesc,
    BedCode: episode.BedCode,
    MainCareproviderCode: episode.MainCareproviderCode,
    MainCareproviderDesc: episode.MainCareproviderDesc,
    DoctorLicense: episode.DoctorLicense,
    DoctorFirstName: episode.DoctorFirstName,
    DoctorLastName: episode.DoctorLastName,
    SurgeryType: episode.SurgeryType,
  }))
  
//console.log(newFindEpisodeInfoResultInfo)

  const newHttpMessageDto =new HttpMessageDto();
  this.addFormatHTTPStatus(newHttpMessageDto,ResponeTrakcareHTTPStatus.xstatusCode,ResponeTrakcareHTTPStatus.xmessage,ResponeTrakcareHTTPStatus.xerror)
  const newTransactionQueryEpisodeDto =new TransactionQueryEpisodeDto();
  // console.log( 
  //   RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
  //   RequesetBody.xIdType,RequesetBody.xServiceSettingCode,RequesetBody.xInsurerCode,
  //   RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)
  this.addFormatTransactionQuery(newTransactionQueryEpisodeDto, 
    RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xPassportnumber,
    RequesetBody.xIdType,RequesetBody.xServiceSettingCode,RequesetBody.xInsurerCode,
    RequesetBody.xHN,RequesetBody.xVN ,RequesetBody.xVisitDatefrom,RequesetBody.xVisitDateto)
    //console.log(newTransactionQueryEpisodeDto.RequesetBody.xHN)
  let newEligibleEpisodeDto= new EligibleEpisodeDto();
  newEligibleEpisodeDto={
    HTTPStatus:newHttpMessageDto,
    TransactionQuery:newTransactionQueryEpisodeDto,
    Result:{
      PatientInfo:newFindPatientInfoResultInfo,
      EpisodeInfo:newFindEpisodeInfoResultInfo
    }
  
  }
  
  return newEligibleEpisodeDto
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

  async checkeligible(checkEligibleBodyDto:CheckEligibleBodyDto){
   //let xResultInfo;
   
   let xResultInfo = new ResultInfo();
   let newHttpMessageDto =new HttpMessageDto();
   const newTransactionQuerycheckeligibleDto =new TransactionQuerycheckeligibleDto();
    try{
      //checkEligibleBodyDto.PatientInfo.VN ='VN123456'
      RequesetBody ={
        xRefID:checkEligibleBodyDto.PatientInfo.RefId||'',
        xTransactionNo:checkEligibleBodyDto.PatientInfo.TransactionNo||'',
        xPID : checkEligibleBodyDto.PatientInfo.PID||'',
        xPassportnumber : checkEligibleBodyDto.PatientInfo.PassportNumber||'',
        xIdType:checkEligibleBodyDto.PatientInfo.IdType||'',
        xServiceSettingCode:checkEligibleBodyDto.PatientInfo.ServiceSettingCode||'',
        xInsurerCode:checkEligibleBodyDto.PatientInfo.InsurerCode||null,
        xHN :checkEligibleBodyDto.PatientInfo.HN||'',
        xFirstName :checkEligibleBodyDto.PatientInfo.GivenNameTH||'',
        xLastName :checkEligibleBodyDto.PatientInfo.SurnameTH||'',
        xDob :checkEligibleBodyDto.PatientInfo.DateOfBirth||'',
        xVN: checkEligibleBodyDto.PatientInfo.VN||'',
        xPolicyTypeCode:checkEligibleBodyDto.PatientInfo.PolicyTypeCode||'',
        xIllnessTypeCode:checkEligibleBodyDto.PatientInfo.IllnessTypeCode||'',
        xSurgeryTypeCode:checkEligibleBodyDto.PatientInfo.SurgeryTypeCode||'',
        xVisitDateTime:checkEligibleBodyDto.PatientInfo.VisitDateTime||'',
        xAccidentDate:checkEligibleBodyDto.PatientInfo.AccidentDate||'',
      }
      

      const ObjAccessToken = await this.utilsService.requestAccessToken_AIA();
      const ObjAccessTokenKey = ObjAccessToken.accessTokenKey
      const apiURL= `${AIA_APIURL}/SmartClaim/checkEligible`;

      
      const xRefId= await this.generateRefId(RequesetBody.xVN,RequesetBody.xInsurerCode,RequesetBody.xServiceSettingCode)
     
      const xUsername=AIA_APIHopitalUsername;
      const xHospitalCode =await this.utilsService.EncryptAESECB(AIA_APIHospitalCode,AIA_APISecretkey);
      const xInsurerCode=RequesetBody.xInsurerCode;
      const xElectronicSignature='';
      const xDataJsonType =3;
      let xDataJson_IdType,DataJson_Id;
      if (RequesetBody.xPID===RequesetBody.xHN){
        DataJson_Id=RequesetBody.xPassportnumber;
        xDataJson_IdType ='PASSPORT';
      }else{
        DataJson_Id=RequesetBody.xPID;
        xDataJson_IdType ='NATIONAL_ID';
      }
      DataJson_Id ='0480000004185'
      const xDataJson_Id =await this.utilsService.EncryptAESECB(DataJson_Id,AIA_APISecretkey);
      const xPolicyType =RequesetBody.xPolicyTypeCode;
      const xServiceSetting =RequesetBody.xServiceSettingCode;
      const xIllnessType =RequesetBody.xIllnessTypeCode;
      const xSurgeryType =RequesetBody.xSurgeryTypeCode;
      let xFirstName =RequesetBody.xFirstName;
      if (xFirstName){ xFirstName =await this.utilsService.EncryptAESECB(xFirstName,AIA_APISecretkey);}
      let xLastName =RequesetBody.xLastName;
      if (xLastName){ xLastName =await this.utilsService.EncryptAESECB(xLastName,AIA_APISecretkey);}
      let xDob =RequesetBody.xDob;
      if (xDob){ xDob =await this.utilsService.EncryptAESECB(xDob,AIA_APISecretkey);}
      const xVisitDateTime =RequesetBody.xVisitDateTime||''; //'2024-09-01 00:00'
      const xAccidentDate=RequesetBody.xAccidentDate||'';
      // console.log('oooo')
      // console.log(xAccidentDate)
      // console.log(xAccidentDate.length)
      // console.log('-----')
/*
  console.log(apiURL)
  console.log(ObjAccessTokenKey)
  console.log('RefId: '+xRefId)
  console.log('Username: '+xUsername)
  console.log('HospitalCode: '+xHospitalCode)
  console.log('InsurerCode: '+xInsurerCode)
  console.log('ElectronicSignature: '+xElectronicSignature)
  console.log('DataJsonType: '+xDataJsonType)
  console.log('DataJson->IdType: '+xDataJson_IdType)
  console.log('DataJson->Id: '+xDataJson_Id)
  console.log('DataJson->PolicyType: '+xPolicyType)
  console.log('DataJson->ServiceSetting: '+xServiceSetting)
  console.log('DataJson->IllnessType: '+xIllnessType)
  console.log('DataJson->SurgeryType: '+xSurgeryType)
  console.log('DataJson->Patient->FirstName: '+xFirstName)
  console.log('DataJson->Patient->LastName: '+xLastName)
  console.log('DataJson->Patient->Dob: '+xDob)
  console.log('DataJson->Visit->VisitDateTime: '+xVisitDateTime)
  console.log('DataJson->Visit->AccidentDate: '+xAccidentDate)
*/
//console.log('DataJson->Visit->VisitDateTime: '+xVisitDateTime)
  const body_DataJson = {
    IdType: xDataJson_IdType, //IdType,
    Id:  xDataJson_Id, //Utils.EncryptAESECB(PID),
    PolicyType: xPolicyType,
    ServiceSetting: xServiceSetting,
    IllnessType: xIllnessType,
    SurgeryType: xSurgeryType,
    Patient: {
      FirstName:xFirstName,  
      LastName: xLastName, 
      Dob: xDob,
      },
      Visit: {
        VisitDateTime: xVisitDateTime ,
        AccidentDate:xAccidentDate||''
      }
    }
  console.log(body_DataJson)

  const body = {
    RefId: xRefId,
    Username: xUsername,
    HospitalCode: xHospitalCode,
    InsurerCode: xInsurerCode,
    ElectronicSignature: xElectronicSignature,
    DataJsonType: xDataJsonType,
    DataJson: body_DataJson
  };
//console.log(body)
  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': AIA_APISubscription,
    'Apim-Auth-Secure-Token': ObjAccessTokenKey
  };

  // call api aia foe check eligible
  const responsefromAIA = await lastValueFrom(
    this.httpService.post(apiURL, body, { headers })
  );
  console.log(responsefromAIA.data.Result)
  const responeInputcode =responsefromAIA.data.Result.Code
  if (responeInputcode !=='S'){
  
    this.addFormatHTTPStatus(newHttpMessageDto,400,responsefromAIA.data.Result.MessageTh,responsefromAIA.data.Result.MessageTh)
    this.addFormatTransactionQuerycheckeligibleDto(newTransactionQuerycheckeligibleDto,RequesetBody.xInsurerCod,RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xHN,
      RequesetBody.xFirstName,RequesetBody.xLastName,RequesetBody.xDob,RequesetBody.xPassportnumber,RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
      RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode
    )
  
  }else{
    let xInsuranceResult= new InsuranceResult();
    xInsuranceResult ={
     Code:responsefromAIA.data.Result.Code ||'',
     Message:responsefromAIA.data.Result.Message ||'',
     MessageTh:responsefromAIA.data.Result.MessageTh ||'',
    }
    let xCoverageList= new CoverageList();
    xCoverageList = responsefromAIA.data.Data.CoverageList.map((item) => {
      return {
        Type: item.Type,  
        Status:item.Status,
        MessageList:item.MessageList
      };
    });
    let xInsuranceData = new InsuranceData();
    xInsuranceData={
     RefId:responsefromAIA.data.Data.RefId ||'',
     TransactionNo:responsefromAIA.data.Data.TransactionNo ||'',
     InsurerCode:responsefromAIA.data.Data.InsurerCode ||'',
     CoverageClaimStatus:responsefromAIA.data.Data.CoverageClaimStatus ||'',
     RemarkList:[],
     PolicyCoverageDesc:[],
     CoverageList:xCoverageList,
     PolicyInfoList:responsefromAIA.data.Data.PolicyInfoList ||'',
    }
    console.log('xCoverageList')
    console.log(xCoverageList)
    console.log(xInsuranceData)
    console.log(responsefromAIA.data.Data.TransactionNo)
    const newCreateTransectionDto =new CreateTransectionDto();
     const resultcreateTransection = await this.createTransection(newCreateTransectionDto,xRefId,xInsuranceData.TransactionNo,null,RequesetBody.xHN,RequesetBody.xVN,RequesetBody.xInsurerCode,RequesetBody.xAccidentDate)
     console.log(resultcreateTransection)
     let xinsuranceCustomerDetail = new InsuranceCustomerDetail();
     xinsuranceCustomerDetail={
       PolicyNo:responsefromAIA.data.CustomerDetail.PolicyNo ||'',
       MemberShipId:responsefromAIA.data.CustomerDetail.MemberShipId ||'',
       FirstName:responsefromAIA.data.CustomerDetail.FirstName ||'',
       LastName:responsefromAIA.data.CustomerDetail.LastName ||'',
       NationalId:responsefromAIA.data.CustomerDetail.NationalId ||''
   
     }
     xResultInfo ={
       InsuranceResult: xInsuranceResult,
       InsuranceData: xInsuranceData,
       InsuranceCustomerDetail :  xinsuranceCustomerDetail
     }
  this.addFormatHTTPStatus(newHttpMessageDto,200,'','')
  this.addFormatTransactionQuerycheckeligibleDto(newTransactionQuerycheckeligibleDto,RequesetBody.xInsurerCod,RequesetBody.xRefID,RequesetBody.xTransactionNo,RequesetBody.xPID,RequesetBody.xHN,
    RequesetBody.xFirstName,RequesetBody.xLastName,RequesetBody.xDob,RequesetBody.xPassportnumber,RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime,RequesetBody.xAccidentDate,RequesetBody.xPolicyTypeCode,RequesetBody.xServiceSettingCode,
    RequesetBody.xIllnessTypeCode,RequesetBody.xSurgeryTypeCode
  )
  } 

  let newCheckEligibleDto= new CheckEligibleDto();
  newCheckEligibleDto={
    HTTPStatus:newHttpMessageDto,
    TransactionQuery:newTransactionQuerycheckeligibleDto,
    Result:xResultInfo
  }
  return newCheckEligibleDto
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



 addFormatTransactionQuery(data: TransactionQueryEpisodeDto,
  inputRefID:string,inputTransactionNo:string,inputPID:string,inputPassport:string
  ,inputIdType:string,inputServiceSettingCode :string ,inputInsurerCode:number
  ,inputHN:string,inputVN:string,inputVisitDatefrom:string,inputVisitDateto:string):void{
  if(data){
    data.RefID = inputRefID||''
    data.TransactionNo = inputTransactionNo||''
    data.PID = inputPID||''
    data.PassportNumber = inputPassport ||''
    data.IdType = inputIdType||''
    data.ServiceSettingCode = inputServiceSettingCode||''
    data.InsurerCode = inputInsurerCode||null
    data.HN= inputHN||''
    data.VN = inputVN||''
    data.VisitDatefrom = inputVisitDatefrom||null
    data.VisitDateto = inputVisitDateto||null
   
  }
 }
 addFormatTransactionQuerycheckeligibleDto(data: TransactionQuerycheckeligibleDto,
  inputInsurerCode:number,inputRefID:string,inputTransactionNo:string,inputPID:string
  ,inputHN:string,inputGivenNameTH :string ,inputSurnameTH:string,inputDateOfBirth:string
  ,inputPassportNumber:string,inputIdType:string,inputVN:string,inputVisitDateTime:string
  ,inputAccidentDate:string,inputPolicyTypeCode:string,inputServiceSettingCode:string
  ,inputIllnessTypeCode:string,inputSurgeryTypeCodestring:string):void{
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
async generateRefId(inputVN:string,inputInsurerCode:number,inputServiceSettingCode:string){
  console.log(inputVN+'---'+inputInsurerCode+'---'+inputServiceSettingCode)
  let count , xRefId
if ((inputVN)&&(inputInsurerCode)&&(inputServiceSettingCode)){
  count = await prismaProgest.transactions.count({
    where: {
      vn: inputVN ,
      insurerid: +inputInsurerCode
    }
  });
  if (count===0){ 
      count =1
      xRefId =inputVN+'-'+inputInsurerCode+'-'+inputServiceSettingCode+'-'+count.toString().padStart(3, '0');
  }else{
    const xxRefId = await prismaProgest.transactions.findFirst({
      where: {
        vn: inputVN ,
        insurerid: +inputInsurerCode
      },
      select:{
        refid :true
      }
    });
     xRefId =xxRefId.refid
  }
}else{  xRefId='' }
return xRefId
}
async createTransection(data:CreateTransectionDto,inputrefid:string,inputtransactionid:string,inputstatusid:number,
  inputhn:string,inputvn:string,inputinsurerid:number,inputaccidentdate:string){
let statusCreate,countVN
 let newCreateTransectionDto =new CreateTransectionDto();
 newCreateTransectionDto ={
    
    refid:inputrefid,
    transactionid:inputtransactionid||'',
    statusid:inputstatusid||null,
    hn:inputhn,
    vn:inputvn,
    insurerid:inputinsurerid,
    accidentdate:inputaccidentdate||''
  }
  console.log('newCreateTransectionDto')
  console.log(newCreateTransectionDto)
if (inputvn) {
  countVN = await prismaProgest.transactions.count({
    where: {
      vn: inputvn ,
      insurerid: +inputinsurerid
    }
  });
  if(countVN ===0){
    console.log('VN = 0')
    if(newCreateTransectionDto){
      await prismaProgest.transactions.create({  data: newCreateTransectionDto })
      statusCreate='done'
    }
  }else{
    console.log('VN > 0')
    await prismaProgest.transactions.updateMany({
      where: {
        vn: inputvn ,
        insurerid: +inputinsurerid
      },
      data: {
        transactionid: inputtransactionid // ข้อมูลที่ต้องการอัปเดต
                        
      }
    });
statusCreate='done'
  }
}


  //console.log(result)
return statusCreate
}
}
