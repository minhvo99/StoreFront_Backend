import { User } from "../../interfaces/user.interface";
import { Users } from "../../models/users";

const store = new Users();

describe("User Model", () => {
      it("should create a user", async () => {
            const result: User = await store.create({
                  username: "test",
                  firstname: "test",
                  lastname: "test",
                  password_digest: "postgres",
            });           
            expect(result.username).toEqual('test');
      });
      it("should return list user", async () => {
            const users: User[] = await store.index();            
            expect(users.length).toEqual(0)
      });

      it('should return a list of users', async () => {
            const result: User[] = await store.index()
            expect(result.length).toEqual(0)
        })
    
        it('should return the correct user', async () => {
            const users: User[] = await store.index() 
            const userId = users[0].id as number
    
            const result = await store.show(userId)
            expect(result.username).toEqual('test')
        })
    
        it('should delete the user', async () => {
            let users: User[] = await store.index()
            const userId = users[0].id as number
    
            await store.deleteUser(userId)
            users = await store.index()
            expect(users.length).toEqual(0)
        })
});
