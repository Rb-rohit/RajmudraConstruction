const express = require("express");
require("dotenv").config();
const cors = require("cors")

const contactRoute = require("./routes/contact")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});