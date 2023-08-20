import {db} from "../db.js"

export const getRate=(req,res)=>{
    const q = "SELECT AVG(`score`) AS movies_rate FROM rates WHERE movieid=? ";
    db.query(q, [req.params.movieid], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
}

export const addRate=(req,res)=>{
    const q2="SELECT COUNT(*) AS count FROM rates WHERE movieid=? AND username=?"
    db.query(q2, [req.body.movieid,req.body.username], (err, data) => {
        if (err) return res.json(err);
        if(data[0].count==0)
        {
            const q="INSERT INTO rates( `username`, `movieid`, `score`) VALUES(?)"
            const values=[
                req.body.username,
                req.body.movieid,
                req.body.score,
            ];
        
            db.query(q, [values], (err, data) => {
                if (err) return res.json(err);
                return res.json("Rated.");
            });
        }
        else
        {
            const q="UPDATE rates SET `score`=? WHERE movieid=? AND username=?"
        
            db.query(q, [req.body.score,req.body.movieid,req.body.username], (err, data) => {
                if (err) return res.json(err);
                return res.json("Rate updated.");
            });
        }
    });

}