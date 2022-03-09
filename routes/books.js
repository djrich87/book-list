import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'

const router = Router()

router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)
router.get('/:id', booksCtrl.show)
router.get('/:id/edit', booksCtrl.edit)
router.post('/', booksCtrl.create)
router.put('/:id', booksCtrl.update)
router.delete('/:id', booksCtrl.delete)



export {
  router
}
