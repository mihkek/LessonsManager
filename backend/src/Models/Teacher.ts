import { BaseEntity, Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Study } from "./Study";

@Entity("teacher")
export class Teacher extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(type => User, user => user.teachers)
    user: User;

    @OneToMany( type => Study , study => study.teacher)
    studyes: Study[];

    constructor(){
      super()
    }
}