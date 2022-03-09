import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index',{
    books
    })
  })
}

function newBook(req, res) {
  res.render('books/new')
}

function create(req, res) {
  req.body.title = false
  Book.create(req.body)
  .then(() => {
    res.redirect('/books')
  })
}




export {
  index,
  create,
  newBook as new,
  
}