const mongoose = require('mongoose')

const dbUrl = process.env.DB_URL;

const connection = async () => {
    try {
        await mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('Database connected successfully'));
    } catch (error) {
        console.log("Database connection Error");
    }
}

module.exports = connection;