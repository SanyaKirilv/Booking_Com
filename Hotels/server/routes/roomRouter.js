const Router = require('express')
const router = new Router()
const roomController = require('../controllers/roomController')


router.post('/', roomController.create)
router.get('/', roomController.getAll)
router.get('/:id', roomController.getOne)

module.exports = router