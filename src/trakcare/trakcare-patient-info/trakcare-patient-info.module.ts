import { Module } from '@nestjs/common';
import { TrakcarePatientInfoService } from './trakcare-patient-info.service';
import { TrakcarePatientInfoController } from './trakcare-patient-info.controller';
import {HttpModule} from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [TrakcarePatientInfoController],
  providers: [TrakcarePatientInfoService],
})
export class TrakcarePatientInfoModule {}


