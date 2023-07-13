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
            try {
                  const connection = await client.connect();
                  const sql = "INSERT INTO products (name, price,description) VALUES($1, $2, $3) RETURNING *";
                  const { rows } = await connection.query(sql, [product.name, product.price, product.description]);
                  connection.release();
                  return rows[0];
            } catch (error) {
                  throw new Error(`Error: ${error}`);
            }
      }
      async update(p: Product): Promise<Product[]> {
            try {
                  const connection = await client.connect();
                  const sql = `UPDATE products SET name = $2, price = $3, description = $4 WHERE id = $1 RETURNING *`;
                  const { rows } = await connection.query(sql, [p.id, p.name, p.price, p.description]);
                  connection.release();
                  return rows[0];
            } catch (error) {
                  throw new Error(`Could not update product ${p.id}. Error: ${error}`);
            }
      }
      async delete(id: number): Promise<Product[]> {
            try {
                  const connection = await client.connect();
                  const sql = `DELETE FROM products WHERE id=($1)`;
                  const { rows } = await connection.query(sql, [id]);
                  connection.release();
                  return rows[0];
            } catch (error) {
                  throw new Error(`Error: ${error}`);
            }
      }
}
