import { Controller, Get } from '@nestjs/common';
import { AiaCheckeligibleService } from './aia-checkeligible.service';

@Controller('aia-checkeligible')
export class AiaCheckeligibleController {
  constructor(private readonly aiaCheckeligibleService: AiaCheckeligibleService) {}


  
  @Get()
  findAll() {
    return this.aiaCheckeligibleService.findAll();
  }

}
