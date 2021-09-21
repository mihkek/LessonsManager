import { Injectable } from '@nestjs/common';
import { User } from 'src/Models/User';


@Injectable()
export class AccessControlService {
   static modePupil : number= 1
   static modeTeacher : number = 2
   async checkUser(params){
       var user = await User.findOne(params)
       if(user == undefined){
           return{
             found: false
           }
       }
       else{
            return{
                found : true,
                user : user
            } 
       }
   }
}

