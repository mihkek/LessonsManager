import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AccessJwtControlService } from './access-jwt-control.service';

@Controller('access-jwt-control')
export class AccessJwtControlController {
    constructor(private accessControlService:AccessJwtControlService){}

    @Post("login")
    async login(@Res() res,@Req() req){
         this.accessControlService.checkUser(req.body.login).then((result)=>{
             //res.header("auth-token", token)
            if(!result.found){
                res.status(200).json({
                    message: "User with this login does not exist",
                    accessAllow: false,
                    error: true
                })
            }else if(result.error){
                res.status(500).json({
                    accessAllow: false,
                    message: "Server error. Try again later",
                    error: true
                })
            }
            else{
                var token = this.accessControlService.createToken({login :req.body.login, password:req.body.password})
                res.status(200).json({
                    error: false,
                    accessAllow: true,
                    token:token,
                    user:result.user
                })
            }
         })
    }
    @Post("dashboard")
    async test(@Res() res, @Req() req){
        var verify = this.accessControlService.verifyUser(req.body.token)
        res.json({
            verify : verify
        })
    }
}
