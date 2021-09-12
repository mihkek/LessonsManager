import { Body, Controller, Get, HttpStatus, ParseIntPipe, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {AccessControl} from './Classes/AccessControl'
import {User} from './Models/User'

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  init(@Req() req, @Res() res)  {
    AccessControl.startCheck(req,res)
  }
  @Get("login")
  @Render("login")
  login(@Req() req, @Res() res):any{
    if(AccessControl.modeCheck(req, AccessControl.modeTeacher))
    { 
        res.redirect("/teacher/index")
    }
    if(AccessControl.modeCheck(req, AccessControl.modePupil))
    { 
        res.redirect("/pupil/index")
    }
    return
    {
      isFall : false
    }
  }

  @Get("pupilPage")
  @Render("pupil")
  pupilPage(@Req() req, @Res() res)
  {
     if(!AccessControl.modeCheck(req, AccessControl.modePupil))
         res.redirect("login")
     return;
  }
  
  @Post("singIn")
  async singIn(@Res() res,
    @Body() body: { login: string; password: string; mode:number },
  ){
     var user = await User.findOne({'login' : body.login, 'password' : body.password,'mode' : body.mode })
     if(user == undefined){
       console.log("not found")
        res.render("login", { isFall : true})
     }
     else
     {
       res.cookie('isLogin', true)
       res.cookie('mode',body.mode)
       console.log("selected mode - "+body.mode)
       console.log("teacher mode - " + AccessControl.modeTeacher)
       if(body.mode == AccessControl.modePupil)
       {
          console.log("pupil mode")
          res.redirect("/pupil/pupilPage")
       }
       if(body.mode == AccessControl.modeTeacher)
       {
          console.log("teacher mode")
          res.redirect("/teacher/index")
       }
     }
  }
  @Get("logout")
  @Redirect("login")
  logout(@Res() res)
  {
    res.cookie('isLogin', false)
    res.cookie('mode', 0)
  }
}

/* Dynamic redirect decorator usege
@Redirect()
  @Post("singIn")
  async singIn(@Res() res,
    @Body() body: { login: string; password: string; mode:any },
  ){
     var profit = await User.findOne({'login' : body.login, 'password' : body.password,'mode' : body.mode })
     if(profit == undefined){
       return { 
         statusCode: HttpStatus.FOUND, 
         url: "login", 
         isFall : true
         };
     }
  }

*/

