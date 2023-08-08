import {db} from "../db.js"
import bcrypt from "bcryptjs"

export const register=(req,res)=>{
    // nonexisting user can register
    const q="SELECT * FROM users WHERE username=?";
    db.query(q, req.body.username, (err,data)=>{
        if(err) 
        return res.json(err);

        if(data.length) 
        return res.status(409).json("User already exist.");  //409-> zaten var

        //sifre hashleme
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);

        const q="INSERT INTO users(`username`,`email`,`age`,`password`,`role`) VALUES(?)";
        const values=[
            req.body.username,
            req.body.email,
            req.body.age,
            hash,       //password
            req.body.role,
        ]
            db.query(q, [values], (err,data)=>{
                if(err)  return res.json(err);
                return res.status(200).json("User has been created.");  //200-> basarili
            });
    });
};

export const login=(req,res)=>{
    //user var mi
    const q="SELECT * FROM users WHERE username=?";
    db.query(q, [req.body.username], (err,data)=>{
        if(err) 
        return res.json(err);

        if(data.length==0) 
        return res.status(404).json("User not found.");  //409-> zaten var

        //Check password
        const passwordCheck = bcrypt.compareSync(req.body.password, data[0].password);  //data[0] user
        if (!passwordCheck)
        return res.status(400).json("Wrong username or password!");

        const {password, ...other}=data[0];
        return res.status(200).json(other);            //??? cookieli
    });
};

export const logout=(req,res)=>{
    
};