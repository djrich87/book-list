import { Book } from '../models/book.js'

function newBook(req, res) {
  res.render('books/new')
}





export {
  newBook as new,
}