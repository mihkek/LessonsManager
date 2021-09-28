import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'
import { AccessControlService } from 'src/access-control/access-control.service';

@Module({
  providers: [TeacherService,LessonsManagerService, AccessControlService],
  controllers: [TeacherController]
})
export class TeacherModule {}
