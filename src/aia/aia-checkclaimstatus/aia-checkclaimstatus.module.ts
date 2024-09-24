import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'

import { AiaCheckclaimstatusService } from './aia-checkclaimstatus.service';
import { AiaCheckclaimstatusController } from './aia-checkclaimstatus.controller';


import { TrakcarePatientInfoService } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service'
import { TrakcarePatientInfoModule } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.module';
import { UtilsService } from '../../utils/utils.service';
@Module({
  imports: [HttpModule, TrakcarePatientInfoModule],
  controllers: [AiaCheckclaimstatusController],
  providers: [AiaCheckclaimstatusService,TrakcarePatientInfoService ,UtilsService],
})
export class AiaCheckclaimstatusModule {}
