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
  @Get('/getEpisodeByHN/:xHN/:xEpiDate/:xEpiType')
  getEpisodeByHN(@Param('xHN') xHN: string,@Param('xEpiDate') xEpiDate: string,@Param('xEpiType') xEpiType: string) {
     return this.trakcarePatientInfoService.getEpisodeByHN(xHN,xEpiDate,xEpiType);
  }

  @Get('/getOPDDischargeDiagnosis/:xVN')
  getOPDDischargeDiagnosis(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeDiagnosis(xVN);
  }
  @Get('/getOPDDischargeDoctor/:xVN')
  getOPDDischargeDoctor(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeDoctor(xVN);
  }
  
  @Get('/getOPDDischargeProcedure/:xVN')
  getOPDDischargeProcedure(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeProcedure(xVN);
  }
  
  @Get('/getOPDDischargeInvestigation/:xVN')
  getOPDDischargeInvestigation(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeInvestigation(xVN);
  }

  @Get('/getOPDDischargeVitalSign/:xVN')
  getOPDDischargeVitalSign(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeVitalSign(xVN);
  }
  
  @Get('/getOPDDischargeAccident/:xVN')
  getOPDDischargeAccident(@Param('xVN') xVN: string) {
     return this.trakcarePatientInfoService.getOPDDischargeAccident(xVN);
  }
  
 
  
}
