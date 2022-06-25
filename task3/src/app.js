const express=require("express")
const path = require("path")
const hbs = require("hbs")
const postroutes = require("../routes/post.routes")

const app=express()
app.set("view engine","hbs")


app.use(express.static(path.join(__dirname,"../resources/public")))



app.set("views",path.join(__dirname,"../resources/views"))
hbs.registerPartials(path.join(__dirname,"../resources/layouts"))
app.use(postroutes)



module.exports=app
