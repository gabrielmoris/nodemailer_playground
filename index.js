import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASSWORD = Buffer.from(
//   process.env.EMAIL_PASSWORD,
//   "base64"
// ).toString();
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const PERSONAL_EMAIL = process.env.PERSONAL_EMAIL;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

const sent = await transporter.sendMail({
  from: `Texant Platform <${EMAIL_USER}>`,
  to: EMAIL_USER,
  cc: PERSONAL_EMAIL,
  subject: "Nodemail Test",
  html: `
        <h4>Hi ${PERSONAL_EMAIL}</h4>
        <p>You are receiving this email becauseyou are making a Test with nodemon:</p>


        <p>Please ignore this emailu.</p>

        <p>Best regards,</p>
        <p>Your Test Platform Team</p>
        `,
});

console.log("Sent", sent);
