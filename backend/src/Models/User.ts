import { BaseEntity, Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    mode : number

    constructor(login: string, password: string, mode:number,  id?: number) {
        super();
        this.id = id;
        this.login = login;
        this.password = password;
        this.mode = mode;
      }
}