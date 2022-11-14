const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
var PatientSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  isDiabetic: {
    type: Boolean,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
});
 
const Patient = module.exports = mongoose.model('Patient', PatientSchema);
 
module.exports.getPatientById = function(id, callback) {
  Patient.findById(id, callback);
}

module.exports.addPatient = function(newPatient, callback) {
    newPatient.save(callback);
}
