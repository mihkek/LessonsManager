import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { identity } from 'rxjs';
import { TeacherService } from './teacher.service'
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'

@Controller('teacher')
export class TeacherController {
    constructor(private teacherService: TeacherService, private lessonsManagerService:LessonsManagerService) { }
    @Get("lessons")
    async getLessons(@Req() req, @Res() res)
    {
        var data = await this.lessonsManagerService.getAllLessons(undefined)
        if(!data.state){
            res.status(200).json({
                state : false,
                message:data.message
            })
        }else{
            res.status(200).json({
                state:true,
                data:data.lessons
            })
        }
    }
    @Get("viewLesson/:id")
    async viewLesson(@Param('id') id, @Req() req, @Res() res){
        var data = await this.lessonsManagerService.getOneLesson(id)
        console.log(data)
        if(!data.state)
            res.status(404)
        else
            res.status(200).json({
                status:true,
                lesson:data.lesson
            })
    }
    @Post("changeLesson")
    async lrogout(@Res() res,@Req() Req,
         @Body() body: { id: number; name:string; task: string },
    ){
        console.log(body.name)
         var edit = await this.lessonsManagerService.editLesson({id:body.id, name:body.name, task:body.task})
             res.status(200).json({
                 status:edit.state,
                 message:edit.message
             })
    }
}
