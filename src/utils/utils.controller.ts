import { Controller, Get, Param } from '@nestjs/common';
import { UtilsService } from './utils.service';


@Controller('utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}


 

  @Get('/EncryptAESECB/:Secretkey/:text')
  EncryptAESECB(@Param('Secretkey') Secretkey :string,@Param('text') text: string ) {
      return  this.utilsService.EncryptAESECB(text ,Secretkey)
  }

  @Get('IllnessType/:Insurercode')
  getIllnessType(@Param('Insurercode') Insurercode :string){
    return this.utilsService.IllnessType(Insurercode)
  }
  
  @Get('/IllnessSurgery/:Insurercode')
  getIllnessSurgery(@Param('Insurercode') Insurercode: string ) {

    return  this.utilsService.IllnessSurgery(Insurercode)
  }

  @Get('/policyType/:InsuranceCode')
  getpolicyType(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.policyType(InsuranceCode)
  }

  @Get('/serviceSetting/:InsuranceCode')
  getServiceSetting(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.getServiceSetting(InsuranceCode)
  }

  @Get('/claimStatus/:InsuranceCode')
  getClaimStatus(@Param('InsuranceCode') InsuranceCode: string ) {
    return  this.utilsService.getClaimStatus(InsuranceCode)
  }


@Get('/accessToken-aia')
requestAccessToken() {
  return  this.utilsService.requestAccessToken_AIA();
}

// @Get('/test')
// setDTOHTS(){
//   return this.utilsService.setDTOHTS();
// }


}
