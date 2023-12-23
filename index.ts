import express from "express";
import dotenv from "dotenv";
import userRouter from "./controllers/user.controller";
import universityRouter from "./controllers/university.controller"

// TODO:  More information about the .env file
// https://blog.devgenius.io/why-a-env-7b4a79ba689
//
// TODO: More information about the .gitignore file
// https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/
dotenv.config()

const app = express();

app.use(express.json())
app.use("/users", userRouter)
app.use("/universities", universityRouter)

app.listen(process.env.APP_PORT, "localhost", () => {
  console.log(`Listening on port :${process.env.APP_PORT}`)
});
