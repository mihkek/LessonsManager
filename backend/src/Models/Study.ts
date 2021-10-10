import { BaseEntity, Column, Double, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./Teacher";
import { Pupil } from "./Pupil";
import { Lesson } from "./Lessons";

@Entity("study")
export class Study extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(type => Teacher, teacher => teacher.studyes)
    teacher: Teacher;
    
    @ManyToOne(type => Pupil, pupil => pupil.studyes)
    pupil: Pupil;

    @OneToMany( type => Lesson , lesson => lesson.study)
    lessons: Lesson[];
}