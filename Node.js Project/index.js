
const express = require("express");

const path = require("path");

const app = express();

const port = 8000;

const db = require("./config/mongoose");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes")); 

app.use(express.urlencoded());

app.use(express.static("assets"));

const Task = require("./models/task");
const form = require("./models/form");
// Create  Task
app.post("/create-form",(req,res)=>{
   form.create(
     {
       fname : req.body.fname,
       lname : req.body.lname
     },
     function(err,form){
       if(err){
         console.log("error is Creating form");
         return;
       }
       console.log(" Hurry! form is Run",form);
       return  res.redirect("back")
     }
   )
})
app.post("/create-task", (req, res) => {

  Task.create( 
    {
      task: req.body.description,
      category: req.body.category,
      date: req.body.date,
     
    },  
    function (err, task) {
      if (err) {
        console.log("Error in creating a task!");
        return;
      }

      console.log("******", task);
      return res.redirect("back");
    }
  );
});

app.post("/delete-task", (req, res) => {
  console.log("Delete Task",req.body);

  let tasks = Object.keys(req.body);

  for (task of tasks) {
    Task.deleteOne({ _id: task }, function (err) {
      if (err) {
        console.log("Error in deleting from database.", err);
        return; 
      } 
    });
  }
  return res.redirect("back");
});


app.listen(port, function (err) {
  if (err) return console.log(`Error: ${err}`);

  console.log(`Server is running on port: ${port}`);
});
