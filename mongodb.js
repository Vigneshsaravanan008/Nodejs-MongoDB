const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URL;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("Mongodb database connected");
})

//Routes call
const exerciseRouter = require('./routes/Exercise');
const UserRouter = require('./routes/User');

app.use('/exercise', exerciseRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
    console.log("server connected");
})