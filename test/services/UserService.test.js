const UserService = require('../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1,"GiovanniChanon","Gio")

        expect(user.username).toBe("GiovanniChanon")
        expect(user.name).toBe("Gio")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})