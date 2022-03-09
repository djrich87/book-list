import mongoose from "mongoose"

const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: {
    title: String
  },
  title: {
    type: Boolean, 
    read: false,
  },
}, {
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

export {
  Book
}