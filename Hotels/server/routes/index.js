const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const roomRouter = require('./roomRouter')
const hotelRouter = require('./hotelRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/hotel', hotelRouter)
router.use('/room', roomRouter)
router.use('/type', typeRouter)

module.exports = router