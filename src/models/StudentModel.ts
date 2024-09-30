import { BaseEntity, Entity, Column, 
    ManyToMany, JoinTable,
    PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./CourseModel";

@Entity({name: "students"})
export class Student extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;
    @Column({ nullable: false }) rollNo: string;
    @Column({ nullable: false }) firstName: string;
    @Column({ nullable: false }) lastName: string;
    @Column({ nullable: false }) age: number;

    @ManyToMany(() => Course, 
    (course) => course.students, {cascade: true, eager: true}) 
    @JoinTable()
    courses: Course[]
};



