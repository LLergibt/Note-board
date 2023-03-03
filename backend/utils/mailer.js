import nodemailer from 'nodemailer'


export function sendEmail(email, emailText) {
    const mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_NAME, 
            pass: process.env.EMAIL_PASSWORD 
    }
    });

    const mailOptions = {
        from: 'ggergibtnaz@gmail.com',
        to: email,
        subject: 'Email verification',
        html: emailText
 
    };
 
    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            return 1
        } else {
            return 0
        }
    });
}

