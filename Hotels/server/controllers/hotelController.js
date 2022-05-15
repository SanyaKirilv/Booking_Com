const {Hotel} = require('../models/models')
const ApiError = require('../error/ApiError')

class HotelController{
    async create(req, res){
        const {name, location} = req.body
        const hotel = await Hotel.create({name, location})
        return res.json({hotel})
    }

    async getAll(req, res){
        const hotels = await Hotel.findAll()
        return res.json({hotels})
    }

    async getOne(req, res){
        
    }
}

module.exports = new HotelController()