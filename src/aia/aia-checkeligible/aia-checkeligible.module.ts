import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'

import { AiaCheckeligibleService } from './aia-checkeligible.service';
import { AiaCheckeligibleController } from './aia-checkeligible.controller';

import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service'
import { TrakcarePatientInfoModule } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.module';
import { UtilsService } from '../../utils/utils.service';
@Module({
  imports: [HttpModule, TrakcarePatientInfoModule],
  controllers: [AiaCheckeligibleController],
  providers: [AiaCheckeligibleService,TrakcarePatientInfoService, UtilsService],
})
export class AiaCheckeligibleModule {}
