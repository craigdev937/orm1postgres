import express from "express";
import { Student } from "../models/StudentModel";
import { Course } from "../models/CourseModel";

class StudentClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const course: Course = new Course();
            course.code = req.body.code;
            course.title = req.body.title;
            let stdudentCourses = await course.save();

            const student: Student = new Student();
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.age = req.body.age;
            student.rollNo = req.body.rollNo;
            student.courses = [stdudentCourses];
            await student.save();
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error); 
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Student
                .find()
                .then((students) => res.status(200)
                .json(students));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error); 
        }
    };
};

export const STU: StudentClass = new StudentClass();


