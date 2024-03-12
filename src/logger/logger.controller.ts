import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LoggerProvider } from './logger.service';
import * as Models from './models';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerProvider) {}

  @MessagePattern('gallatin:log')
  async receiveLogs(data: Models.Log) {
    this.loggerService.gallatinLog(data);
  }
}
