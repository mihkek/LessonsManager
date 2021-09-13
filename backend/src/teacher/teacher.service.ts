import { HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Lesson } from '../Models/Lessons';

@Injectable()
export class TeacherService {
     async addLesson(@Res() res, num : number, name : string, task: string)
     {
         var lesson = new Lesson(num, name, task)
         await lesson.save()
         return res.status(HttpStatus.OK)
     }
     async editLesson(@Res() res, num : number, name : string, task: string, id:number)
     {
         var lesson = await Lesson.findOne({'id':id})
         if(!lesson)
         {
            throw new NotFoundException('Lesson do not exist!');
        }
        lesson.name = name
        lesson.num = num
        lesson.task = task
        await lesson.save()
        return res.status(HttpStatus.OK)
     }
     async deleteLesson(@Res() res, num : number, name : string, task: string, id:number)
     {
        var lesson = await Lesson.findOne({'id':id})
         if(!lesson)
         {
            throw new NotFoundException('Lesson do not exist!');
        }
        Lesson.delete({'id':id})
        return res.status(HttpStatus.OK)
     }
}
