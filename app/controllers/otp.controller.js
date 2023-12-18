const AWS = require('aws-sdk');
const OTP = require('../models/otp.model');
const otpGenerator = require('otp-generator');

const sns = new AWS.SNS({ region: 'your-region' }); // Replace 'your-region' with the AWS region you're using

const generateOTP = () => {
  return otpGenerator.generate(6, { upperCase: false, specialChars: false });
};

const sendOTP = async (req, res) => {
  const { mobileNumber, email } = req.body;

  // Generate OTP
  const otp = generateOTP();

  try {
    // Save OTP to the database with expiration time (e.g., 5 minutes from now)
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 5);

    await OTP.create({ mobileNumber, email, otp, expiresAt });

    // Send OTP via SMS using AWS SNS
    const smsParams = {
      Message: `Your Verification Code is: ${otp}`,
      PhoneNumber: `+${mobileNumber}`, // Assuming mobileNumber is in international format
    };

    await sns.publish(smsParams).promise();

    // Send OTP via Email (you may use a different service for email)
    const emailParams = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: { Data: `Your Verification Code is: ${otp}` },
        },
        Subject: { Data: 'OTP Verification' },
      },
      Source: 'your-email@example.com', // Replace with your email address
    };

    await sns.publish(emailParams).promise();

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error saving/sending OTP:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const verifyOTP = async (req, res) => {
  const { mobileNumber, email, otp } = req.body;

  try {
    // Retrieve OTP from the database
    const otpRecord = await OTP.findOne({ where: { [Sequelize.Op.or]: [{ mobileNumber, otp }, { email, otp }], expiresAt: { [Sequelize.Op.gte]: new Date() } } });

    if (otpRecord) {
      res.json({ message: 'OTP verification successful' });
    } else {
      res.status(401).json({ message: 'Invalid OTP or OTP expired' });
    }
  } catch (error) {
    console.error('Error retrieving OTP from the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { sendOTP, verifyOTP };
