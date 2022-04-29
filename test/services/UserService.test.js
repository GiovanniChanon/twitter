const UserService = require('../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1,"GiovanniChanon","Gio")

        expect(user.username).toBe("GiovanniChanon")
        expect(user.name).toBe("Gio")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"GiovanniChanon","Gio")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("GiovanniChanon")
        expect(userInfoInList[2]).toBe("Gio")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1,"GiovanniChanon","Gio")
        UserService.updateUserUsername(user, "gioo")

        expect(user.username).toBe("gioo")
    })
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1,"GiovanniChanon1","Gio")
        const user2 = UserService.create(1,"GiovanniChanon2","Gio")
        const user3 = UserService.create(1,"GiovanniChanon3","Gio")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toContain("GiovanniChanon1")
        expect(usernames).toContain("GiovanniChanon2")
        expect(usernames).toContain("GiovanniChanon3")
    })
})