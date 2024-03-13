import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as Models from './models';

@Injectable()
export class LoggerProvider {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {}

  gallatinLog(data: Models.Log) {
    this.logger.log(data);
  }
}
