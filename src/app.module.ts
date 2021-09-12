import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './Models/User'
import {TeacherModule } from './teacher/teacher.module';
import {AccessControl } from './Classes/AccessControl';
import {TeacherController} from './teacher/teacher.controller'
import {TeacherService } from './teacher/teacher.service'
import {PupilModule } from './pupil/pupil.module';
import {PupilController }from './pupil/pupil.controller';
import   {PupilService}  from './pupil/pupil.service';
import {Lesson} from './Models/Lessons'


//var accessControl = new AccessControl()
module.exports.AccessControl = new AccessControl()//accessControl
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'postgres',
      logging: true,
      synchronize: true,
      entities: [User, Lesson],
    }),
    TeacherModule,
    PupilModule
  ],
  controllers: [AppController,TeacherController,PupilController],
  providers: [AppService,TeacherService,PupilService],
})
export class AppModule {}
