import express from "express";
import { Profile } from "../models/ProfileModel";
import { User } from "../models/UserModel";

class ProfileClass {
    Create: express.Handler = async (req, res, next) => {
        try {
            const profile: Profile = new Profile();
            profile.gender = req.body.gender;
            profile.skill = req.body.skill;
            await profile.save();
            res.status(200).json(profile);
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };

    FetchAll: express.Handler = async (req, res, next) => {
        try {
            await Profile
            .find({relations: ["user"]})
            .then((profiles) => res.status(200)
            .json(profiles));
        } catch (error) {
            res.status(500).json(res.statusMessage);
            next(error);
        }
    };
};

export const PROF: ProfileClass = new ProfileClass();


