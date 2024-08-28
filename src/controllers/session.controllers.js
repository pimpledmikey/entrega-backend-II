// File: src/controllers/session.controllers.js
import { request, response } from "express";
import { createToken } from "../utils/jwt.js";
import { passportCall } from "../middlewares/passport.middleware.js";
import userRepository from "../persistence/mongoDB/user.repository.js";

const register = async (req = request, res = response) => {
    try {
        res.status(201).json({ status: "ok", msg: "User created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", msg: "Internal server error" });
    }
};

const login = async (req = request, res = response) => {
    try {
        const token = createToken(req.user);
        res.cookie("token", token, { httpOnly: true });
        return res.status(200).json({ status: "ok", payload: req.user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", msg: "Internal server error" });
    }
};

const googleAuth = async (req = request, res = response) => {
    try {
        return res.status(200).json({ status: "ok", payload: req.user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", msg: "Internal server error" });
    }
};

const getCurrentUser = async (req = request, res = response) => {
    res.status(200).json({ status: "ok", user: req.user });
};

export default {
    register,
    login,
    googleAuth,
    getCurrentUser,
};