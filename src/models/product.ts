import client from "../configs/database";
import { Product } from "../interfaces/product..interface";


export class Products {
      async index(): Promise<Product[]> {
            try {
                  const connection = await client.connect();
                  const sql = "SELECT * FROM products";
                  const { rows } = await connection.query(sql);
                  connection.release();
                  return rows;
            } catch (error) {
                  throw new Error(`Error: ${error}`);
            }
      }
      async show(id: number): Promise<Product> {
            try {
                  const connection = await client.connect();
                  const sql = "SELECT * FROM products WHERE id=($1)";
                  const { rows } = await connection.query(sql, [id]);
                  connection.release();
                  return rows[0];
            } catch (err) {
                  throw new Error(`Could not find product ${id}. ${err}`);
            }
      }
      async create(product: Product): Promise<Product[]> {
            const { name, price } = product;
            try {
                  const connection = await client.connect();
                  const sql = "INSERT INTO products (name, price) VALUES($1, $2) RETURNING *";
                  const { rows } = await connection.query(sql, [name, price]);
                  connection.release();
                  return rows[0];
            } catch (error) {
                  throw new Error(`Error: ${error}`);
            }
      }
}
