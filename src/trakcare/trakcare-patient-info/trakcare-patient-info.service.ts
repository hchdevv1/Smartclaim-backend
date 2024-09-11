import { Injectable , HttpException, HttpStatus} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpStatusMessageService } from '../../utils/http-status-message.service';

const httpStatusMessageService = new HttpStatusMessageService();

const TRAKCARE_APIURL= process.env.TRAKCARE_APIURL;
@Injectable()
export class TrakcarePatientInfoService {
  constructor(private readonly  httpService: HttpService) {}


  async getPatientInfoByPID( xPID: string ) {
    let response:any ;
    let PatientInfo ;
    try{
       response = await firstValueFrom(
        this.httpService.get(`${TRAKCARE_APIURL}/getPatientInfoByPID/${xPID}`)
      );
      PatientInfo = response.data
    } catch(error)
      {
          if (error instanceof HttpException) {
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessageTrakcare(HttpStatus.INTERNAL_SERVER_ERROR)
           },HttpStatus.INTERNAL_SERVER_ERROR );
          
      }
   return PatientInfo
  }
  
  async getPatientInfoByHN( xHN: string ) {
    let response:any ;
    let PatientInfo ;
    try{
       response = await firstValueFrom(
        this.httpService.get(`${TRAKCARE_APIURL}/getPatientInfoByHN/${xHN}`)
      );
      PatientInfo = response.data
    } catch(error)
      {
          if (error instanceof HttpException) {
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessageTrakcare(HttpStatus.INTERNAL_SERVER_ERROR)
           },HttpStatus.INTERNAL_SERVER_ERROR );
          
      }
   return PatientInfo
  }
  async getPatientInfoByPassportNumber( xPassportnumber: string ) {
    let response:any ;
    let PatientInfo ;
    try{
       response = await firstValueFrom(
        this.httpService.get(`${TRAKCARE_APIURL}/getPatientInfoByPassportNumber/${xPassportnumber}`)
      );
      PatientInfo = response.data
    } catch(error)
      {
          if (error instanceof HttpException) {
            throw error;
         }  throw new HttpException(
           {  statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              message: httpStatusMessageService.getHttpStatusMessageTrakcare(HttpStatus.INTERNAL_SERVER_ERROR)
           },HttpStatus.INTERNAL_SERVER_ERROR );
          
      }
   return PatientInfo
  }
}
