import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {AccessControlService} from '../access-control/access-control.service'
import {CircularJSON} from 'circular-json'

@Controller('access-control')
export class AccessControlController {
    constructor(private accessControlService:AccessControlService){}
    @Post("login")
    async login(@Res() res,@Req() Req,
        @Body() body: { login: string; password: string; mode:number },
    ){
        const info = await this.accessControlService.checkUser({'login' : body.login })
       // console.log(info)
        if(!info.found){
          res.json({
                  message: "User with this login does not exist",
                  logied: false
                })
        }
        if(info.user.password != body.password){
          res.json({
                message: "Incorrect pasword",
                logied: false
              })
        }
        if(info.user.mode != body.mode){
          res.json({
                message: "You have not rights for this user-role",
                logied: false
              })
        }
      res.json({
            logied: true,
            mode: info.user.mode
        })
    }

}
