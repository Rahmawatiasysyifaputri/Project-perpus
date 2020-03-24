require("dotenv").config();
const express = require('express')
const app = express()
const petugasRouter = require("./api/petugas/petugas.router")

app.use(express.json())
app.use("/api/petugas", petugasRouter)

app.listen(process.env.APP_PORT, ()=>{
    console.log("running on port "+process.env.APP_PORT)
})