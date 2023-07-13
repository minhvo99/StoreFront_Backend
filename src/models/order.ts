import { OrderProduct, Order } from "../interfaces/order.interface";
import client from "../configs/database";

export class OrderModel {
      async index(): Promise<Order[]> {
            try {
                  const cnn = await client.connect();
                  const sql = "SELECT * FROM orders";
                  const { rows } = await cnn.query(sql);
                  cnn.release();
                  return rows[0];
            } catch (error) {
                  throw new Error(`Can not get order: ${error}`);
            }
      }
      async show(id: number): Promise<Order> {
            try {
                  const sql = "SELECT * FROM orders WHERE id=($1)";

                  const cnn = await client.connect();

                  const { rows } = await cnn.query(sql, [id]);
                  cnn.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }

      async create(order: Order): Promise<Order> {
            try {
                  const sql = "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";

                  const cnn = await client.connect();

                  const { rows } = await cnn.query(sql, [order.user_id, order.status]);
                  cnn.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }

      async update(order: Order): Promise<Order> {
            try {
                  const sql = `UPDATE orders SET user_id = $2, status = $3 WHERE id = $1 RETURNING *`;

                  const cnn = await client.connect();

                  const { rows } = await cnn.query(sql, [order.id, order.user_id, order.status]);
                  cnn.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }

      async delete(id: number): Promise<Order> {
            try {
                  const conn = await client.connect();
                  const orderProductsSql = 'DELETE FROM order_products WHERE order_id=($1)';
                  await conn.query(orderProductsSql, [id]);
                  const sql = 'DELETE FROM orders  WHERE id=($1)'

                  const { rows } = await conn.query(sql, [id]);
                  conn.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }

      async getCurrentOrders(id: number) {
            try {
                  const conn = await client.connect();
                  const sql = `SELECT *
                         FROM orders
                         WHERE user_id = ($1);`;
                  const { rows } = await conn.query(sql, [id]);
                  conn.release();

                  return rows;
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }

      async addToOrder(product: OrderProduct): Promise<OrderProduct> {
            try {
                  const sql =
                        "INSERT INTO order_products (order_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *";

                  const cnn = await client.connect();

                  const { rows } = await cnn.query(sql, [product.order_id, product.product_id, product.quantity]);
                  cnn.release();

                  return rows[0];
            } catch (err) {
                  throw new Error(`Error: ${err}`);
            }
      }
}
