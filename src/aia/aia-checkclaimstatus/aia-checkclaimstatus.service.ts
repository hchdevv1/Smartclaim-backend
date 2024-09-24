import { Injectable ,HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { lastValueFrom } from 'rxjs'
import { Prisma } from '../../../prisma/generate-client-db';
import { prismaProgest } from '../../database/database';
/* ////// utils //////  */
import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service';
import { TransactionCheckStatusClaimDto } from '../../utils/dto/transaction-query.dto';
import { HttpMessageDto } from '../../utils/dto/http-status-message.dto';
import { HttpStatusMessageService } from '../../utils/http-status-message.service';

import { UtilsService } from '../../utils/utils.service';
import { QueryCheckStatusClaimBodyDto ,CreateTransactionclaimstatus ,QueryListPatientClaimByStatusBodyDto ,CheckStatusClaimInfoDto ,ResultStatusClaimInfo} from './dto/aia-checkclaimstatus.checkstatus.dto';

const newHttpMessageDto =new HttpMessageDto();
const httpStatusMessageService = new HttpStatusMessageService();

const AIA_APIURL= process.env.AIA_APIURL;
const AIA_APISecretkey = process.env.AIA_APISecretkey;
const AIA_APIHospitalCode =process.env.AIA_APIHospitalCode;
const AIA_APIHopitalUsername=process.env.AIA_APIHopitalUsername;
const AIA_APISubscription =process.env.AIA_APISubscription;


@Injectable()
export class AiaCheckclaimstatusService {
  constructor(
    private readonly httpService: HttpService,
    private readonly trakcarePatientInfoService: TrakcarePatientInfoService,
    private readonly utilsService:UtilsService
  ) {}

  
  async listPatientclaimByStatus(queryListPatientClaimByStatusBodyDto:QueryListPatientClaimByStatusBodyDto){
    try {
      let resultsQuery =null;
      const  RequesetBody ={

        xInsurerCode:queryListPatientClaimByStatusBodyDto.PatientInfo.InsurerCode,
        xRefId:queryListPatientClaimByStatusBodyDto.PatientInfo.RefId,
        xTransactionNo:queryListPatientClaimByStatusBodyDto.PatientInfo.TransactionNo,
        xPID : queryListPatientClaimByStatusBodyDto.PatientInfo.PID||'',
        xHN :queryListPatientClaimByStatusBodyDto.PatientInfo.HN,
        xPassportnumber : queryListPatientClaimByStatusBodyDto.PatientInfo.PassportNumber||'',
        xIdType:queryListPatientClaimByStatusBodyDto.PatientInfo.IdType||'',
        xVN: queryListPatientClaimByStatusBodyDto.PatientInfo.VN||'',
        xStatusClaimCode : queryListPatientClaimByStatusBodyDto.PatientInfo.StatusClaimCode,
        xVisitDatefrom : queryListPatientClaimByStatusBodyDto.PatientInfo.VisitDatefrom,
        xVisitDateto : queryListPatientClaimByStatusBodyDto.PatientInfo.VisitDateto,
        xInvoicenumber : queryListPatientClaimByStatusBodyDto.PatientInfo.Invoicenumber,
        xClaimNo : queryListPatientClaimByStatusBodyDto.PatientInfo.Claimno,
      }

      if (RequesetBody.xIdType==='RefId'){
         resultsQuery = await prismaProgest.transactionclaimstatus.findMany({
          where: {
            refid: RequesetBody.xRefId, // แทนที่ด้วยค่าของ refid ที่ต้องการค้นหา
          },
          // refid, insurerid, hn, vn, statuscode, batchnumber, claimno, invoicenumber, status_changed_at, note, "totalApproveAmount", "paymentDate", "transactionNo
          select: {
            refid: true, 
            insurerid: true, 
            hn: true, 
            vn: true, 
            batchnumber: true, 
            claimno: true, 
            invoicenumber: true, 
            note: true, 
            totalApproveAmount: true, 
            paymentDate: true, 
            transactionNo: true, 
            status_changed_at:true,
            ClaimStatus: {
              select: {
                StatusDescTH: true,
              },
            },
          },
        });
        resultsQuery = resultsQuery.map(item => ({
          ...item,
          status_changed_at: `${new Date(item.status_changed_at).getFullYear()}-${(new Date(item.status_changed_at).getMonth() + 1).toString().padStart(2, '0')}-${new Date(item.status_changed_at).getDate().toString().padStart(2, '0')} ${new Date(item.status_changed_at).getHours().toString().padStart(2, '0')}:${new Date(item.status_changed_at).getMinutes().toString().padStart(2, '0')}`
        }));
      }else if (RequesetBody.xIdType==='PID'){
      }else if (RequesetBody.xIdType==='HN'){
         resultsQuery = await prismaProgest.transactions.findMany({
          select: {
            id: true,
            refid: true,
            transactionid: true,
            statusid: true,
            updatedate: true,
            hn: true,
            vn: true,
            insurerid: true,
            accidentdate: true,
            Claimants: {
              select: {
                title_th: true,
                givenname_th: true,
                surname_th: true,
              },
            },
           
            ClaimStatus: {
              select: {
                StatusCode: true,
                StatusDescTH: true,
              },
            },
          },
          where: {
            // กำหนดเงื่อนไขการค้นหา (ถ้าต้องการ)
            hn: '61-022789', // ตัวอย่างการกรองโดย insurerid
          },
        });
        
        // resultsQuery = resultsQuery.map(item => ({
        //   ...item,
        //   status_changed_at: `${new Date(item.status_changed_at).getFullYear()}-${(new Date(item.status_changed_at).getMonth() + 1).toString().padStart(2, '0')}-${new Date(item.status_changed_at).getDate().toString().padStart(2, '0')} ${new Date(item.status_changed_at).getHours().toString().padStart(2, '0')}:${new Date(item.status_changed_at).getMinutes().toString().padStart(2, '0')}`
        // }));
      }else if (RequesetBody.xIdType==='VN'){
      }else if (RequesetBody.xIdType==='Passport'){
      }else if (RequesetBody.xIdType==='Invoice'){

      }
      
  
      return resultsQuery
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
  async checkclaimstatus(queryCheckStatusClaimBodyDto:QueryCheckStatusClaimBodyDto){
    const newTransactionCheckStatusClaimDto =new TransactionCheckStatusClaimDto();
    const newResultStatusClaimInfo = new ResultStatusClaimInfo();
     try{
      const  RequesetBody ={
         xRefId:queryCheckStatusClaimBodyDto.PatientInfo.RefId,
         xTransactionNo:queryCheckStatusClaimBodyDto.PatientInfo.TransactionNo,
         xPID : queryCheckStatusClaimBodyDto.PatientInfo.PID||'',
         xPassportnumber : queryCheckStatusClaimBodyDto.PatientInfo.PassportNumber||'',
         xIdType:queryCheckStatusClaimBodyDto.PatientInfo.IdType||'',
         xInsurerCode:queryCheckStatusClaimBodyDto.PatientInfo.InsurerCode,
         xHN :queryCheckStatusClaimBodyDto.PatientInfo.HN||'',
         xVN: queryCheckStatusClaimBodyDto.PatientInfo.VN||'',
         xClaimNo : queryCheckStatusClaimBodyDto.PatientInfo.ClaimNo,
         xNote : queryCheckStatusClaimBodyDto.PatientInfo.Note,
       }
       const ObjAccessToken = await this.utilsService.requestAccessToken_AIA();
       const ObjAccessTokenKey = ObjAccessToken.accessTokenKey
       const apiURL= `${AIA_APIURL}/SmartClaim/checkClaimStatus`;
       const xUsername=AIA_APIHopitalUsername;
       const xHospitalCode =await this.utilsService.EncryptAESECB(AIA_APIHospitalCode,AIA_APISecretkey);
       const xInsurerCode=RequesetBody.xInsurerCode;
       const xElectronicSignature='';
       const xDataJsonType =3;

      //  console.log(apiURL)
      //  console.log(ObjAccessTokenKey)
      //  console.log('RefId: '+RequesetBody.xRefId) 
      //  console.log('TransactionNo: '+RequesetBody.xTransactionNo)
      //  console.log('Username: '+xUsername)
      //  console.log('HospitalCode: '+xHospitalCode)
      //  console.log('InsurerCode: '+xInsurerCode)
      //  console.log('ElectronicSignature: '+xElectronicSignature)
      //  console.log('DataJsonType: '+xDataJsonType)

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
  
//  console.log(body)
//  console.log('---------')
   const headers = {
     'Content-Type': 'application/json',
     'Ocp-Apim-Subscription-Key': AIA_APISubscription,
     'Apim-Auth-Secure-Token': ObjAccessTokenKey
   };
 
   const responsefromAIA = await lastValueFrom(
     this.httpService.post(apiURL, body, { headers })
   );
   //console.log(responsefromAIA)
   const responeInputcode = responsefromAIA.data.Result.Code
   if (responeInputcode !=='S'){
    this.addFormatHTTPStatus(newHttpMessageDto,400,responsefromAIA.data.Result.MessageTh,responsefromAIA.data.Result.MessageTh)
   }else{
    
    const responeRefId =responsefromAIA.data.Data.RefId
    const responeTransactionNo =responsefromAIA.data.Data.TransactionNo
    const responeBatchNumber =responsefromAIA.data.Data.BatchNumber
    const responeClaimStatus =responsefromAIA.data.Data.ClaimStatus
    const responeTotalApproveAmount =responsefromAIA.data.Data.TotalApproveAmount
    const responePaymentDate =responsefromAIA.data.Data.PaymentDate
    const responeInvoiceNumber =responsefromAIA.data.Data.InvoiceNumber
    //if ((responeTotalApproveAmount.length===0)||( responeTotalApproveAmount!== null)){responeTotalApproveAmount =null ;}
    //if ((responePaymentDate.length===0)||( responePaymentDate!== null)){responePaymentDate =null ;}
    //if ((responeInvoiceNumber.length===0)||( responeInvoiceNumber!== null)){responeInvoiceNumber =null ;}

    // const responeRefId ='O486051-67-13-OPD-001'
    // const responeTransactionNo ='f70507fc-e66c-4ee8-9327-069e3e97557a'
    // const responeBatchNumber =''
    // const responeClaimStatus ='Reversed'
    // const responeTotalApproveAmount =null 
    // const responePaymentDate =null
    // const responeInvoiceNumber ='INV-test-5678'
    if (responeClaimStatus && responeClaimStatus.length > 0) {
      const getClaimCode = await prismaProgest.claimStatus.findMany({ 
        take: 1,
        where:{  StatusDescEN:responeClaimStatus },  
        select:{  StatusCode :true }
         },)  
        // console.log(getClaimCode)
         const claimCode = getClaimCode.length > 0 ? getClaimCode[0].StatusCode : null;
         const newCreateTransactionclaimstatus =new CreateTransactionclaimstatus();
         this.createTransactionclaimstatus(newCreateTransactionclaimstatus,
          responeRefId,xInsurerCode,RequesetBody.xHN,
          RequesetBody.xVN,claimCode,responeBatchNumber,
          RequesetBody.xClaimNo,responeInvoiceNumber,RequesetBody.xNote,
          responeTotalApproveAmount,responePaymentDate,responeTransactionNo
        )
        // console.log(resultCreateTransactionclaimstatus)
         this.addFormatHTTPStatus(newHttpMessageDto,200,'','')
         this.addFormatTransactionCheckStatusClaimDto(newTransactionCheckStatusClaimDto,
          RequesetBody.xInsurerCode,RequesetBody.xRefId,RequesetBody.xTransactionNo,
          RequesetBody.xPID,RequesetBody.xPassportnumber,RequesetBody.xIdType,
          RequesetBody.xHN,RequesetBody.xVN,RequesetBody.xClaimNo,RequesetBody.xNote
         )

  const resultsQuery = await prismaProgest.transactionclaimstatus.findFirst({
    select: {
      refid:true,
      transactionNo:true,
      batchnumber: true,
      claimno: true,
      status_changed_at: true,
      invoicenumber: true,
      note: true,
      totalApproveAmount: true,
      paymentDate: true,
      hn: true,
      vn: true,
      ClaimStatus: {
        select: {
          StatusCode: true,
          StatusDescTH: true,
        },
      },
      Claimants: {
        select: {
          title_th: true,
          givenname_th: true,
          surname_th: true,
        },
      },
    },
    where: {
     refid :RequesetBody.xRefId,transactionNo:RequesetBody.xTransactionNo
    },
  });

if (resultsQuery && resultsQuery.status_changed_at) {
 
// newResultStatusClaimInfo.Data.ClaimNo = resultsQuery.claimno;
// newResultStatusClaimInfo.Data.StatusUpdateAt = resultsQuery.status_changed_at.toISOString(); // หรือกำหนดให้ตรงตามที่ต้องการ
// newResultStatusClaimInfo.Data.invoicenumber = resultsQuery.invoicenumber;
// newResultStatusClaimInfo.Data.note = resultsQuery.note;
// newResultStatusClaimInfo.Data.totalApproveAmount = resultsQuery.totalApproveAmount;
// newResultStatusClaimInfo.Data.paymentDate = resultsQuery.paymentDate;
// newResultStatusClaimInfo.Data.HN = resultsQuery.hn;
// newResultStatusClaimInfo.Data.VN = resultsQuery.vn;
// newResultStatusClaimInfo.Data.ClaimStatus = resultsQuery.ClaimStatus;
// newResultStatusClaimInfo.Data.Claimants = resultsQuery.Claimants;
// newResultStatusClaimInfo.Data.formattedStatusChangedAt = ''//resultsQuery.formattedStatusChangedAt;

}
//console.log(resultsQuery)
const dateObj = new Date(resultsQuery.status_changed_at);
const formattedStatusChangedAt = `${dateObj.toISOString().split('T')[0]} ${dateObj.toISOString().split('T')[1].substring(0, 5)}`;

newResultStatusClaimInfo.Data={
RefId:resultsQuery.refid,
InsurerCode:xInsurerCode,
HN: resultsQuery.hn,
VN:  resultsQuery.vn,
Claimstatuscode:  resultsQuery.ClaimStatus.StatusCode,
ClaimstatusName:  resultsQuery.ClaimStatus.StatusDescTH,
batchnumber:  resultsQuery.batchnumber,
ClaimNo: resultsQuery.claimno,
StatusUpdateAt:  formattedStatusChangedAt,
invoicenumber:  resultsQuery.invoicenumber,
note: resultsQuery.note,
totalApproveAmount:  resultsQuery.totalApproveAmount,
paymentDate:  resultsQuery.paymentDate,
transactionNo:  resultsQuery.transactionNo,
TitleTH:  resultsQuery.Claimants.title_th,
GivenNameTH:  resultsQuery.Claimants.givenname_th,
SurnameTH:  resultsQuery.Claimants.surname_th,

}
 //console.log(resultsQuery)
 console.log(newResultStatusClaimInfo)
 }else{
      this.addFormatHTTPStatus(newHttpMessageDto,400,'ClaimStatus Not found','')
      return newHttpMessageDto
    }
} 
   
   let newCheckStatusClaimInfoDto= new CheckStatusClaimInfoDto();
   newCheckStatusClaimInfoDto={
         HTTPStatus:newHttpMessageDto,
          TransactionQuery:newTransactionCheckStatusClaimDto,
          Result:newResultStatusClaimInfo
 }

   return newCheckStatusClaimInfoDto
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

   async createTransactionclaimstatus(data:CreateTransactionclaimstatus,
    inputrefid:string,inputinsurerid:number,inputhn:string,
    inputvn:string, inputstatuscode:string, inputbatchnumber:string,
    inputclaimno:string, inputinvoicenumber:string, inputnote:string,
    inputtotalApproveAmount:string,inputpaymentDate:string,inputtransactionno:string){

  let statusCreate,countRefId
   let newCreateTransactionclaimstatus =new CreateTransactionclaimstatus();
   newCreateTransactionclaimstatus ={
      refid:inputrefid,
      insurerid:inputinsurerid,
      hn:inputhn,
      vn:inputvn,
      statuscode:inputstatuscode,
      batchnumber:inputbatchnumber,
      claimno:inputclaimno,
      invoicenumber:inputinvoicenumber,
      note:inputnote,
      totalApproveAmount:inputtotalApproveAmount,
      paymentDate:inputpaymentDate,
      transactionNo:inputtransactionno
    }
  if (inputrefid) {
    countRefId = await prismaProgest.transactionclaimstatus.count({
      where: {
        refid: inputrefid ,
        insurerid: +inputinsurerid
      }
    });
    //console.log('>>>>'+countRefId +'<<<<<')
    if(countRefId ===0){
      //console.log('countRefId = 0')
      if(newCreateTransactionclaimstatus){
       await prismaProgest.transactionclaimstatus.create({  data: newCreateTransactionclaimstatus })
        statusCreate='done'
      }
    }
    else{
      //console.log('VN > 0')
      const filteredData = Object.fromEntries(
        Object.entries(newCreateTransactionclaimstatus).filter(([, value]) => value !== null && value !== undefined)
      );
      await prismaProgest.transactionclaimstatus.updateMany({
        where: {
          refid: inputrefid ,
          insurerid: +inputinsurerid
        },
        // data: {
        //   statuscode: newCreateTransactionclaimstatus.statuscode,
        //   batchnumber: newCreateTransactionclaimstatus.batchnumber||'',   
        //   invoicenumber:newCreateTransactionclaimstatus.invoicenumber,   
        //   note:newCreateTransactionclaimstatus.note,   
        //   totalApproveAmount:newCreateTransactionclaimstatus.totalApproveAmount,   
        //   paymentDate:newCreateTransactionclaimstatus.paymentDate            
        // }
        data:filteredData
      });
  statusCreate='done'
    }
   }
  return statusCreate
  }

  addFormatTransactionCheckStatusClaimDto(data: TransactionCheckStatusClaimDto,
    inputInsurerCode:number,inputRefId:string,inputTransactionNo:string
    ,inputPID:string,inputPassportNumber:string,inputIdType:string
    ,inputHN:string,inputVN :string,inputClaimNo:string,inputNote:string
  ):void{

    if(data){
  
        data.InsurerCode = inputInsurerCode||null
        data.RefId = inputRefId||''
        data.TransactionNo = inputTransactionNo||''
        data.PID = inputPID||''
        data.PassportNumber = inputPassportNumber ||''
        data.IdType = inputIdType||''
        data.HN= inputHN||''
        data.VN = inputVN||''
        data.ClaimNo = inputClaimNo ||''
        data.Note = inputNote ||''
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
