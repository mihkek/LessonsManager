import { PupilService } from './pupil.service';
import { Body, Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { identity } from 'rxjs';
import {LessonsManagerService} from '../lessons-manager/lessons-manager.service'
import { AccessControlService } from 'src/access-control/access-control.service';

@Controller('pupil')
export class PupilController {
    constructor(private pupilService: PupilService, 
                private lessonsManagerService:LessonsManagerService, 
                private accessControlService: AccessControlService) { }
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
}
 