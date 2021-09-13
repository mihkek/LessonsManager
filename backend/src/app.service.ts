import { HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Lesson } from './Models/Lessons';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  //Using of this functions same for teacher mode and for pupil mode and for something other modules
  //Thats why i put them here, in share module
}
