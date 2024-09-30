import express from "express";
import { User } from "../models/UserModel";
import { Todo } from "../models/TodoModel";

class UserClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const todo: Todo = new Todo();
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.isCompleted = req.body.isCompleted;
            let saveTodos = await todo.save();
            const user: User = new User();
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.age = req.body.age;
            user.isActive = req.body.isActive;
            user.todos = [saveTodos];
            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await User
                .find()
                .then((users) => res.status(200)
                .json(users));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const USER: UserClass = new UserClass();




// CreateProfile: express.Handler = async (req, res, next) => {
    //     try {
    //         const profile: Profile = new Profile();
    //         profile.gender = req.body.gender;
    //         profile.skill = req.body.skill;
    //         let saveProfile = await profile.save();
    //         const user: User = new User();
    //         user.firstName = req.body.firstName;
    //         user.lastName = req.body.lastName;
    //         user.age = req.body.age;
    //         user.isActive = req.body.isActive;
    //         user.profile = saveProfile;
    //         await user.save();
    //         res.status(200).json(user);
    //     } catch (error) {
    //         res.status(500).json(res.statusMessage);
    //         next(error);
    //     }
    // };