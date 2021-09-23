import { HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { Lesson } from '../Models/Lessons';

@Injectable()
export class TeacherService {
     async getLessons(params){
        var message = ''
        var state = true 
        var lessons = await Lesson.find()
        return({
            lessons:lessons,
            state:state,
            message:message
        })
     } 
     async addLesson(params)
     {
         var lesson = new Lesson()
         lesson.name = params.name
         lesson.task = params.task
         var state = false
         var message = ''
         await lesson.save().then(result=>{
                    state = true
                }, error =>{
                state = false
                message = error
            })
         return ({
             state : state,
             message : message
         })
     }
     async editLesson(params)
     {
         var lesson = new Lesson()
         lesson.name = params.name
         lesson.task = params.task
         var state = false
         var message = ''
         await lesson.save().then(result=>{
                    state = true
                }, error =>{
                state = false
                message = error
            })
         return ({
             state : state,
             message : message
         })
     }
     async deleteLesson(params)
     {
        var state = false
        var message = ''
        Lesson.delete(params).then(result=>{
            state = true
        },error=>{
            message = error
            state = false
        })
        return({
            state:state,
            message:message
        })
     }
}
