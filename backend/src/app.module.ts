import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './Models/User'
import {TeacherModule } from './teacher/teacher.module';
import {TeacherController} from './teacher/teacher.controller'
import {TeacherService } from './teacher/teacher.service'
import {PupilModule } from './pupil/pupil.module';
import {PupilController }from './pupil/pupil.controller';
import {PupilService}  from './pupil/pupil.service';
import {Lesson} from './Models/Lessons'
import {AccessControlModule } from './access-control/access-control.module';
import {AccessControlController} from './access-control/access-control.controller'
import {AccessControlService} from './access-control/access-control.service'
import {SessinsStore} from './Models/SessinsStore'
import { LessonsManagerService } from './lessons-manager/lessons-manager.service';
import { ApiRedirectMiddleware } from './middlewares/api_redirect';

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
      entities: [User, Lesson, SessinsStore],
    }),
    TeacherModule,
    PupilModule,
    AccessControlModule
  ],
  controllers: [AppController,TeacherController,PupilController, AccessControlController],
  providers: [AppService,TeacherService,PupilService, AccessControlService, LessonsManagerService],
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiRedirectMiddleware)
      .forRoutes("/api");
  }
}