import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
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
        if(!info.found){
          res.json({
                  message: "User with this login does not exist",
                  logied: false
                })
        }
       
        if(!this.accessControlService.compareHashPassword(body.password, info.user.password)){
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
      var session = await this.accessControlService.createUserSession(info.user)
      if(!session.status){
        res.json({
          message: "Cannot to create session for user. Error - "+session.message,
          logied: false
        })
      }
      else
          res.json({
                logied: true,
                mode: info.user.mode,
                session_id : session.session_id
            })
    }
    @Post("register")
    async register(@Res() res,@Req() Req,
    @Body() body: { login: string; password: string; mode:number },
    ){
        const info = await this.accessControlService.checkUser({'login' : body.login })
        if(info.found){
          res.json({
                  message: "User with this login already exists",
                  register: false
                })
          }
        else{
           await this.accessControlService.registerUser({'login' : body.login, 'password' : body.password, 'mode' : body.mode })
        }
          //In the future check user by email will be here

    } 
    @Get("someTest/:p")
    async testHash(@Param() p){
        //console.log(this.accessControlService.hashPassword(JSON.stringify(p), this.accessControlService.generateSalt()))
    }
    

}
