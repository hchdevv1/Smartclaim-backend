import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios'

import { AiaRetrieveFurtherClaimListService } from './aia-retrieve-further-claim-list.service';
import { AiaRetrieveFurtherClaimListController } from './aia-retrieve-further-claim-list.controller';
import { UtilsService } from '../../utils/utils.service';

@Module({
  imports: [HttpModule],
  controllers: [AiaRetrieveFurtherClaimListController],
  providers: [AiaRetrieveFurtherClaimListService, UtilsService],
})
export class AiaRetrieveFurtherClaimListModule {}
