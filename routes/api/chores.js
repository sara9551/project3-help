const choresRoutes = require("express").Router();
var Chores = require('./Chores')

//"Get" chores
choresRoutes.route("/all").get(function(_req, res, _next) {
  Chores.find(function (err, chores) {
    if (err){
      res.send(err);
    }
  res.json(chores);
})
})

//Add a chore
choresRoutes.route("/add").post(function(req, res) {
  Chores.create(
    {
      name: req.body.name,
      done: false
    },
    function (_error, chore) {
  if(err) {
    res.status(400).send("Error")
  }
  res.status(200).json(chore)
}
)
})

//Delete a chore
choresRoutes.route("/dele/:id").get(function(req, res, next) {
  var id = req.params.id
  Chores.findAndDelete(id, function (err, _chore){
    if(err){
      return next (new Error("Error"))
    }
    res.json("You deleted it sucessfully");
  })
})

module.exports = choresRoutes;