import { Controller ,Post, Body ,Get ,Param  } from '@nestjs/common';
import { AiaCheckeligibleService } from './aia-checkeligible.service';


import { SearchBodyDto } from './dto/aia-checkeligible-search.dto';
import { CheckEligibleBodyDto } from './dto/aia-checkeligible-check.dto';
//import { SearchBodyDto } from './dto/aia-patient-info-search.dto';


@Controller('aia-checkeligible')
export class AiaCheckeligibleController {
  constructor(private readonly aiaCheckeligibleService: AiaCheckeligibleService) {}



  @Post('/getEpisodeByHN')
  async getEpisodeByHN(@Body() searchBodyDto:SearchBodyDto){
        const result = this.aiaCheckeligibleService.getEpisodeByHN(searchBodyDto);
        return result
  }

  @Post('/checkeligible')
  async checkeligible(@Body() checkEligibleBodyDto:CheckEligibleBodyDto){
        const result = this.aiaCheckeligibleService.checkeligible(checkEligibleBodyDto);
        //console.log(checkEligibleBodyDto)
        return result
  }


  @Get('/genRefId/:xVN/:xInsurerCode/:xServiceSettingCode')
  genRefId(@Param('xVN') xVN: string 
,@Param('xInsurerCode') xInsurerCode: number 
,@Param('xServiceSettingCode') xServiceSettingCode: string ) {
     const result = this.aiaCheckeligibleService.generateRefId(xVN,xInsurerCode,xServiceSettingCode);
    return result
  }

}
