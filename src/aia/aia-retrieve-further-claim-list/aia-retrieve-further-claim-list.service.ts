import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//import { prismaProgest } from '../../database/database';
//import { Prisma } from '../../../prisma/generate-client-db';
import { catchError, map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { plainToClass } from 'class-transformer';

/* ////// utils //////  */
//import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionQueryetrieveFurtherClaimdDto } from '../../utils/dto/transaction-query.dto';
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
//import { HttpStatusMessageService } from '../../utils/http-status-message.service';
import { UtilsService } from '../../utils/utils.service';
/* ////// DTO //////  */
import { QueryRetrieveFurtherClaimdtoBodyDto ,ResultRetrieveFurtherClaimDto ,RetrieveFurtherClaimdInfoDto} from  './dto/aia-retrieve-further-claim-list.dto';

const newHttpMessageDto =new HttpMessageDto();
const AIA_APIURL= process.env.AIA_APIURL;
const AIA_APISecretkey = process.env.AIA_APISecretkey;
const AIA_APIHospitalCode =process.env.AIA_APIHospitalCode;
const AIA_APIHopitalUsername=process.env.AIA_APIHopitalUsername;
const AIA_APISubscription =process.env.AIA_APISubscription;

@Injectable()
export class AiaRetrieveFurtherClaimListService {
  constructor(
    private readonly httpService: HttpService,
   // private readonly trakcarePatientInfoService: TrakcarePatientInfoService, // Inject here
    private readonly utilsService:UtilsService
  ) {}

  async RetrieveFurtherClaim(queryRetrieveFurtherClaimdtoBodyDto:QueryRetrieveFurtherClaimdtoBodyDto){
    let ResultRetrieveFurtherClaim;
    const newTransactionQueryetrieveFurtherClaimdDto =new TransactionQueryetrieveFurtherClaimdDto();

    try{
    const  RequesetBody ={
        // xRefId:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.RefId||'',
        // xTransactionNo:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.TransactionNo||'',

         xRefId:'oljhnklefhbilubsEFJKLb651',
         xTransactionNo:'eb2b430c-6df0-45b8-af3c-c67da6d32408',
         xPID : queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.PID||'',
         xPassportnumber : queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.PassportNumber||'',
         xIdType:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.IdType||'',
         xInsurerCode:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.InsurerCode||null,
         xHN :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.HN||'',
         xFirstName :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.GivenNameTH||'',
         xLastName :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.SurnameTH||'',
         xDob :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.DateOfBirth||'',
         xVN: queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.VN||'',
         xVisitDateTime: queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.VisitDateTime||'',
         xAccidentDate:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.AccidentDate||'', 
       }
       const ObjAccessToken = await this.utilsService.requestAccessToken_AIA();
       const ObjAccessTokenKey = ObjAccessToken.accessTokenKey
       const apiURL= `${AIA_APIURL}/SmartClaim/retrieveFurtherClaimList`;
       const xUsername=AIA_APIHopitalUsername;
       const xHospitalCode =await this.utilsService.EncryptAESECB(AIA_APIHospitalCode,AIA_APISecretkey);
       const xInsurerCode=RequesetBody.xInsurerCode;
       const xElectronicSignature='';
       const xDataJsonType =3;

       const body_DataJson = {}
       const body = {
         RefId: RequesetBody.xRefId,
         TransactionNo: RequesetBody.xTransactionNo,
         Username: xUsername,
         HospitalCode: xHospitalCode,
         InsurerCode: xInsurerCode,
         ElectronicSignature: xElectronicSignature,
         DataJsonType: xDataJsonType,
         DataJson: body_DataJson
       };
       const headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': AIA_APISubscription,
        'Apim-Auth-Secure-Token': ObjAccessTokenKey
      };
      const responsefromAIA = await lastValueFrom(
        this.httpService
          .post(apiURL, body, { headers })
          .pipe(
            map((response) => response.data), // Return only the data part of the response
            catchError((error) => {
              console.error('Error from AIA API:', error.response?.data || error.message);
              throw new Error('Failed to call AIA API');
            })
          )
      );
/*
inputInsurerCode:number,inputRefId:string,inputTransactionNo:string
  ,inputPID:string,inputHN:string,inputGivenNameTH:string,
  inputSurnameTH:string,inputDateOfBirth:string,inputPassportNumber:string,
  inputIdType:string,inputVN :string,inputVisitDateTime:string,
  inputAccidentDate:string
*/
   if (responsefromAIA.Result.Code !=='S'){
    this.addFormatHTTPStatus(newHttpMessageDto,400,responsefromAIA.data.Result.MessageTh,responsefromAIA.data.Result.MessageTh)
   }else{
    this.addFormatHTTPStatus(newHttpMessageDto,200,'','')
    this.addFormatTransactionQueryetrieveFurtherClaimdDto(newTransactionQueryetrieveFurtherClaimdDto,
    RequesetBody.xInsurerCode, RequesetBody.xRefId,RequesetBody.xTransactionNo
      ,RequesetBody.xPID,RequesetBody.xHN,RequesetBody.xFirstName
      ,RequesetBody.xLastName,RequesetBody.xDob,RequesetBody.xPassportnumber
      ,RequesetBody.xIdType,RequesetBody.xVN,RequesetBody.xVisitDateTime
      ,RequesetBody.xAccidentDate
    )
     ResultRetrieveFurtherClaim = plainToClass(ResultRetrieveFurtherClaimDto, responsefromAIA.Data);
      
   }
   //
   let newRetrieveFurtherClaimdInfoDto= new RetrieveFurtherClaimdInfoDto();
   newRetrieveFurtherClaimdInfoDto={
         HTTPStatus:newHttpMessageDto,
          TransactionQuery:newTransactionQueryetrieveFurtherClaimdDto,
          Result:ResultRetrieveFurtherClaim
 }
     
       return newRetrieveFurtherClaimdInfoDto
      }catch(error)
      {
        console.log(error)
      }
 
 
}

addFormatTransactionQueryetrieveFurtherClaimdDto(data: TransactionQueryetrieveFurtherClaimdDto,
  inputInsurerCode:number,inputRefId:string,inputTransactionNo:string
  ,inputPID:string,inputHN:string,inputGivenNameTH:string,
  inputSurnameTH:string,inputDateOfBirth:string,inputPassportNumber:string,
  inputIdType:string,inputVN :string,inputVisitDateTime:string,
  inputAccidentDate:string
):void{

  if(data){
      data.InsurerCode = inputInsurerCode||null
      data.RefId = inputRefId||''
      data.TransactionNo = inputTransactionNo||''
      data.PID = inputPID||''
      data.HN= inputHN||''
      data.GivenNameTH= inputGivenNameTH||''
      data.SurnameTH= inputSurnameTH||'' 
      data.DateOfBirth = inputDateOfBirth||''
      data.PassportNumber = inputPassportNumber ||''
      data.IdType = inputIdType||''
      data.VN = inputVN||''
      data.VisitDateTime = inputVisitDateTime||''
      data.AccidentDate = inputAccidentDate||''
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