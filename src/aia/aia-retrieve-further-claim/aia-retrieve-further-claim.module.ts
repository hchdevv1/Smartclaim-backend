import { Module } from '@nestjs/common';
import { AiaRetrieveFurtherClaimService } from './aia-retrieve-further-claim.service';
import { AiaRetrieveFurtherClaimController } from './aia-retrieve-further-claim.controller';

@Module({
  controllers: [AiaRetrieveFurtherClaimController],
  providers: [AiaRetrieveFurtherClaimService],
})
export class AiaRetrieveFurtherClaimModule {}
