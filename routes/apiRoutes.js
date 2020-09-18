// date routes from data base
//always put backend routes outside of client
const router = require("express").Router();
const axios = require("axios");
const db = require("../models")
router.get("/api/googleBooks/:title", function (req, res) {
  const title = req.params.title;
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    .then(function (results) {
      res.json(results.data.items);
    });
});

router.post("/api/googleBooks",function(req,res){
    db.Book.create(req.body).then(function(results){
        console.log(results)
        res.json(results)
    })
})

router.delete("/api/googleBooks/:id", function(req,res){
    const id = req.params.id
    db.Book.deleteOne({_id:id}).then(function(results){
        res.json(results)
    })
})

router.get("/api/books", function(req,res){
    db.Book.find().then(function(results){
        res.json(results)
    })
})
module.exports = router;
