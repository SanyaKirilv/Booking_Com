const {Room} = require('../models/models')
const ApiError = require('../error/ApiError')

class RoomController{
    async create(req, res, next){
        try{
            const{name, typeId, hotelId} = req.body
            const room = await Room.create({name, typeId, hotelId})
            return res.json(room)
        } catch(err){
            next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res){
        const rooms = await Room.findAll()
        return res.json(rooms)
    }

    async getOne(req, res){
        
    }
}

module.exports = new RoomController()