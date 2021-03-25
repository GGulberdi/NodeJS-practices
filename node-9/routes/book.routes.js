const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

//Model
const BookModel = require('../models/Book')

router.get('/', (req, res) => {
    // BookModel.find({}, 'title coAuthor ')
    BookModel.find({isbn:{$exists:false}}, 'title coAuthor isbn')// brings data with isbn
              .then((result)=>{res.json(result)})
              .catch((err)=>{res.json(err)})

    // res.send('GET request to the Book Page')
  })
  
//   router.get('/', (req, res) => {
//     BookModel.find({},'title coAuthor')
// .then((result)=>{res.json(result)})
// .catch((err)=>{res.json(err)})
// })

router.get('/aggregate-lookup', (req, res) => {
    
    BookModel.aggregate([
        {
            $match:{_id: mongoose.Types.ObjectId("603abcbf798d9b2eb4f046a4")}
        },
        { 
        $lookup:{from:"authors",//AuthorsModel.collection.name
        localField:"authorId",
        foreignField:"_id",
        as:"author"
     }
    },
    {
        // $project:{title:1, "author.name":1}
        $project:{title:1, authorName:"$author.name"}

    }

])
              .then((result)=>{res.json(result)})
              .catch((err)=>{res.json(err)})
  })

  router.post('/', function (req, res) {
   const newBook = new BookModel(req.body)
   newBook.save()
              .then((result)=>{res.json(result)})
              .catch((err)=>{res.json(err)})
  })
  
  module.exports = router