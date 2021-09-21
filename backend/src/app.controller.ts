import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Redirect, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import {AccessControl} from './Classes/AccessControl'
import {User} from './Models/User'
import { Request,Response } from '@nestjs/common';
import axios from 'axios';
import QueryString from 'qs';
const CircularJSON = require('circular-json')
axios.defaults.baseURL = "http://localhost:3001"//port = 8080;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}    
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
// @Get("/api/*")
  // // async getApi(@Req() req: Request, @Res() res){
  // //     console.log("Get to service - " + req.url)
  // //     const service = req.url.replace("/api/", "")
  // //     return res.redirect(service)
  // // }
  // @Post("/api/*")
  // async postApi(@Req() req: Request, @Res() res){
     
  //     const service = req.url.replace("/api/", "")
  //     console.log("Post to service - " + service)
  //     axios.post(service, req.body)
  //         .then((result) => {
  //           //var res = CircularJSON.stringify(result)
  //           console.log("Returned - " +result)
  //           res.json( JSON.stringify(result))
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //           res.json({
  //             message: "Error in post-api calling. Check correct your query."
  //             }
  //           )
  //         })
  // }

