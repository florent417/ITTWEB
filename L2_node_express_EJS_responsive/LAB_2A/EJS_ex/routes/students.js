var express = require('express');
var router = express.Router();

let Student = {
  name: "Invertebrates",
  grade: "Invertebrates"
};

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.render('studentForm', { title: 'Black board' });
});

// POST student data
router.post("/add_student", function(req, re, next){
  students.push(createStudentObj(req));
  console.log(students.length);
});

/* Get all students*/
router.get('/all_students', function(req, res, next) {
  res.render('all_students', { students });
});

let createStudentObj = req =>{
  let student = Object.create(Student);
  student.name = req.body.name;
  student.grade = req.body.grade;
  console.log("Created student. " + student);
  return student;
}

module.exports = router;
