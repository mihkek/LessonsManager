import { userInfo } from "os";
import { BaseEntity, Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SessinsStore } from "./SessinsStore";
import { Teacher } from "./Teacher";
import { Pupil } from "./Pupil";

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

    @OneToMany( type => SessinsStore , session => session.user)
    sessions: SessinsStore[];

    @OneToMany( type => Teacher , teacher => teacher.user)
    teachers: Teacher[];

    @OneToMany( type => Pupil , pupil => pupil.user)
    pupils: Pupil[];
    
    constructor(){
      super()
    }
}