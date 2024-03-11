import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerProvider } from './logger.service';
import * as Models from './models';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerProvider) {}

  @MessagePattern('print-out')
  async receiveLogs(data: Models.Log) {
    this.loggerService.printOut(data);
  }
}
