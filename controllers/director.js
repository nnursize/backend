import {db} from "../db.js"

export const getDirector=(req,res)=>{
    const q = "SELECT `director_id`, `director_name`, `nationality` FROM directed_by,director WHERE director_id=movie_director_id AND movie_id=? ";
    db.query(q, [req.params.movieid], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const getDirectors=(req,res)=>{
    const q = "SELECT `director_id`, `director_name`, `nationality` FROM director ";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const addDirector=(req,res)=>{
    const q="INSERT INTO director(`director_name`, `nationality`) VALUES(?)"
    const values=[
        req.body.director_name,
        req.body.nationality,
    ];
  
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Director added.");
    });
}