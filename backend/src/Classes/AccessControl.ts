import { Console } from "console"

export class AccessControl
{
    static modePupil : number= 1
    static modeTeacher : number = 2
    //Базовая функция, проверяет авторизацию, если нет - перенаправление на страницу
    //Если да - проверяем режим работы
    static startCheck(req:any, res:any) {
        console.log("i am here)")
        if((req.cookies.isLogin == undefined ) ||(req.cookies.isLogin == false))
        {
            console.log("login was not set")
            res.redirect("login")
        }
        else
        {
            console.log("login was set")
            if(req.cookies.mode == AccessControl.modePupil)
                 res.redirect("/pupil/index")
            if(req.cookies.mode == AccessControl.modeTeacher)
                 res.redirect("/teacher/index")
        }
    }
    static modeCheck(req:any,mode : Number): boolean{
        if(!req.cookies.isLogin)
            return false
        if(req.cookies.mode != mode)
            return false
        return true
    }
}