import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { AccessControl } from 'src/Classes/AccessControl';
import { TeacherService } from './teacher.service'
import {DataManage} from '../Classes/DataManage'

@Controller('teacher')
export class TeacherController {
    constructor(private teacherService: TeacherService) { }
    @Get("index")
    @Render("teacher")
    async teacherPage(@Req() req, @Res() res)
    {
       

    }
}
