import { Controller, Post, Body} from '@nestjs/common';
import { AiaOpddischargeService } from './aia-opddischarge.service';

import { QueryDiagnosisBodyDto } from './dto/aia-opddischarge-diagnosis.dto';
import { QueryDoctorBodyDto } from './dto/aia-opddischarge-doctor.dto';
import { QueryVitalSignBodyDto } from './dto/aia-opddischarge-vitalsign.dto';
import { QueryProcedureBodyDto } from './dto/aia-opddischarge-procedure.dto';
import { QueryInvestigationBodyDto } from './dto/aia-opddischarge-Investigation.dto';
import { QueryAccidentBodyDto } from './dto/aia-opddischarge-Accident.dto';
@Controller('aia-opddischarge')
export class AiaOpddischargeController {
  constructor(private readonly aiaOpddischargeService: AiaOpddischargeService) {}




  @Post('/getOPDDischargeDiagnosis')
  async getEpisodeByHN(@Body() queryDiagnosisBodyDto:QueryDiagnosisBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeDiagnosis(queryDiagnosisBodyDto);
        return result
  }

  @Post('/getOPDDischargeDoctor')
  async getOPDDischargeDoctor(@Body() queryDoctorBodyDto:QueryDoctorBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeDoctor(queryDoctorBodyDto);
        return result
  }

  @Post('/getOPDDischargeVitalSign')
  async getOPDDischargeVitalSign(@Body() queryVitalSignBodyDto:QueryVitalSignBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeVitalSign(queryVitalSignBodyDto);
        return result
  }
  @Post('/getOPDDischargeProcedure')
  async getOPDDischargeProcedure(@Body() queryProcedureBodyDto:QueryProcedureBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeProcedure(queryProcedureBodyDto);
        return result
  }
  

  @Post('/getOPDDischargeInvestigation')
  async getOPDDischargeInvestigation(@Body() queryInvestigationBodyDto:QueryInvestigationBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeInvestigation(queryInvestigationBodyDto);
        return result
  }
 
  @Post('/getOPDDischargeAccident')
  async getOPDDischargeAccident(@Body() queryAccidentBodyDto:QueryAccidentBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeAccident(queryAccidentBodyDto);
        return result
  }

}
