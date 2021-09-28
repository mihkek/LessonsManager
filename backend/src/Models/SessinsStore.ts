import { BaseEntity, Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("sessions_store")
export class SessinsStore extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(type => User, user => user.sessions)
    user: User;
  
    @Column()
    session_id: string;

    constructor(){
      super()
    }
    static getTableName(){
      return "sessions_store"
    }

}