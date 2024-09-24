import { Controller ,Post, Body   } from '@nestjs/common';
import { AiaBillingSubmissionService } from './aia-billing-submission.service';
import { QueryBillingSubmissionBodyDto } from './dto/aia-billing-submission.dto';

@Controller('aia-billing-submission')
export class AiaBillingSubmissionController {
  constructor(private readonly aiaBillingSubmissionService: AiaBillingSubmissionService) {}


  @Post('/getbilling-submission')
  async getbillingsubmission(@Body() queryBillingSubmissionBodyDto:QueryBillingSubmissionBodyDto){
      const result = this.aiaBillingSubmissionService.getbillingsubmission(queryBillingSubmissionBodyDto);
       return result
  }
}
