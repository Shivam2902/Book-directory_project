const express = require('express')
const router = express.Router()
const Books = require('../model/Books')

router.get('/', async(req, res) => {
   try{
    const p = await Books.find()
    res.json(p)
   }catch(err){
    res.send('Error ' +err)
   }
})


router.get('/:id', async(req, res) =>{
    try{
        const p = await Books.findById(req.params.id)
        if(!p){
            res.send("Data not exists")
        }
        res.json(p)
    }catch(err){
        res.send('Error ' +err)
    }
    })


router.post('/', async(req, res) =>{
    const p = new Books({
        title: req.body.title,
        author: req.body.author,
        pageCount: req.body.pageCount,
        genre: req.body.genre,
        description: req.body.description,
        pdfUrl: req.body.pdfUrl
    })
    try{
        const a = await p.save()
        res.json(a)
    }catch(err){
        res.send('Error ' +err)
    }
})


router.patch('/:id', async(req, res) =>{
    try{
        const p = await Books.findById(req.params.id)
        Books.pageCount = req.body.pageCount

        const a = await p.save()
        res.json(a)
    }catch(err){
        res.send('Error ' +err) 
    }
})


router.put('/:id', async(req, res) => {
    try{
        const id = req.params.id
        const {title, author, pageCount, genre, description, pdfUrl} = req.body
        if(title && author && pdfUrl){
            const updateBook = await Books.findByIdAndUpdate(
                id, title, author, pageCount, genre, description, pdfUrl,
                {new:true}
            )
            res.json(updateBook)
        }else{
            res.send("Do Updation for all field ")
        }
        
    }catch(err){
        res.send('Error ' +err)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        const a = await Books.findByIdAndDelete(req.params.id)
        res.send("deleted")
    }catch(err){
        res.send(err)
    }
})

module.exports = router;