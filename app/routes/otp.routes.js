const express = require('express');
const bodyParser = require('body-parser');
const otpController = require('../controllers/otp.controller');



module.exports = function(app) {
app.use(bodyParser.json());

// Endpoint to send OTP
app.post('/api/send-otp', otpController.sendOTP);

// Endpoint to verify OTP
app.post('/api/verify-otp', otpController.verifyOTP);


}