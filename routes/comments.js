import express from "express"
import { getComment,addComment} from "../controllers/comment.js";

const router=express.Router();

router.get("/:movieid",getComment);
router.post("/",addComment);

export default router