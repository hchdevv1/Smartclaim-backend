import { Controller, Get , Post, Body} from '@nestjs/common';
import { AiaOpddischargeService } from './aia-opddischarge.service';

import { QueryBodyDto } from './dto/aia-opddischarge.dto';
@Controller('aia-opddischarge')
export class AiaOpddischargeController {
  constructor(private readonly aiaOpddischargeService: AiaOpddischargeService) {}



  @Get()
  findAll() {
    return this.aiaOpddischargeService.findAll();
  }



  @Post('/getOPDDischargeDiagnosis')
  async getEpisodeByHN(@Body() queryBodyDto:QueryBodyDto){
        const result = this.aiaOpddischargeService.getOPDDischargeDiagnosis(queryBodyDto);
        return result
  }


}
