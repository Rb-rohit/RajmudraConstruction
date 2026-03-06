
const nodemailer = require("nodemailer");

const sendMail = async ({ Fname, Lname, email, phone, project, message }) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "New Contact From Submission",
        html: `
            <h2>New Message Received</h2>
            <p><b>Fist Name:</b> ${Fname}</p>
            <p><b>Last Name:</b> ${Lname}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Project:</b> ${project}</p>
            <p><b>Message:</b> ${message}</p>
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendMail;