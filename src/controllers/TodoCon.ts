import express from "express";
import { Todo } from "../models/TodoModel";

class TodoClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const todo: Todo = new Todo();
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.isCompleted = req.body.isCompleted;
            await todo.save();
            res.status(200).json(todo);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error); 
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Todo
                .find({
                    
                })
                .then((todos) => res.status(200)
                .json(todos));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error); 
        }
    };
};

export const TODO: TodoClass = new TodoClass();


