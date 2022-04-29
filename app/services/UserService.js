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
    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }
    static getAllUsernames(users){
        const usernames = []

        for (let i = 0; i < users.length; i++) {
            usernames.push(users[i].username);
        }

        return usernames
    }
}

module.exports = UserService