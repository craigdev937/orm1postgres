import express from "express";
import { TODO } from "../controllers/TodoCon";

export const todoRt: express.Router = express.Router();
    todoRt.post("/", TODO.Create);
    todoRt.get("/", TODO.FetchAll);


