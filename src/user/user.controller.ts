import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly utilityservice: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/shared')
  userFunc(): string {
    return this.utilityservice.userFunc();
  }
  @Get('/global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
