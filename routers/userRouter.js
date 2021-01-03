import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("Home"));
userRouter.get("/edit", (req, res) => res.send("Edit"));
userRouter.get("/password", (req, res) => res.send("Password"));

export default userRouter;
