import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './utils/utils.module';
import { TrakcarePatientInfoModule } from './trakcare/trakcare-patient-info/trakcare-patient-info.module'
import { AiaPatientInfoModule } from './aia/aia-patient-info/aia-patient-info.module'
@Module({
  imports: [UtilsModule, TrakcarePatientInfoModule,AiaPatientInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
