const express = require("express");
const sendMail = require("../utils/sendMail");
const router = express.Router();


router.post("/", async(req, res) => {
    try {
        const { Fname, Lname, email, phone, project, message } = req.body;

        if (!Fname || !Lname || !email || !phone || !project || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        await sendMail({ Fname, Lname, email, phone, project, message });

        res.status(200).json({
            success: true,
            message: "Email sent Successfully"
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

module.exports = router;