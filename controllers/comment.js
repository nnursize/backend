import {db} from "../db.js"

export const getComment=(req,res)=>{
    const q = "SELECT `movieid`, `username`, `content` FROM comments WHERE movieid=? ";
    db.query(q, [req.params.movieid], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

export const addComment=(req,res)=>{
    const q="INSERT INTO comments( `movieid`, `username`, `content`) VALUES(?)"
    const values=[
        req.body.movieid,
        req.body.username,
        req.body.content,
    ];
  
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Commented.");
    });
}