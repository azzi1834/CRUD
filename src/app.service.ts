import { Injectable } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(private mongoose: MongooseModule) {}
  getHello(): string {
    return 'Hello World!';
  }
}
