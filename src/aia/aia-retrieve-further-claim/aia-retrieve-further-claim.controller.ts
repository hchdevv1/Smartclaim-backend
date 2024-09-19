import { Controller, Post } from '@nestjs/common';
import { AiaRetrieveFurtherClaimService } from './aia-retrieve-further-claim.service';

@Controller('aia-retrieve-further-claim')
export class AiaRetrieveFurtherClaimController {
  constructor(private readonly aiaRetrieveFurtherClaimService: AiaRetrieveFurtherClaimService) {}

  @Post('/checkeligible')
  async checkeligible(){
  
        const result ='' // this.aiaCheckeligibleService.checkeligible(checkEligibleBodyDto);
        return result
  }
}
