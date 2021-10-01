import { HttpStatus, Injectable, NotFoundException, Res } from '@nestjs/common';
import { stat } from 'fs';
import { User } from 'src/Models/User';
import { Lesson } from '../Models/Lessons';
import * as MODE from '../constants'

@Injectable()
export class TeacherService {

    async getPupils(filter=""){
        var pupils = await User.find({mode:MODE.PUPIL_MODE})
        if(!pupils){
            return{
                state:false
            }
        }else{
            return{
                state:true,
                pupils:pupils
            }
        }
    }  
}
