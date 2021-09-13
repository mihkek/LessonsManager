import { HttpStatus, NotFoundException, Res } from "@nestjs/common";
import { Lesson } from "src/Models/Lessons";

export class DataManage
{
  static async testGet()
  {
    return {
      test : "Done!"
    }
  }
  static async getLessons(@Res() res)
  {
     let lessons = await Lesson.find()// if i wanna get lessons by some condition, i must to write - await Lesson.findOne({'key' : value, 'key1': value1})
     if(!lessons)
     {
         throw new NotFoundException('Lessons do not exist!');
     }
     return res.status(HttpStatus.OK).json(lessons)
  }
  static async getOneLessonById(@Res() res, id: number )
  {
     let lesson = await Lesson.findOne({'id' : id})
     if(!lesson)
     {
         return res.status(HttpStatus.NOT_FOUND)
     }
     return res.status(HttpStatus.OK).json(lesson)
  }
}
