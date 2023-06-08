import { Controller, Get } from '@nestjs/common';
import { EventGateway } from './event.gateway';

@Controller()
export class AppController {
  constructor(private readonly eventGateway: EventGateway) {}

  @Get()
  getWebSocket(): string {
    return 'Hello World!';
  }
}
