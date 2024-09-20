/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { prismaProgest } from '../database/database';
import { Prisma } from '../../prisma/generate-client-db';
import { HttpStatusMessageService } from './http-status-message.service';
import { aia_accessTokenDTO } from './dto/aia-accessToken.dto';


const aesEcb = require('aes-ecb');
const AIA_APIURL= process.env.AIA_APIURL;
const API_CONTENTTYPE= process.env.API_CONTENTTYPE;
const AIA_APISubscription = process.env.AIA_APISubscription
const AIA_APIMUserId = process.env.AIA_APIMUserId
const AIA_APIMAppId = [process.env.AIA_APIMAppId]
/*
const AIA_APISecretkey = process.env.AIA_APISecretkey
*/
const httpStatusMessageService = new HttpStatusMessageService();

@Injectable()
export class UtilsService {
  constructor(private readonly  httpService: HttpService) {}

  async requestAccessToken_AIA(){
    const aiaAccessTokenDTO = new aia_accessTokenDTO();
    const apiURL= `${AIA_APIURL}/TokenManager/requestAccessToken`;
    try{
      const response = await firstValueFrom(
        this.httpService.post(
          apiURL,
          { userId: AIA_APIMUserId, appId: AIA_APIMAppId },
          {
            headers: {
              'Content-Type': API_CONTENTTYPE,
              'Ocp-Apim-Subscription-Key': AIA_APISubscription,
            },
          },
        ),
      );
      aiaAccessTokenDTO.tokenStatus = response.data.statusCode;
      aiaAccessTokenDTO.accessTokenKey = response.data.accessTokenInfo.accessToken;
      aiaAccessTokenDTO.tokenType = response.data.accessTokenInfo.tokenType
      aiaAccessTokenDTO.expireIn = response.data.accessTokenInfo.expireIn;
      aiaAccessTokenDTO.tokenIssueTime =response.data.accessTokenInfo.tokenIssueTime
      //console.log(aiaAccessTokenDTO)
        if (!aiaAccessTokenDTO || aiaAccessTokenDTO.accessTokenKey.length === 0) {
          throw new HttpException('AIA AccessToken not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return aiaAccessTokenDTO  
  }

  EncryptAESECB(text:string , APISecretkey:string){
    //const APISecretkey = AIA_APISecretkey;
   const encryptText = aesEcb.encrypt(APISecretkey,text)
   return  encryptText;
  }

  // var decrypt = aesEcb.decrypt(keyString, input);

  DecryptAESECB(text:string , APISecretkey:string){
   const decryptText = aesEcb.decrypt(APISecretkey,text)
   return  decryptText;
  }

  async IllnessType(xInsurercode: string ) {
    let illnessType:any ;
    try{
       illnessType = await prismaProgest.illnessType.findMany({ 
       
      where:{
        insurers:{  insurercode : +xInsurercode }
       },  
      select:{
        IllnessTypeCode :true,
        IllnessTypeDesc:true,
        insurerid:true,
        insurers:{
          select:{
              insurercode:true,
              insurername:true
          }
        }

      },
       })   
        if (!illnessType || illnessType.length === 0) {
          throw new HttpException('IllnessType not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return illnessType  
  }

  async IllnessSurgery( xInsurercode: string ) {
    let illnessSurgery:any ;
    try{
      illnessSurgery = await prismaProgest.illnessSurgery.findMany({ 
       
      where:{
        insurers:{  insurercode : +xInsurercode }
       },  
      select:{
        ISCode :true,
        ISDescription:true,
        insurerid:true,
        insurers:{
          select:{
              insurercode:true,
              insurername:true
          }
        }

      },
       })   
        if (!illnessSurgery || illnessSurgery.length === 0) {
          throw new HttpException('IllnessSurgery not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return illnessSurgery  
  }


  async policyType( xInsurercode: string ) {
    let policyType:any ;
    try{
      policyType = await prismaProgest.policyType.findMany({ 
       
      where:{
        insurers:{  insurercode : +xInsurercode }
       },  
      select:{
        PolicyTypeCode :true,
        PolicyTypeDesc:true,
        insurerid:true,
        insurers:{
          select:{
              insurercode:true,
              insurername:true
          }
        }

      },
       })   
        if (!policyType || policyType.length === 0) {
          throw new HttpException('IllnessSurgery not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return policyType  
  }

  async getServiceSetting( xInsurercode: string ) {
    let policyType:any ;
    try{
      policyType = await prismaProgest.serviceSetting.findMany({ 
       
      where:{
        insurers:{  insurercode : +xInsurercode }
       },  
      select:{
        ServiceSettingCode :true,
        ServiceSettingDesc:true,
        insurerid:true,
        insurers:{
          select:{
              insurercode:true,
              insurername:true
          }
        }

      },
       })   
        if (!policyType || policyType.length === 0) {
          throw new HttpException('IllnessSurgery not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return policyType  
  }

  async getClaimStatus( xInsurercode: string ) {
    let policyType:any ;
    try{
      policyType = await prismaProgest.claimStatus.findMany({ 
       
      where:{
        insurers:{  insurercode : +xInsurercode }
       },  
      select:{
        StatusCode :true,
        StatusDescTH:true,
        StatusDescEN:true,
        insurerid:true,
        insurers:{
          select:{
              insurercode:true,
              insurername:true
          }
        }

      },
       })   
        if (!policyType || policyType.length === 0) {
          throw new HttpException('IllnessSurgery not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return policyType  
  }

  async getAccidentPlace( xInsurercode: string ) {
    let accidentPlace:any ;
    try{
      accidentPlace = await prismaProgest.accidentplace.findMany({ 
       
      where:{
        insurerid: +xInsurercode 
       },  
      select:{
        accidentplacecode :true,
        accidentplacename:true
      

      },
       })   
        if (!accidentPlace || accidentPlace.length === 0) {
          throw new HttpException('AccidentPlace not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return accidentPlace  
  }
  async getCauseofInjurywoundtype( xInsurercode: string ) {
    let causeofInjuryWoundtype:any ;
    try{
      causeofInjuryWoundtype = await prismaProgest.causeofinjurywoundtype.findMany({ 
       
      where:{
        insurerid: +xInsurercode 
       },  
      select:{
        woundtypecode :true,
        woundtypename:true
      

      },
       })   
        if (!causeofInjuryWoundtype || causeofInjuryWoundtype.length === 0) {
          throw new HttpException('InjuryWoundtype not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return causeofInjuryWoundtype  
  }
  async getCauseofInjurySide( xInsurercode: string ) {
    let causeofInjurySide:any ;
    try{
      causeofInjurySide = await prismaProgest.causeofinjuryside.findMany({ 
       
      where:{
        insurerid: +xInsurercode 
       },  
      select:{
        injurysidecode :true,
        injurysidename:true
      

      },
       })   
        if (!causeofInjurySide || causeofInjurySide.length === 0) {
          throw new HttpException('InjurySide not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return causeofInjurySide  
  }

  async getDiagnosisTypeMapping( xInsurercode: string,xDxtypecodeTrakcare: string ) {
    let diagnosisTypeMapping:any ;
    try{
      diagnosisTypeMapping = await prismaProgest.diagnosisTypeMapping.findFirst({ 
       
      where:{
        insurerid: +xInsurercode ,
        dxtypecodetrakcare:xDxtypecodeTrakcare
       },  
      select:{
        dxtypecodetrakcare :true,
        dxtypenametrakcare:true,
        dxtypecodeinsurance :true,
        dxtypenameinsurance:true

      },
       })   
        if (!diagnosisTypeMapping || diagnosisTypeMapping.length === 0) {
          throw new HttpException('DiagnosisType not found', HttpStatus.NOT_FOUND);
        }
    } catch(error)
      {
         if (error instanceof Prisma.PrismaClientInitializationError) {
            throw new HttpException(
             {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: httpStatusMessageService.getHttpStatusMessage( (HttpStatus.INTERNAL_SERVER_ERROR))
              },HttpStatus.INTERNAL_SERVER_ERROR );
          }else { 
             if (error instanceof HttpException) {
          // กรณีที่ error เป็น HttpException จะถูกโยนขึ้นไปยัง controller
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessage((HttpStatus.INTERNAL_SERVER_ERROR))
           },HttpStatus.INTERNAL_SERVER_ERROR );
          }
      }
   return diagnosisTypeMapping  
  }
  
// setDTOHTS(){

//   let newaiaaccessTokenDTO = new aia_accessTokenDTO();
//   /*
//     accessTokenKey: string;
//     tokenStatus: string;
//     tokenType: string;
//     expireIn: number;
//     tokenIssueTime: string;
//   */


//     newaiaaccessTokenDTO={ 
//       accessTokenKey:'ttt',
//       tokenStatus:'hhh',
//       tokenType:'nnnn',
//       expireIn:555,
//       tokenIssueTime:'1234'
//     }
//     let HTTPStatus = new HttpMessageDto();

//     HTTPStatus ={
//       statusCode:999,
//       message:'',
//       error:'',
      
//     }

// const yyy ={
//   FFF:newaiaaccessTokenDTO,
//   HTTPStatus
// }


//     return yyy
// }
}
