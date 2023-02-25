import nodemailer from 'nodemailer'
export function sendEmail(email, token) {
    console.log(email)
 
 
    const mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_NAME, // Your email id
            pass: process.env.EMAIL_PASSWORD // Your password
        }
    });
 
    const mailOptions = {
        from: 'ggergibtnaz@gmail.com',
        to: email,
        subject: 'Email verification - Tutsmake.com',
        html: '<p>You requested for email verification, kindly use this <a href="http://localhost:8000/auth/verify?token=' + token + '">link</a> to verify your email address</p>'
 
    };
 
    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            return 1
        } else {
            return 0
        }
    });
}
