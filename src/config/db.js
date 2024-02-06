const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECTION);
        console.log(`MongoDB Connected to ${conn.connection.host}`);
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;