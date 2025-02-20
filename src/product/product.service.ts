/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
       return 'hello from prodcut service';

  }

 productFunc2(){
    return {
      name: 'John Doe',
      age: 30,
      hobby: 'Reading books',
    };
}
 
}