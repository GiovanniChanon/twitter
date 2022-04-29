const User = require('../../app/models/User');

describe("Unit Tests for User class", () => {
    test('Create an User Object', () => {
        const user = new User(1,"GiovanniChanon","Gio","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("GiovanniChanon")
        expect(user.name).toBe("Gio")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1,"GiovanniChanon","Gio","Bio")

        expect(user.getUsername).toBe("GiovanniChanon")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
    test('Add setters', () => {
        const user = new User(1,"GiovanniChanon","Gio","Bio")

        user.setUsername = "Giovanni"
        expect(user.username).toBe("Giovanni")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
})