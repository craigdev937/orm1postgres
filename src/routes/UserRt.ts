import express from "express";
import { USER } from "../controllers/UserCon";

export const userRt: express.Router = express.Router();
    userRt.post("/", USER.Create);
    userRt.get("/", USER.FetchAll);




    