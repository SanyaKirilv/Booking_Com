const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketRoom = sequelize.define('basket_room',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Room = sequelize.define('room',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, defaultValue: " "},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    status: {type: DataTypes.STRING, defaultValue: "Free"}
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false} 
})

const TypeInfo = sequelize.define('type_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false} 
})

const Hotel = sequelize.define('hotel',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.STRING, allowNull: false} 
})

const HotelInfo = sequelize.define('hotel_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false} 
})

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const TypeHotel = sequelize.define('type_hotel',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketRoom)
BasketRoom.belongsTo(Basket)

Type.hasMany(Room)
Room.belongsTo(Type)

Hotel.hasMany(Room)
Room.belongsTo(Hotel)

Room.hasMany(Rating)
Rating.belongsTo(Room)

Room.hasMany(BasketRoom)
BasketRoom.belongsTo(Room)

Hotel.hasMany(HotelInfo)
HotelInfo.belongsTo(Hotel)

Type.hasMany(TypeInfo)
TypeInfo.belongsTo(Type)

Type.belongsToMany(Hotel, {through: TypeHotel })
Hotel.belongsToMany(Type, {through: TypeHotel })

module.exports = {
    User, 
    Basket,
    Room,
    Hotel,
    Type,
    TypeInfo,
    HotelInfo,
    TypeHotel,
    BasketRoom,
    Rating
}