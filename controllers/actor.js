import {db} from "../db.js"

export const getActor=(req,res)=>{
    const q = "SELECT `actor_id` , `actor_name`, `years_of_experience` FROM performed_by,actor WHERE actor_id=movie_actor_id AND movieid=? ";
    db.query(q, [req.params.movieid], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const getActors=(req,res)=>{
    const q = "SELECT `actor_id`, `actor_name`, `years_of_experience` FROM actor ";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const addActor=(req,res)=>{
    const q="INSERT INTO actor(`actor_name`, `years_of_experience`) VALUES(?)"
    const values=[
        req.body.actor_name,
        req.body.years_of_experience,
    ];
  
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Actor added.");
    });
}