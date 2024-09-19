import { Module } from '@nestjs/common';
import { AiaOpddischargeService } from './aia-opddischarge.service';
import { AiaOpddischargeController } from './aia-opddischarge.controller';

import {HttpModule} from '@nestjs/axios'

import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service'
import { TrakcarePatientInfoModule } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.module';
import { UtilsService } from '../../utils/utils.service';

@Module({
  imports: [HttpModule, TrakcarePatientInfoModule],
  controllers: [AiaOpddischargeController],
  providers: [AiaOpddischargeService,TrakcarePatientInfoService, UtilsService],
})
export class AiaOpddischargeModule {}
