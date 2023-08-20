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
    const q = "SELECT `id`, `name`, `summary`, `img`, `genre`, `duration`, `year` FROM movies WHERE id=? ";
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
}

export const addMovie=(req,res)=>{
    const q="INSERT INTO movies( `name`, `summary`, `img`, `genre`, `duration`, `year`) VALUES(?)"
    const values=[
        req.body.name,
        req.body.summary,
        req.body.img,
        req.body.genre,
        req.body.duration,
        req.body.year,
    ];
  
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
    });

    //performed_by
    const q2="INSERT INTO performed_by ( `movie_id`, `movie_actor_id`) VALUES(?)"
    for (actr in req.body.actors)
    {
        values2=[
            req.body.movie_id,
            actr,
        ];

        db.query(q2, [values2], (err, data) => {
            if (err) return res.json(err);
        });
    }

    //directed_by
    const q3="INSERT INTO directed_by( `movie_id`, `movie_director_id`) VALUES(?)"
    for (drctr in req.body.directors)
    {
        values3=[
            req.body.movie_id,
            drctr,
        ];

        db.query(q2, [values3], (err, data) => {
            if (err) return res.json(err);
        });
    }
    return res.json("Movie has been created.");
}

export const deleteMovie=(req,res)=>{
    const movieid=req.params.id;
    const q="DELETE FROM movies WHERE `id`=?"
    db.query(q, [movieid], (err, data)=>{
        if (err) return res.json(err);
  
        return res.json("Movie has been deleted!");
    });
}

export const updateMovie=(req,res)=>{
    const movieid=req.params.id;
    const q="UPDATE movies SET `name`=?, `summary`=?, `img`=?, `genre`=?, `duration`=?, `year`=? WHERE id=?"
    const values=[
        req.body.name,
        req.body.summary,
        req.body.img,
        req.body.genre,
        req.body.duration,
        req.body.year,
    ];
  
    db.query(q, [...values, movieid], (err, data) => {
        if (err) return res.json(err);
        return res.json("Movie has been updated.");
    });
}