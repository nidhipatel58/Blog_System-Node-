require("dotenv").config();
let http=require("http");
let express=require("express");
const dbconnect = require("./db/db.connect");
let app=express();
let bodyParser=require("body-parser");
let routes=require("./routes")

    
//body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.set("view engine","ejs")

//routes
app.use("/v1",routes);

app.get("/",(req,res)=>{
   res.render("index")
})

//Database connection:-
dbconnect();

//Server Setup:-
http.createServer(app).listen(process.env.PORT,()=>{
    console.log(`Server Started Successfully! ${process.env.PORT}`);
})