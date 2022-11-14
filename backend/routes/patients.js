const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

//Register patient
router.post('/register', (req,res,next) => {
    let newPatient = new Patient({
      name: req.body.name,
      surname: req.body.surname,
      address: req.body.address,
      phone: req.body.phone,
      diagnosis: req.body.diagnosis,
      isDiabetic: req.body.isDiabetic,
      studentName: req.body.studentName
    });

    Patient.addPatient(newPatient, (err, patient) => {
      if(err) {
        res.json({success: false, msg: "Failed to register patient"})
      }else {
        res.json({success: true, msg: "Patient registered"})
      }
    });
  });

  router.get('/getPatients', (req,res,next) => {
    Patient.find()
    .exec(function(err, patients){
      if(err){
        console.log("Error retrieving patients")
      }
      else {
        res.json(patients);
      }
      });
  });
  
  module.exports = router;