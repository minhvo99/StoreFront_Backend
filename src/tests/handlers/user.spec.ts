import request from "request";
import { token } from "../../middleware/authorization";
const endpoint = "http://localhost:3000/users";

describe("User API", () => {
      const user = {
            firstname: "test",
            lastname: "test",
            username: "admin",
            password_digest: "123",
      };
      it("should return list user", (done) => {
            request.get(endpoint, (err, res) => {
                  expect(res.statusCode).toEqual(200);
                  done();
            });
      });
      it("should return user bt id", (done) => {
            request.get(`${endpoint}/1`, (err, res) => {
                  expect(res.statusCode).toEqual(200);
                  done();
            });
      });
      it("should create user", (done) => {
            request.post(endpoint, { json: true, body: user }, (err, res) => {
                  expect(res.statusCode).toEqual(201);
                  done();
            });
      });
      it("should update user", (done) => {
            request.put(
                  `${endpoint}/6`,
                  {
                        json: true,
                        auth: { bearer: token(user) },
                        body: {
                              id: "8",
                              firstname: "updated",
                              lastname: "updated",
                              username: "admin",
                              password_digest: "1234",
                        },
                  },
                  (err, res) => {
                        expect(res.statusCode).toEqual(200);
                        done();
                  }
            );
      });
      it('should delete user', (done) => {
        request.delete(`${endpoint}/8`,{
            json: true,
            auth: { bearer: token(user) }
      },
      (err, res) => {
            expect(res.statusCode).toEqual(200);
            done();
      })
      });
});
