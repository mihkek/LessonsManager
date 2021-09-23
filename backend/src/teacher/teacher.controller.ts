import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { TeacherService } from './teacher.service'

@Controller('teacher')
export class TeacherController {
    constructor(private teacherService: TeacherService) { }
    @Get("lessons")
    async getLessons(@Req() req, @Res() res)
    {
        var data = await this.teacherService.getLessons(undefined)
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
}
