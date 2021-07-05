// @ts-ignore
import client from '../database';

export class DashboardQueries {
  // Get all products that have been included in orders
  async productsInOrders(): Promise<{ name: string, price: number, order_id: string }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT name, price, order_id FROM products INNER JOIN order_products ON product.id = order_products.id';

      const result = await conn.query(sql);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`unable get products and orders: ${err}`);
    }
  }

  async currentOrderByUser(id: string): Promise<{ first_name: string, last_name: string }[]> {
    try {
      //@ts-ignore
      const conn = await client.connect()
      const sql = 'SELECT orders.id, users.first_name, users.last_name, orders.status FROM users INNER JOIN orders ' +
        'ON users.id = orders.user_id WHERE users.id = $1';

      const result = await conn.query(sql, [1])

      conn.release()

      // Return the last order as the current one
      return result.rows;
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    }
  }

}
