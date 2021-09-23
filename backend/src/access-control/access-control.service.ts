import { Injectable } from '@nestjs/common';
import { User } from 'src/Models/User';
import {SessinsStore} from '../Models/SessinsStore'
var bcrypt = require('bcrypt');
var crypto = require('crypto');

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
   async registerUser(params){
       var user = new User()
       user.login = params.login
       var salt = this.generateSalt()
       var hash = this.hashPassword(params.password, salt)
       user.password = hash
       user.salt = salt
       user.mode = params.mode

       await user.save().then(function(){
        return ({
          status: true,
        })
     }).catch(function(err){
        return ({
          status: false,
          message: err
        })
     })
   }
   async createUserSession(user){
     var session = new SessinsStore()
     session.session_id = this.generateSessionId()
     session.user = user
     var status = false
     var message = ''
     await session.save().then(function(){
         status = true
      }).catch(function(err){
            status= false,
            message= err
      })
      return({
        status:status,
        message:message,
        session_id:session.session_id 
      })
   }
   async getGetSessionById(session_id){
     var session =  await SessinsStore.findOne({'session_id':session_id})
     return session
   }
   async deleteUserSession(session){
     SessinsStore.delete({'session_id':session.session_id}).then(function(){
        return ({
          status: true,
        })
     }).catch(function(err){
        return ({
          status: false,
          message: err
        })
     })
   }
   compareHashPassword(password, hash){
    return bcrypt.compare(password, hash)
  }
   private generateSessionId(){
      return crypto.randomBytes(16).toString('base64');
   }
  
   private generateSalt(){
     return bcrypt.genSaltSync(10);
   }
   private  hashPassword(password, salt){
       return  bcrypt.hashSync(password, salt);
   }
}

