import express from "express";
import { STU } from "../controllers/StudentCon";

export const stuRt: express.Router = express.Router();
    stuRt.post("/", STU.Create);
    stuRt.get("/", STU.FetchAll);


