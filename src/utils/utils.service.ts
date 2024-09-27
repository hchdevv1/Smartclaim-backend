/* eslint-disable @typescript-eslint/no-require-imports */
import { Injectable , NotFoundException, HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { readFileSync } from 'fs';
import { join } from 'path';

import { prismaProgest } from '../database/database';
import { Prisma } from '../../prisma/generate-client-db';
import { HttpStatusMessageService } from './http-status-message.service';
import { aia_accessTokenDTO } from './dto/aia-accessToken.dto';
//import { CreateClaimDocumentDto } from './dto/claim-documents.dto';
import { QueryCreateClaimDocumentDtoBodyDto ,ResultAttachDocListInfoDto}from './dto/claim-documents.dto';


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
  
  async getDocumentType( xInsurercode: string) {
    let documentType:any ;
    try{
      documentType = await prismaProgest.documentType.findMany({ 
       
      where:{
        insurerid: +xInsurercode 
       },  
      select:{
        documenttypecode :true,
        documenttypename:true
      },
       })   
        if (!documentType || documentType.length === 0) {
          throw new HttpException('DocumentType not found', HttpStatus.NOT_FOUND);
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
   return documentType  
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


async saveFile(file: Express.Multer.File ,body: QueryCreateClaimDocumentDtoBodyDto) {
  console.log('22222')
  console.log(file)
  console.log('3333333')
  const fileRecord = await prismaProgest.claimDocuments.create({
    data: {
      hn: body.HN, // ปรับข้อมูลตามที่ต้องการ
      vn: body.VN,
      refid: body.RefId,
      transactionno: body.TransactionNo,
      documenttypecode: body.DocumenttypeCode,
      documenttypename: 'example-doc-type-name',
      documentname: body.VN+'-'+body.DocumenttypeCode+'-'+Math.round(Math.random() * 186).toString(3)+'.'+file.mimetype.split('/')[1],
      filesize: file.size,
      filemimetype: file.mimetype,
      serverpath: 'path-to-server', 
      filepath: `./uploads/pdf/${file.filename}`, // เส้นทางที่เก็บไฟล์
      uploaddate: new Date(),
      uploadedby: body.UploadedBy
    },
  });
  console.log('XXXXXX')
console.log(fileRecord)
  return fileRecord; // ส่งคืนข้อมูลที่บันทึกไว้
}

  // ฟังก์ชันดึงไฟล์เป็น Base64
  async getFileAsBase64(id: number) {
    const fileRecord = await prismaProgest.claimDocuments.findFirst({
      where: { id },
    });

    if (!fileRecord) {
      throw new NotFoundException('File not found');
    }
console.log('kkkkk')
console.log(fileRecord)
const filePath = join(__dirname, '..', '..', fileRecord.filepath);
    const fileBuffer = readFileSync(filePath);
    const base64File = fileBuffer.toString('base64');

    return {
      filename: fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
      base64: base64File, // ข้อมูลไฟล์เป็น Base64
    };
  
}

async getFilesAsBase64findMany(ids: string) {
  console.log(ids)
  const fileRecords = await prismaProgest.claimDocuments.findMany({
    where: {
     // id: { in: ids }, // ดึงไฟล์ตามอาเรย์ของ ID
      hn: ids
    },
  });

  if (fileRecords.length === 0) {
    throw new NotFoundException('Files not found');
  }

  const filesAsBase64 = await Promise.all(
    fileRecords.map(async (fileRecord) => {
      const filePath = join(__dirname, '..', '..', fileRecord.filepath);
      const fileBuffer = readFileSync(filePath);
      const base64File = fileBuffer.toString('base64');
      return {
        filename: fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
        base64: base64File, // ข้อมูลไฟล์เป็น Base64
      };
    }),
  );

  return filesAsBase64;
}
async getlistDocumentName(queryCreateClaimDocumentDtoBodyDto: QueryCreateClaimDocumentDtoBodyDto) {
  
  const HN =queryCreateClaimDocumentDtoBodyDto.HN;
  const VN = queryCreateClaimDocumentDtoBodyDto.VN;
  const RefId = queryCreateClaimDocumentDtoBodyDto.RefId;
  const TransactionNo = queryCreateClaimDocumentDtoBodyDto.TransactionNo;
  const fileRecords = await prismaProgest.claimDocuments.findMany({
    where: {
      hn: HN,
      refid:RefId,
      transactionno:TransactionNo,
      vn:VN
    },
  });
  const filesAsBase64 = await Promise.all(
    fileRecords.map(async (fileRecord) => {
      const filePath = join(__dirname, '..', '..', fileRecord.filepath);
      const fileBuffer = readFileSync(filePath);
      const base64File = fileBuffer.toString('base64');
      return {
        
        filename: fileRecord.documentname //fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
        //base64: base64File, // ข้อมูลไฟล์เป็น Base64
      };
    }),
  );
 // console.log(filename)
return filesAsBase64
}
//getDocumentByDocname
async getDocumentByDocname(queryCreateClaimDocumentDtoBodyDto: QueryCreateClaimDocumentDtoBodyDto) {
  
  const HN =queryCreateClaimDocumentDtoBodyDto.HN;
  const VN = queryCreateClaimDocumentDtoBodyDto.VN;
  const RefId = queryCreateClaimDocumentDtoBodyDto.RefId;
  const TransactionNo = queryCreateClaimDocumentDtoBodyDto.TransactionNo;
  const DocumentName = queryCreateClaimDocumentDtoBodyDto.DocumentName;
  const DocumenttypeCode = queryCreateClaimDocumentDtoBodyDto.DocumenttypeCode||'';
 
  //   filepath: './uploads/pdf/1727412324104-129258465.pdf',
 const fileRecord = await prismaProgest.claimDocuments.findFirst({
       where: {
     vn:VN,
     documentname: DocumentName //queryCreateClaimDocumentDtoBodyDto.DocumentName
    }
    });

    if (!fileRecord) {
      throw new NotFoundException('File not found');
    }
console.log(fileRecord)
    const filePath = join(__dirname, '..', '..', fileRecord.filepath);
    const fileBuffer = readFileSync(filePath);
    const base64File = fileBuffer.toString('base64');
    console.log('-------')
console.log(filePath)
console.log('-------')
    return {
      filename: fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
      base64: base64File, // ข้อมูลไฟล์เป็น Base64
    };
  }
async getListDocumentByRefId(queryCreateClaimDocumentDtoBodyDto: QueryCreateClaimDocumentDtoBodyDto) {
  
    // const HN =queryCreateClaimDocumentDtoBodyDto.HN;
     const VN = queryCreateClaimDocumentDtoBodyDto.VN;
     const RefId = queryCreateClaimDocumentDtoBodyDto.RefId;
     const TransactionNo = queryCreateClaimDocumentDtoBodyDto.TransactionNo;
     //const DocumentName = queryCreateClaimDocumentDtoBodyDto.DocumentName;
     //const DocumenttypeCode = queryCreateClaimDocumentDtoBodyDto.DocumenttypeCode||'';
       const fileRecords = await prismaProgest.claimDocuments.findMany({
        where: {
           vn:VN,
           refid:RefId,
           transactionno:TransactionNo
       }
       });
       if (fileRecords.length === 0) {
         throw new NotFoundException('Files not found');
       }
       let newResultAttachDocListInfoDto: ResultAttachDocListInfoDto[] = [];
      
       const filesAsBase64 = await Promise.all(
         fileRecords.map(async (fileRecord) => {
           const filePath = join(__dirname, '..', '..', fileRecord.filepath);
           const fileBuffer = readFileSync(filePath);
           const base64File = fileBuffer.toString('base64');
          
           newResultAttachDocListInfoDto = [
             {
               DocName: fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
               Base64Data: base64File, // ข้อมูลไฟล์เป็น Base64
             
           }
           ];
         }),
       );
       
      
       return newResultAttachDocListInfoDto;
     }

async getListDocumentByRefId2(inputVN:string ,inputRefId:string,inputTransectionNo:string) {
  
       const AIA_APISecretkey = process.env.AIA_APISecretkey;
       const VN = inputVN;
       const RefId = inputRefId;
       const TransactionNo = inputTransectionNo;
       //const DocumentName = queryCreateClaimDocumentDtoBodyDto.DocumentName;
       //const DocumenttypeCode = queryCreateClaimDocumentDtoBodyDto.DocumenttypeCode||'';
         const fileRecords = await prismaProgest.claimDocuments.findMany({
          where: {
             vn:VN,
             refid:RefId,
             transactionno:TransactionNo
         }
         });
         if (fileRecords.length === 0) {
           throw new NotFoundException('Files not found');
         }
         let newResultAttachDocListInfoDto: ResultAttachDocListInfoDto[] = [];
        
         const filesAsBase64 = await Promise.all(
           fileRecords.map(async (fileRecord) => {
             const filePath = join(__dirname, '..', '..', fileRecord.filepath);
             const fileBuffer = readFileSync(filePath);
             const base64File = fileBuffer.toString('base64');
            
             newResultAttachDocListInfoDto = [
               {
                 DocName: fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
                 Base64Data: await this.EncryptAESECB( base64File,AIA_APISecretkey) , // ข้อมูลไฟล์เป็น Base64
                  
             }
             ];
           }),
         );
         
        
         return newResultAttachDocListInfoDto;
       }
  // 
// async uploadDocuments(queryCreateClaimDocumentDtoBodyDto: QueryCreateClaimDocumentDtoBodyDto) {
//   const RefId = queryCreateClaimDocumentDtoBodyDto.RefId;
//   const TransactionNo = queryCreateClaimDocumentDtoBodyDto.TransactionNo;
//   const HN =queryCreateClaimDocumentDtoBodyDto.HN;
//   const VN = queryCreateClaimDocumentDtoBodyDto.VN;
//   const DocumentName = queryCreateClaimDocumentDtoBodyDto.DocumentName;

//   console.log(HN);
//   const fileRecords = await prismaProgest.claimDocuments.findMany({
//     where: {
//      // id: { in: ids }, // ดึงไฟล์ตามอาเรย์ของ ID
//       hn: '437536-45'
//     },
//   });

//   const filesAsBase64 = await Promise.all(
//     fileRecords.map(async (fileRecord) => {
//       const filePath = join(__dirname, '..', '..', fileRecord.filepath);
//       const fileBuffer = readFileSync(filePath);
//       const base64File = fileBuffer.toString('base64');
//       return {
        
//         filename: fileRecord.documentname //fileRecord.filepath.split('/').pop(), // ชื่อไฟล์
//         //base64: base64File, // ข้อมูลไฟล์เป็น Base64
//       };
//     }),
//   );
//  // console.log(filename)
//   console.log('XXoooooXX')
// return filesAsBase64
// }
}
