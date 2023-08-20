import express from "express"
import { addDirector, getDirector, getDirectors } from "../controllers/director.js";

const router=express.Router();

router.get("/",getDirectors);
router.get("/:movieid",getDirector)
router.post("/",addDirector);

export default router