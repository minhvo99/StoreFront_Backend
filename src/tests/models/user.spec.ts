import { Users } from "./../../models/users";

const store = new Users();

describe("User Model", () => {
      it("should create a user", async () => {
            const result = await store.create({
                  username: "test",
                  firstname: "Sallie",
                  lastname: "Test",
                  password_digest: "password123",
            });
            expect(result.username).toEqual("test");
      });

      it("should update a user", async () => {
            const users = await store.index();
            const userId = users[0].id;

            const result = await store.update({
                  id: userId,
                  username: "updated",
                  firstname: "updated",
                  lastname: "updated",
                  password_digest: "password123",
            });
            expect(result.username).toEqual("updated");
      });

      it("should return a list of users", async () => {
            const result = await store.index();
            expect(result.length).toEqual(1);
      });

      it("should return the correct user", async () => {
            const users = await store.index();
            const userId = users[0].id as number;

            const result = await store.show(userId);
            expect(result.username).toEqual("updated");
      });

      it("should delete the user", async () => {
            let users = await store.index();
            const userId = users[0].id as number;

            await store.deleteUser(userId);
            users = await store.index();

            expect(users.length).toEqual(0);
      });
});
