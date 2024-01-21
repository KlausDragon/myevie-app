const mongoose = require('mongoose');
// import dotenv
const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors());

//redirect for routes
app.use('/profile', require('./routes/profile'));

app.listen(5001, () => {
    console.log('server is now listening');
});

mongoose.connect('mongodb+srv://willk:zJTlV8YNHrdusQlg@eviecluster.0dgx4zw.mongodb.net/?retryWrites=true&w=majority', { dbName: 'evie' });
