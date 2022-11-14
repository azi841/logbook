const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const sgMail = require('@sendgrid/mail');
const crypto = require ('crypto')
var async = require("async");
const bcrypt = require('bcryptjs');



//Authenticate Email
router.post('/authenticateMail', (req, res, next) => {

  const email = req.body.email;
  const token = crypto.randomBytes(20).toString('hex');
  User.findOne({ email: email }, function(err, user) {
    if (!user) {
      res.send({success: false});
      return res.status(404)
    }
    else {
      res.send({success: true})
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      sgMail.setApiKey('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');
      const msg = {
        to: req.body.email,
        from: 'logbooksuppservice@gmail.com', // Use the email address or domain you verified above
        subject: 'Your change password request', 
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body><p style="font-family:Josefin Sans, sans-serif">Hi!<br> There was a request to change your password! <br> If you did not make this request then please ignore this email.<br><br> Otherwise please follow this <a href="http://localhost:4200/changepassword/${token}">link</a> to change your password</p></body></html>`,   
      };
      user.save().then(async()=>{
        await sgMail.send(msg)
        return res.status(200).json({status: 'ok'});
      }).catch(err =>{
       return res.status(403);
      }) 
    }
  });
});

    
router.post('/reset/:token', async (req, res) => {
  const token = req.params.token;
  try {
    const user = await User.findOne({
      resetPasswordToken: token
    });
    if (!user) return res.status(400).send("invalid link or expired");
    if (Date.parse(user.resetPasswordExpires) * 1000 < Date.now()) {
      return res.status(400).json({success:'false'})
    }

    user.password = bcrypt.hashSync(req.body.password, 10);
    
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.send("password reset sucessfully.");

  }
  catch (error) {
    res.send("An error occured");
    console.log(error);
  }
  return res.json(token);
})

// Authenticate user
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            surname: user.surname,
            address: user.address,
            phone: user.phone,
            role: user.role
          }
        });
      } 
      else{
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


//Register user
router.post('/register', (req,res,next) => {
  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    address: req.body.address,
    phone: req.body.phone,
    role: req.body.role
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: "Failed to register user"})
    }else {
      res.json({success: true, msg: "User registered"})
    }
  });
});

router.get('/getStudents', (req,res,next) => {
  User.find({role:"Student"})
  .exec(function(err, users){
    if(err){
      console.log("Error retrieving users")
    }
    else {
      res.json(users);
    }
    });
});

router.get('/getProfessors', (req,res,next) => {
  User.find({role:"Professor"})
  .exec(function(err, users){
    if(err){
      console.log("Error retrieving users")
    }
    else {
      res.json(users);
    }
    });
});

module.exports = router;