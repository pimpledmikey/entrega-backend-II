// File: src/routes/session.routes.js
import { Router } from "express";
import passport from "passport";
import { passportCall } from "../middlewares/passport.middleware.js";
import sessionController from "../controllers/session.controllers.js";

const router = Router();

router.post("/register", passportCall("register"), sessionController.register);
router.post("/login", passportCall("login"), sessionController.login);

router.get(
    "/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
      session: false,
    }),
    sessionController.googleAuth
);

router.get("/current", passportCall("current"), sessionController.getCurrentUser);

export default router;