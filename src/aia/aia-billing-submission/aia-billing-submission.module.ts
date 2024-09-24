import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'

import { AiaBillingSubmissionService } from './aia-billing-submission.service';
import { AiaBillingSubmissionController } from './aia-billing-submission.controller';
import { UtilsService } from '../../utils/utils.service';
@Module({
  imports: [HttpModule],
  controllers: [AiaBillingSubmissionController],
  providers: [AiaBillingSubmissionService ,UtilsService],
})
export class AiaBillingSubmissionModule {}
