import express from "express";
import { db } from "../connect/db";
import { universities } from "../db/schema";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const universities = await db.query.universities.findMany();
    return res.json({
      "universities": universities
    })
  } catch (error) {
    console.error(error)
    return res.json({
      "universities": []
    }).status(500)
  }
})

router.post("/create", async (req, res) => {
  const payload = req.body as {
    name: string;
    slug: string;
    description: string;
  }
  console.log(req.body)

  try {
    await db.insert(universities).values({
      name: payload.name,
      slug: payload.slug,
      description: payload.description
    })

    return res.json({
      status: "success"
    })
  } catch (error) {
    console.error(error);
    return res.json({
      status: "internal server error"
    }).status(500)
  }
})

export default router;

