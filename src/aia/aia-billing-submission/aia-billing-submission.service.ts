import { Injectable } from '@nestjs/common';


import { QueryBillingSubmissionBodyDto } from './dto/aia-billing-submission.dto';

@Injectable()
export class AiaBillingSubmissionService {
 

  async getbillingsubmission(queryBillingSubmissionBodyDto:QueryBillingSubmissionBodyDto){
    
    try{
   
     
       return queryBillingSubmissionBodyDto
      }catch(error)
      {
        console.log(error)
      }
 
 
}
}
