import express from "express"
import movieRoutes from "./routes/movies.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import rateRoutes from "./routes/rates.js"
import cors from "cors";

const app=express()

app.use(express.json())
app.use("/api/movies",movieRoutes)
app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/comments",commentRoutes)
app.use("/api/rate",rateRoutes)

app.use(cors())


app.listen(8800, ()=>{
    console.log("Connected 3")
})