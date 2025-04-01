let express = require("express");
let app = express();
let path = require("path");
let ejsmate = require("ejs-mate");
let methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsmate);

app.get("/notes",(req,res)=>{
    res.render("./notes/index.ejs");
});

app.listen(8080,()=>{
    console.log("App listening on port ",8080);
});