import mysql from "mysql"

export const db= mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"372databaseproject",
    database:"movie_site"
})