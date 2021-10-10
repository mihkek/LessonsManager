import { Module } from '@nestjs/common';
import { AccessJwtControlService } from './access-jwt-control.service';
import { AccessJwtControlController } from './access-jwt-control.controller';

@Module({
  providers: [AccessJwtControlService],
  controllers: [AccessJwtControlController]
})
export class AccessJwtControlModule {}
