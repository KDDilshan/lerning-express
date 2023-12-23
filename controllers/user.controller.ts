import express from "express";
import { db } from "../connect/db";

const router = express.Router()

router.get("/all", async (req, res) => {
  // SELECT * FROM users;
  try {
    const users = await db.query.users.findMany();
    return res.json({
      "users": users,
    })
  } catch (error) {
    console.error(error)
    return res.json({
      "users": []
    }).status(500)
  }
})

router.post("/create", async (req, res) => {
})

router.delete("/remove", async (req, res) => {

})

export default router;

