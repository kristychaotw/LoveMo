let express=require("express");
let app=express();
app.get("/",function(req, res){
  res.send(app.use(express.static('public')))
});


app.listen(3000, function(){
  console.log("伺服器已啟動");
})