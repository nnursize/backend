import express from "express"
import { addMovie, deleteMovie, getMovie, getMovies, updateMovie } from "../controllers/movie.js";

const router=express.Router();

router.get("/",getMovies);
router.get("/:id",getMovie);
router.post("/",addMovie);
router.delete("/:id",deleteMovie);
router.put("/:id",updateMovie);

export default router