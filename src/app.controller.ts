import { Body, Controller, Get, HttpStatus, ParseIntPipe, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { Console } from 'console';
import { request, response } from 'express';
import { AppService } from './app.service';

import { applyDecorators } from '@nestjs/common';
import { check } from 'prettier';
import { Int } from '@nestjs/graphql';
import {AccessControl} from './Classes/AccessControl'

import {User} from './Models/User'
import { AssertionError } from 'assert/strict';


var accessControl = new AccessControl()


@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  init(@Req() req, @Res() res)  {
    accessControl.startCheck(req,res)
  }
  @Get("login")
  @Render("login")
  login(@Req() req, @Res() res):any{
    if(accessControl.modeCheck(req, AccessControl.modeTeacher))
    { 
        res.redirect("teacherPage")
    }
    if(accessControl.modeCheck(req, AccessControl.modePupil))
    { 
        res.redirect("pupilPage")
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
     if(!accessControl.modeCheck(req, AccessControl.modePupil))
         res.redirect("login")
     return;
  }
  @Get("teacherPage")
  @Render("teacher")
  teacherPage(@Req() req, @Res() res)
  {
    if(!accessControl.modeCheck(req, AccessControl.modeTeacher))
        res.redirect("login")
    console.log(req.cookies)
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
          res.redirect("pupilPage")
       }
       if(body.mode == AccessControl.modeTeacher)
       {
          console.log("teacher mode")
          res.redirect("teacherPage")
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

