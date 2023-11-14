import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(':id')
  getId(): string {
    return `hi id `;
  }
  @Post('new')
  addNew(): string {
    return 'new ADDED';
  }
  @Put('update')
  change(): string {
    return 'result updated';
  }
  @Delete(':id')
  delete(): string {
    return 'data deleted';
  }
}
