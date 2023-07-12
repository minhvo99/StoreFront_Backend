import client from "../configs/database";
import bcrypt from "bcrypt";
import { BaseUser, User } from "../interfaces/user.interface";

export class Users {
      async index(): Promise<BaseUser> {
            try {
                  const connection = await client.connect();
                  const sql = "SELECT * FROM users";
                  const { rows } = await connection.query(sql);
                  console.log(rows);

                  connection.release();
                  return rows;
            } catch (error) {
                  throw new Error(`Can not get user: ${error}`);
            }
      }
      async show(id: number): Promise<BaseUser> {
            try {
                  const sql = "SELECT * FROM users WHERE id=($1)";
                  const connection = await client.connect();
                  const { rows } = await connection.query(sql, [id]);
                  connection.release();
                  return rows[0];
            } catch (err) {
                  throw new Error(`Could not find user ${id}. ${err}`);
            }
      }
      async create(user: User): Promise<User> {
            const { firstname, lastname, username, password_digest } = user;
            try {
                  const sql =
                        "INSERT INTO users (firstname, lastname, username, password_digest) VALUES($1, $2, $3, $4) RETURNING *";
                  const hash = bcrypt.hashSync(
                        password_digest + process.env.BCRYPT_PASSWORD,
                        parseInt(process.env.SALT_ROUNDS as string, 10)
                  );
                  const connection = await client.connect();
                  const { rows } = await connection.query(sql, [firstname, lastname, username, hash]);

                  connection.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`unable create user (${user.username}): ${err}`);
            }
      }
      async update(newUserData: BaseUser): Promise<User> {
            try {
                  const sql =
                        "UPDATE users SET firstname = $2, lastname = $3, username = $4, password_digest = $5 WHERE id = $1 RETURNING *";
                  const connection = await client.connect();
                  const { rows } = await connection.query(sql, [
                        newUserData.id,
                        newUserData.firstname,
                        newUserData.lastname,
                        newUserData.username,
                        newUserData.password_digest,
                  ]);
                  connection.release();
                  return rows[0];
            } catch (err) {
                  throw new Error(`Could not update user ${newUserData.firstname} ${newUserData.lastname}. ${err}`);
            }
      }

      async deleteUser(id: number): Promise<boolean> {
            try {
                  const sql = "DELETE FROM users WHERE id=($1)";
                  const connection = await client.connect();
                  await connection.query(sql, [id]);
                  connection.release();
                  return true;
            } catch (err) {
                  throw new Error(`Could not delete user ${id}. ${err}`);
            }
      }
}
