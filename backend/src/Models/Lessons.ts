import { BaseEntity, Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("lessons")
export class Lesson extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    task : string

    constructor() {
        super();
      }
}