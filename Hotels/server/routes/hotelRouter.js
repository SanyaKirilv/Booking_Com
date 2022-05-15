const Router = require('express')
const router = new Router()
const hotelController = require('../controllers/hotelController')


router.post('/', hotelController.create)
router.get('/', hotelController.getAll)
router.get('/:id', hotelController.getOne)

module.exports = router