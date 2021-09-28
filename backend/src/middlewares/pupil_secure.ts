import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { AccessControlService } from "src/access-control/access-control.service";
import * as APP_CONSTANTS from '../constants' 

@Injectable()
export class PupilSecureMiddleware implements NestMiddleware {
    constructor(private accessControlService:AccessControlService){}
    async use(req: Request, res: Response, next: NextFunction) { 
        var session_id = ''
        if(req.method == "GET") session_id = req.query.session_id.toString()
        if(req.method == "POST") session_id = req.body.session_id.toString()
        var session = await this.accessControlService.getSessionBySession_id(session_id)
        if((!session.found)||(session.session.user.mode != APP_CONSTANTS.PUPIL_MODE)){
            res.status(403)
        }
        else{
            res.status(400)
            next();
        }
    }
}