const Task = require("../models/task");
const fschema = require("../models/form");
// home controllers
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error fetching tasks", err);
      return;
    }
    // task_list
    return res.render("home", {
      title: "TODO APP",
      task_list: tasks,
    });
  });
};

// module.exports.form = function (req, res) {
//   fschema.find({} ,function(err,form){
//     if(err){
//       console.log("error Fetching formdate",err);
//       return;
//     }
//     return res.render("form",{
//       title : "form"
//     })
//   })
// }