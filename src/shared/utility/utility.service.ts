import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunc(): string {
    return 'use sharde module';
  }
  chatFunc(): string {
    return 'use chat module';
  }
  orderFunc(): string {
    return 'use order module';
  }
  userFunc(): string {
    return 'use user module';
  }
}
