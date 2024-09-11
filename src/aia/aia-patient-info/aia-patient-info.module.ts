import { Module } from '@nestjs/common';
import { AiaPatientInfoService } from './aia-patient-info.service';
import { AiaPatientInfoController } from './aia-patient-info.controller';
import {HttpModule} from '@nestjs/axios'
import { TrakcarePatientInfoService} from '../../trakcare/trakcare-patient-info/trakcare-patient-info.service'
import  {TrakcarePatientInfoModule } from '../../trakcare/trakcare-patient-info/trakcare-patient-info.module';

@Module({
  imports: [HttpModule, TrakcarePatientInfoModule],
  controllers: [AiaPatientInfoController],
  providers: [AiaPatientInfoService ,TrakcarePatientInfoService],
})
export class AiaPatientInfoModule {}
