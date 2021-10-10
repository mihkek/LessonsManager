import { BaseEntity, Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Study } from "./Study";

@Entity("pupil")
export class Pupil extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(type => User, user => user.pupils)
    user: User;

    @OneToMany( type => Study , study => study.teacher)
    studyes: Study[];

    constructor(){
        super()
      }
}