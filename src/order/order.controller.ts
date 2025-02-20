import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly utilityservice: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/shared')
  orderFunc(): string {
    return this.utilityservice.orderFunc();
  }
  @Get('/global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
