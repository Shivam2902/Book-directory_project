const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3500;

mongoose.connect('mongodb+srv://Shivam_Yadav_28:yadavShivam280801@cluster0.00ezyeq.mongodb.net/Book-Directory?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('open', () => {
    console.log('Database is connected')
})

app.use(express.json())

const api = require('./operations/api')
app.use('/api', api)

app.listen(port, () => console.log('server ' +port +' started '));