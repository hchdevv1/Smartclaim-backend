import { Controller ,Post ,Body } from '@nestjs/common';
import { AiaCheckclaimstatusService } from './aia-checkclaimstatus.service';

import { QueryCheckStatusClaimBodyDto ,QueryListPatientClaimByStatusBodyDto} from './dto/aia-checkclaimstatus.checkstatus.dto';

@Controller('aia-checkclaimstatus')
export class AiaCheckclaimstatusController {
  constructor(private readonly aiaCheckclaimstatusService: AiaCheckclaimstatusService) {}



  @Post('/checkclaimstatus')
  async checkclaimstatus(@Body() queryCheckStatusClaimBodyDto:QueryCheckStatusClaimBodyDto){
       const result = this.aiaCheckclaimstatusService.checkclaimstatus(queryCheckStatusClaimBodyDto);
        return result
  }

  @Post('/listPatientclaimByStatus')
  async listPatientclaimByStatus(@Body() queryListPatientClaimByStatusBodyDto:QueryListPatientClaimByStatusBodyDto){
       const result = this.aiaCheckclaimstatusService.listPatientclaimByStatus(queryListPatientClaimByStatusBodyDto);
        return result
  }

}
