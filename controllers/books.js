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

function show(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/show', {
      book
    })
  })
}

function edit(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/edit', {
      book
    })
  })
}

function update(req, res) {
  req.body.title = !!req.body.title
  Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(() => {
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/books')
  })
}

export {
  deleteBook as delete,
  update,
  edit,
  show,
  index,
  create,
  newBook as new,
}