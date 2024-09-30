import { BaseEntity, Entity, Column, ManyToMany, 
    PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./StudentModel";

@Entity({name: "courses"})
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn() id: string;
    @Column({ nullable: false }) title: string;
    @Column({ nullable: false }) code: string;

    @ManyToMany(() => Student, 
    (student) => student.courses)
    students: Student[];
};



