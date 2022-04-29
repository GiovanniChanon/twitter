const User = require('../models/User')

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
        const info = []

        info[0] = user.id
        info[1] = user.username
        info[2] = user.name
        info[3] = user.bio

        return info
    }
}

module.exports = UserService