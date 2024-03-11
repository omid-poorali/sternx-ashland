import { Module } from '@nestjs/common';
import { LoggerController } from './logger.controller';
import { LoggerProvider } from './logger.service';

@Module({
  controllers: [LoggerController],
  providers: [LoggerProvider],
})
export class LoggerModule {}
