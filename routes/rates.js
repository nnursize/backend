import express from "express"
import { getRate,addRate} from "../controllers/rate.js";

const router=express.Router();

router.get("/:movieid",getRate);
router.post("/",addRate);

export default router