import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './utils/utils.module';
import { TrakcarePatientInfoModule } from './trakcare/trakcare-patient-info/trakcare-patient-info.module'
import { AiaPatientInfoModule } from './aia/aia-patient-info/aia-patient-info.module'
import { AiaCheckeligibleModule } from './aia/aia-checkeligible/aia-checkeligible.module';
import { AiaOpddischargeModule } from'./aia/aia-opddischarge/aia-opddischarge.module';
import { AiaRetrieveFurtherClaimListModule } from './aia/aia-retrieve-further-claim-list/aia-retrieve-further-claim-list.module';
import { AiaCheckclaimstatusModule } from './aia/aia-checkclaimstatus/aia-checkclaimstatus.module';
import { AiaBillingSubmissionModule } from    './aia/aia-billing-submission/aia-billing-submission.module';
@Module({
  imports: [UtilsModule, TrakcarePatientInfoModule,AiaPatientInfoModule,AiaCheckeligibleModule, 
    AiaRetrieveFurtherClaimListModule, AiaOpddischargeModule ,AiaCheckclaimstatusModule ,AiaBillingSubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
