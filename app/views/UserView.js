const UserService = require('../services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){            
            return {error: "payload no existe"}
        }
        return UserService.create(payload.id, payload.username, payload.name)
    }
}

module.exports = UserView