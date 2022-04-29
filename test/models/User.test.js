const User = require('../../app/models/User');

describe("Unit Tests for User class", () => {
    test('Create an User Object', () => {
        const user = new User(1,"GiovanniChanon","Gio","Bio","dateCreated","lastUpdated")

        expect(user.id).toBe(1)
        expect(user.username).toBe("GiovanniChanon")
        expect(user.name).toBe("Gio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})