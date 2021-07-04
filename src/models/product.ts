// @ts-ignore
import client from "../database";

export type Product = {
  id?: string,
  name: string,
  color: string,
  quantity: number
}

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products';
      const { rows } = await conn.query(sql);

      conn.release();
      return rows;
    } catch(error) {
      throw new Error(`Can not get products ${error.toString()}`)
    }
  }

  async show(id: string): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Could not find product ${id}. Error: ${err}`)
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const sql = 'INSERT INTO products (name, color, quantity) VALUES($1, $2, $3) RETURNING *';
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn
        .query(sql, [p.name, p.color, p.quantity]);

      const product = result.rows[0];
      conn.release()
      return product

    } catch (err) {
      throw new Error(`Could not add new product. Error: ${err}`)
    }
  }

  async update(p: Product): Promise<Product> {
    try {
      const sql = 'UPDATE products set name = $2, color = $3, ' +
        'quantity = $4 WHERE id = $1';

      // @ts-ignore
      const conn = await client.connect()

      const result =
        await conn.query(sql, [p.id, p.name, p.color, p.quantity]);

      const product = result.rows[0]

      conn.release()

      return product
    } catch (err) {
      throw new Error(`Could not update product ${p.id}. Error: ${err}`)
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const sql = 'DELETE FROM products WHERE id=($1)'
      // @ts-ignore
      const conn = await client.connect()

      const result = await conn.query(sql, [id])

      const product = result.rows[0]

      conn.release()

      return product
    } catch (err) {
      throw new Error(`Could not delete product ${id}. Error: ${err}`)
    }
  }
}
