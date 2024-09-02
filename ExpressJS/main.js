var express = require("express")
var app = express();
app.get("/myname",(req,res)=>{
res.json({"msg":"kaniska"});
});

// http://localhost:8080/myname
app.listen(8080,()=>{
    console.log("server started");
})