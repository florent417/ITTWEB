var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('studentForm', { title: 'Black board' });
});

// POST student data
router.post("/add_student", function(req, re, next){
  console.log(req.body.name);
  console.log(req.body.grade);
})

module.exports = router;
