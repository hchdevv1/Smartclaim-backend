import { Controller, Post, Patch, Body } from '@nestjs/common';
import { AiaPatientInfoService } from './aia-patient-info.service';

import { FindBodyDto } from './dto/aia-patient-info-find.dto';
import { CreateBodyDto } from './dto/aia-patient-info-create.dto';
import { SearchBodyDto } from './dto/aia-patient-info-search.dto';
import { UpdateBodyDto } from './dto/aia-patient-info-update.dto';
import { FindforUpdateBodyDto } from './dto/aia-patient-info-findforUpdate.dto';

@Controller('aia-patient-info')
export class AiaPatientInfoController {
  constructor(private readonly aiaPatientInfoService: AiaPatientInfoService) {}


  // @Get('/PatientInfo/:xPID')
  // aiaPatientInfo(@Param('xPID') xPID: string) {
  //   //return this.aiaPatientInfoService.getPatientInfo(xPID);
   
  // }
  // @Get('/PatientInfo2/:xInsurerid/:xPID')
  // aiaPatientInfo2(@Param('xInsurerid') xInsurerid: string,@Param('xPID') xPID: string) {
  
  //   // return this.aiaPatientInfoService.getPatientInfo2(xInsurerid,xPID);
  // }
  @Post('/FindPatient')
  async FindPatient(@Body() findBodyDto: FindBodyDto, ) {
      const result = await this.aiaPatientInfoService.FindPatient(findBodyDto);
      return result
      }
  
  @Post('/CreatePatient')
  async create(@Body() createBodyDto:CreateBodyDto){
        const result = this.aiaPatientInfoService.create(createBodyDto);
        return  result
  }
  @Post('/PatientSearch')
  async PatientSearch(@Body() searchBodyDto:SearchBodyDto){
        const result = this.aiaPatientInfoService.PatientSearchByPID(searchBodyDto);
        return result
  }

  @Post('/PatientFindforUpdate')
  async PatientFindforUpdate(@Body() findforUpdateBodyDto:FindforUpdateBodyDto){
        const result = this.aiaPatientInfoService.FindforUpdate(findforUpdateBodyDto);
        return result
  }
  @Patch('/PatientUpdate')
  async updatePatientInfo(
  @Body() updateBodyDto: UpdateBodyDto,
) {
    const result = await this.aiaPatientInfoService.updatePatientInfoByPID(updateBodyDto);
    return result
  }


}