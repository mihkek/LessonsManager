import { Module } from '@nestjs/common';
import { PupilService } from './pupil.service';
import { PupilController } from './pupil.controller';
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'

@Module({
  providers: [PupilService, LessonsManagerService],
  controllers: [PupilController]
})
export class PupilModule {}
