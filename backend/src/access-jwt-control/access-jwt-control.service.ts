import { Injectable, Post } from '@nestjs/common';
import { User } from 'src/Models/User';
const configs = require('./../../configs.json')
const jwt = require('jsonwebtoken')

const secretKey = "bulabalaba"
@Injectable()
export class AccessJwtControlService {
    async checkUser(login){
        var result = undefined
        await User.findOne({'login':login}).then((user)=>{
             if(user != undefined){
                result = {
                     found: true,
                     error: false,
                     user: user
                 }
             }
             else{
                result =  {
                    found: false,
                    error: true
                }
             }
        }).catch(error=>{
            result = {
                found: false,
                error: true,
                errorMessage: error
            }
         })
         return result
    }
    createToken(params){
        let payload = params

        console.log(configs.ACCESS_TOKEN_SECRET)
        console.log(configs.ACCESS_TOKEN_LIFE)

        let accessToken = jwt.sign(payload, configs.ACCESS_TOKEN_SECRET, {
            algorithm: "HS256",
            expiresIn: configs.ACCESS_TOKEN_LIFE
        })
        return accessToken
    }
    verifyUser(token){
        var result = {}
        jwt.verify(token, configs.ACCESS_TOKEN_SECRET, function(err,decoded) {
             if(err){
                 result = {
                    accessAllow : false,
                    message: err
                 }
             }  
             else{
                 result={
                     accessAllow: true,
                     decoded:decoded
                 }
             }
        })
        return result
    }
}

