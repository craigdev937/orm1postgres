import express from "express";
import { PROF } from "../controllers/ProfileCon";

export const profRt: express.Router = express.Router();
    profRt.post("/", PROF.Create);
    profRt.get("/", PROF.FetchAll);


    