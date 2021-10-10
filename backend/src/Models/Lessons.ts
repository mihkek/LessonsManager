import { BaseEntity, Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Study } from "./Study";

@Entity("lessons")
export class Lesson extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    task : string

    @ManyToOne(type => Study, study => study.lessons)
    study: Study;
    
    constructor() {
        super();
      }
}