import { Controller, Get, Param } from '@nestjs/common';
import { TrakcarePatientInfoService } from './trakcare-patient-info.service';

@Controller('trakcare-patient-info')
export class TrakcarePatientInfoController {
  constructor(private readonly trakcarePatientInfoService: TrakcarePatientInfoService) {}

  @Get('/PatientInfoByPID/:xPID')
  getPatientInfoByPID(@Param('xPID') xPID: string) {
     return this.trakcarePatientInfoService.getPatientInfoByPID(xPID);
  }
  @Get('/PatientInfoByHN/:xHN')
  getPatientInfoByHN(@Param('xHN') xHN: string) {
     return this.trakcarePatientInfoService.getPatientInfoByHN(xHN);
  }
  @Get('/PatientInfoByPassportNumber/:xHN')
  getPatientInfoByPassportNumber(@Param('xHN') xHN: string) {
     return this.trakcarePatientInfoService.getPatientInfoByPassportNumber(xHN);
  }
}
