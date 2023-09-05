const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    pageCount:{
        type:Number
    },
    genre:{
        type: String,
    },
    description:{
        type: String,
    },
    pdfUrl:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('books', bookSchema);