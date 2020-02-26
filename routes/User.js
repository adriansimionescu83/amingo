const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const UserModel = require('../models/User.js')

router.post(
    '/register', // http://www.myapp.com/user/register
    (req, res)=>{

        const formdata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            occupation: req.body.occupation
        }
    const theUserModel = new UserModel(formdata);
        // Step 1. Generate a salt
    bcrypt.genSalt(
    (err,salt)=>{
        // Step 2. Generate the hashed password
        bcrypt.hash(
            theUserModel.password, // User password
            salt, // Generated salt
            (err, hashedPassword)=>{
                // Step 3. Replace the password value in formdata
                theUserModel.password = hashedPassword //@3dfdFDFDS22231!@
                // Step 4. Save to database
                theUserModel.save();
                res.send("User registration complete");
            }// How we handle the new hashed password
        )
    }
)
    }
)

router.post(
    'login', // http://www.myapp.com/user/login
    (req, res)=>{
        const formdata = {
            email: req.body.email,
            password: req.body.password,
        }
        // Step 1. Check to see if email exists
        UserModel
        .find({email: formdata.email})
        .then((isMatch)=>{
            if(isMatch.length>0){
            // Step 2. If email exists, Check password
            // Step 3. Compare password with database
                // Step 4. Generate JWT (Javascript Web Token)
                // Step 5. Send it to the client
            // Step 3.b. If password is not compatible
                // Step 6. Exit
                res.send('Email found');
            }
            // Step 2.b. If email doesn't exist, throw error
            else{
                res.send('Please check email and password');
            }
        }
        )
    }
)

module.exports = router;