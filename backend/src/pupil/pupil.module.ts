import { Module } from '@nestjs/common';
import { PupilService } from './pupil.service';
import { PupilController } from './pupil.controller';
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'
import { AccessControlService } from 'src/access-control/access-control.service';

@Module({
  providers: [PupilService, LessonsManagerService, AccessControlService],
  controllers: [PupilController]
})
export class PupilModule {}
