import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'

@Module({
  providers: [TeacherService,LessonsManagerService],
  controllers: [TeacherController]
})
export class TeacherModule {}
