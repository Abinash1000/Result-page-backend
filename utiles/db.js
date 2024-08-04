const mongoose = require('mongoose');
require("dotenv").config();
const URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connect successful to DB")
    } catch (error) {
        console.log("Can't Connect to the database");
        process.exit(0);
    }
}
module.exports = connectDB;
