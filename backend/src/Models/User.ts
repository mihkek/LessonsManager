import { userInfo } from "os";
import { BaseEntity, Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SessinsStore } from "./SessinsStore";

@Entity("users")
export class User extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    login: string;
  
    @Column()
    password: string;

    @Column()
    salt: string

    @Column()
    mode : number

    @OneToMany( type => SessinsStore , session => session.user)
    sessions: SessinsStore[];


    @Column({default:null})
    fullname: string

    @Column({default:null})
    aboutme:string

    @Column({default:null})
    email:string

    @Column({default:null})
    phone:string

    @Column({default:null})
    addres:string

    
    constructor(){
      super()
    }
    // constructor(login: string, password: string, mode:number,  id?: number) {
    //     super();
    //     this.id = id;
    //     this.login = login;
    //     this.password = password;
    //     this.mode = mode;
    //   }

}