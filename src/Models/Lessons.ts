import { BaseEntity, Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lessons")
export class Lesson extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    num: number;
  
    @Column()
    name: string;

    @Column()
    task : string

    constructor(num:number, name: string, task: string,  id?: number) {
        super();
        this.id = id;
        this.num = num;
        this.name = name;
        this.task = task;
      }
}