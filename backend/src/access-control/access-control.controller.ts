import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import {AccessControlService} from '../access-control/access-control.service'
import {CircularJSON} from 'circular-json'
import { User } from 'src/Models/User';

@Controller('access-control')
export class AccessControlController {
    constructor(private accessControlService:AccessControlService){}
    @Post("login")
    async login(@Res() res,@Req() Req,
        @Body() body: { login: string; password: string; mode:number },
    ){
        const info = await this.accessControlService.checkUser({'login' : body.login })
        if(!info.found){
          res.status(200).json({
                  message: "User with this login does not exist",
                  logied: false
                })
        }
       
        if(!this.accessControlService.compareHashPassword(body.password, info.user.password)){
          res.status(200).json({
                message: "Incorrect pasword",
                logied: false
              })
        }
        if(info.user.mode != body.mode){
          res.status(200).json({
                message: "You have not rights for this user-role",
                logied: false
              })
        }
      var session = await this.accessControlService.createUserSession(info.user)
      if(!session.status){
        res.status(500).json({
          message: "Cannot to create session for user. Error - "+session.message,
          logied: false
        })
      }
      else
          res.status(200).json({
                logied: true,
                mode: info.user.mode,
                session_id : session.session_id
            })
    }
    @Post("logout")
    async logout(@Res() res,@Req() Req,
    @Body() body: { session_id: string; },
    ){
        let user = await this.accessControlService.getGetSessionById(body.session_id)
        await this.accessControlService.deleteUserSession(user).then(resolve=>{
                res.status(200)
            },reject=>{
                res.status(500)
            })
    }
    @Post("register")
    async register(@Res() res,@Req() Req,
    @Body() body: { login: string; password: string; mode:number },
    ){
        const info = await this.accessControlService.checkUser({'login' : body.login })
        if(info.found){
          res.status(200).json({
                  message: "User with this login already exists",
                  register: false
                })
          }
        else{
           await this.accessControlService.registerUser({'login' : body.login, 'password' : body.password, 'mode' : body.mode })
                  .then(resolve=>{res.status(200)}, rejects=>{res.status(500)})
        }
          //In the future check user by email will be here

    } 
    @Get("someTest/:p")
    async testHash(@Param() p){
        //console.log(this.accessControlService.hashPassword(JSON.stringify(p), this.accessControlService.generateSalt()))
    }
    

}
