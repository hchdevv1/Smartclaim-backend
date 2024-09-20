import { Controller ,Post, Body   } from '@nestjs/common';
import { AiaRetrieveFurtherClaimListService } from './aia-retrieve-further-claim-list.service';
import { QueryRetrieveFurtherClaimdtoBodyDto } from  './dto/aia-retrieve-further-claim-list.dto';

@Controller('aia-retrieve-further-claim-list')
export class AiaRetrieveFurtherClaimListController {
  constructor(private readonly aiaRetrieveFurtherClaimListService: AiaRetrieveFurtherClaimListService) {}

  




  @Post('/getRetrieveFurtherClaim')
  async getEpisodeByHN(@Body() queryRetrieveFurtherClaimdtoBodyDto:QueryRetrieveFurtherClaimdtoBodyDto){
        const result = this.aiaRetrieveFurtherClaimListService.RetrieveFurtherClaim(queryRetrieveFurtherClaimdtoBodyDto);
        return result
  }

}
