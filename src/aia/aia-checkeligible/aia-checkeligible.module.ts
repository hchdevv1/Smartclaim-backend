import { Module } from '@nestjs/common';
import { AiaCheckeligibleService } from './aia-checkeligible.service';
import { AiaCheckeligibleController } from './aia-checkeligible.controller';

@Module({
  controllers: [AiaCheckeligibleController],
  providers: [AiaCheckeligibleService],
})
export class AiaCheckeligibleModule {}
