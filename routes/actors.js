import express from "express"
import { addActor, getActor, getActors } from "../controllers/actor.js";

const router=express.Router();

router.get("/",getActors);
router.get("/:movieid",getActor)
router.post("/",addActor);

export default router