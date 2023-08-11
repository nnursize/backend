import {db} from "../db.js"

export const getMovies=(req,res)=>{
    const q = req.query.genre
    ? "SELECT * FROM movies WHERE genre=?"
    : "SELECT * FROM movies";
    db.query(q,[req.query.genre], (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
}

export const getMovie=(req,res)=>{
    res.json("k")
}

export const addMovie=(req,res)=>{
    res.json("k")
}

export const deleteMovie=(req,res)=>{
    res.json("k")
}

export const updateMovie=(req,res)=>{
    res.json("k")
}