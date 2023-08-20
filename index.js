import express from "express"
import movieRoutes from "./routes/movies.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import rateRoutes from "./routes/rates.js"
import actorRoutes from "./routes/actors.js"
import directorRoutes from "./routes/directors.js"
import multer from "multer"
import cors from "cors";

const app=express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../myapp/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname);
    },
  });
  
  const upload = multer({ storage });
  
  app.post("/api/upload", upload.single("image"), function (req, res) {
    
    const image = req.file;
    res.status(200).json(image.filename);
  });

app.use(express.json())
app.use("/api/movies",movieRoutes)
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/rate",rateRoutes)
app.use("/api/directors",directorRoutes)
app.use("/api/actors",actorRoutes)

app.use(cors())


app.listen(8800, ()=>{
    console.log("Connected 3")
})