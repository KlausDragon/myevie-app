const mongoose = require('mongoose');
// import dotenv
const cors = require('cors');
const express = require('express');
require('dotenv').config()
const app = express();

app.use(express.json());
app.use(cors());

//redirect for routes
app.use('/profile', require('./src/routes/profile'));
app.use('/weekly', require('./src/routes/weekly'));
app.use('/challenge', require('./src/routes/challenges'));
app.use('/friends', require('./src/routes/friends'));

app.listen(5001, () => {
    console.log('server is now listening');
});

mongoose.connect(process.env.DB_URL, { dbName: 'evie' });
