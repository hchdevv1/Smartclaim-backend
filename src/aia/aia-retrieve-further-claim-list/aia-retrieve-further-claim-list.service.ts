import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
//import { prismaProgest } from '../../database/database';
//import { Prisma } from '../../../prisma/generate-client-db';
//import { lastValueFrom } from 'rxjs'
/* ////// utils //////  */
//import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
//import { TransactionQueryEpisodeDto , TransactionQuerycheckeligibleDto} from '../../utils/dto/transaction-query.dto';
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
//import { HttpStatusMessageService } from '../../utils/http-status-message.service';
import { UtilsService } from '../../utils/utils.service';
/* ////// DTO //////  */
import { QueryRetrieveFurtherClaimdtoBodyDto } from  './dto/aia-retrieve-further-claim-list.dto';


//const httpStatusMessageService = new HttpStatusMessageService();
/*const AIA_APIURL= process.env.AIA_APIURL;
const AIA_APISecretkey = process.env.AIA_APISecretkey;
const AIA_APIHospitalCode =process.env.AIA_APIHospitalCode;
const AIA_APIHopitalUsername=process.env.AIA_APIHopitalUsername;
const AIA_APISubscription =process.env.AIA_APISubscription;*/
@Injectable()
export class AiaRetrieveFurtherClaimListService {
  constructor(
    private readonly httpService: HttpService,
   // private readonly trakcarePatientInfoService: TrakcarePatientInfoService, // Inject here
    private readonly utilsService:UtilsService
  ) {}

  async RetrieveFurtherClaim(queryRetrieveFurtherClaimdtoBodyDto:QueryRetrieveFurtherClaimdtoBodyDto){

    try{
    const  RequesetBody ={
         xRefId:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.RefId||'',
         xTransactionNo:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.TransactionNo||'',
         xPID : queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.PID||'',
         xPassportnumber : queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.PassportNumber||'',
         xIdType:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.IdType||'',
         xInsurerCode:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.InsurerCode||null,
         xHN :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.HN||'',
         xFirstName :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.GivenNameTH||'',
         xLastName :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.SurnameTH||'',
         xDob :queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.DateOfBirth||'',
         xVN: queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.VN||'',
         xAccidentDate:queryRetrieveFurtherClaimdtoBodyDto.PatientInfo.AccidentDate||'', 

       }

      const data ={
        
          "HTTPStatus": {
              "statusCode": 200,
              "message": "success",
              "error": ""
          },
          "TransactionQuery": {
              "RefID": "",
              "TransactionNo": "",
              "PID": "3000000580044",
              "PassportNumber": "",
              "IdType": "HOSPITAL_ID",
              "ServiceSettingCode": "O",
              "InsurerCode": null,
              "HN": "60-019341",
              "VN": "",
              "VisitDatefrom": "2024-03-06",
              "VisitDateto": null
          },
       
          "Result": {
        "RefId": "oljhnklefhbilubsEFJKLb651",
        "TransactionNo": "eb2b430c-6df0-45b8-af3c-c67da6d32408",
        "InsurerCode": "13",
        "FurtherClaimList": [
            {
                "FurtherClaimId": "b1637e7c392c1e5e59386091b190073f",
                "ClaimNo": "C500058509",
                "OccurrenceNo": "1",
                "Icd10": "W10.99",
                "DxName": "ตกบันได",
                "DscDateTime": "2024-09-04T00:00:00.000+00:00",
                "VisitDateTime": "2024-09-04T00:00:00.000+00:00",
                "AccidentDate": "2024-09-04T00:00:00.000+00:00"
            },
            {
                "FurtherClaimId": "7abf61948cd393f51c74e6534579e137",
                "ClaimNo": "C500058441",
                "OccurrenceNo": "1",
                "Icd10": "X51.0",
                "DxName": "Travel and motion: at home",
                "DscDateTime": "2024-08-30T00:00:00.000+00:00",
                "VisitDateTime": "2024-08-30T00:00:00.000+00:00",
                "AccidentDate": "2024-08-30T00:00:00.000+00:00"
            },
            {
                "FurtherClaimId": "f8e24f993bc7e5cd133db52e2302e804",
                "ClaimNo": "C500057784",
                "OccurrenceNo": "1",
                "Icd10": "W12.99",
                "DxName": "Fall on and from scaffolding: at unspec place: during unspec activity",
                "DscDateTime": "2024-08-21T00:00:00.000+00:00",
                "VisitDateTime": "2024-08-21T00:00:00.000+00:00",
                "AccidentDate": "2024-08-21T00:00:00.000+00:00"
            },
            {
                "FurtherClaimId": "f3b82154155265c869b8876ba6b1c044",
                "ClaimNo": "C500058009",
                "OccurrenceNo": "1",
                "Icd10": "W10.99",
                "DxName": "ตกบันได",
                "DscDateTime": "2024-08-01T00:00:00.000+00:00",
                "VisitDateTime": "2024-08-01T00:00:00.000+00:00",
                "AccidentDate": "2024-08-01T00:00:00.000+00:00"
            },
            {
                "FurtherClaimId": "25992ebdc7a0f28cc39bc30ad7fc4480",
                "ClaimNo": "C000088368",
                "OccurrenceNo": "1",
                "Icd10": "W01.99",
                "DxName": "หกล้มจากพื้นต่างระดับ เท้าพลิก ตกหลุม ตกบ่อ ตกท่อ ",
                "DscDateTime": "2024-02-09T00:00:00.000+00:00",
                "VisitDateTime": "2024-02-09T00:00:00.000+00:00",
                "AccidentDate": "2024-01-09T00:00:00.000+00:00"
            }
        ]
    }
        
      
       }



       console.log(RequesetBody)
       return data
      }catch(error)
      {
        console.log(error)
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