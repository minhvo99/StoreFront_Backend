import { Users } from '../../models/users'

const store = new Users()

describe('User Model', () => {
    it('should create a user', async () => {
        const result = await store.create({
            username: 'test',
            firstname: 'test',
            lastname: 'test',
            password_digest: '123',
        })
        expect(result.username).toEqual('test')
    })

    it('should update a user', async () => {
        const users = await store.index()
        const userId = users[0].id

        const result = await store.update({
            id: userId,
            username: 'update',
            firstname: 'update',
            lastname: 'update',
            password_digest: '123',
        })
        expect(result.username).toEqual('update')
    })

    it('should get list user', async () => {
        const result: any = await store.index()
        expect(result.length).toBeGreaterThan(1)
    })

    it('should get user by id', async () => {
        const users = await store.index()
        const userId = users[0].id as number

        const result = await store.show(userId)
        expect(result.username).toEqual('updated')
    })

    it('should delete the user', async () => {
        let users : any= await store.index()
        const userId = users[3].id as number

        await store.deleteUser(userId)
        users = await store.index()

        expect(users.length).toBeGreaterThan(1)
    })
})
