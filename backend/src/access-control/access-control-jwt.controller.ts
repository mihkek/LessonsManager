import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import {AccessControlService} from './access-control.service'

@Controller('access-control-jwt')
export class AccessControlJwtController {
    constructor(private accessControlService:AccessControlService){}
    @Post("login")
    async login(@Res() res,@Req() Req,
        @Body() body: { login: string; password: string; mode:number },
    ){
        res.status(200).json({
            logied:true
        })
    }
    @Post("logout")
    async logout(@Res() res,@Req() Req,
    @Body() body: { session_id: string; },
    ){

    }
    @Post("register")
    async register(@Res() res,@Req() Req,
    @Body() body: { login: string; password: string; mode:number },
    ){
       

    } 
    @Post("profile")
    async getProfile(@Res() res,@Req() req){

    }
    @Post("saveProfile")
    async saveProfile(@Res() res,@Req() req){
       
    }
    @Get("someTest/:p")
    async testHash(@Param() p){
        //console.log(this.accessControlService.hashPassword(JSON.stringify(p), this.accessControlService.generateSalt()))
    }
    

}
