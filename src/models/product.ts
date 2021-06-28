import client from "../database";

export type Product = {
  id: number,
  name: string,
  color: string,
  quantity: number
}

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
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
      const sql = 'SELECT * FROM books WHERE id=($1)'
      // @ts-ignore
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`)
    }
  }
  async create(p: Product): Promise<Product> {
    try {
      const sql = 'INSERT INTO books (name, color, quantity) VALUES($1, $2, $3) RETURNING *'
      // @ts-ignore
      const conn = await Client.connect()

      const result = await conn
        .query(sql, [p.name, p.color, p.quantity])

      const book = result.rows[0]

      conn.release()

      return book
    } catch (err) {
      throw new Error(`Could not add new book ${name}. Error: ${err}`)
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const sql = 'DELETE FROM books WHERE id=($1)'
      // @ts-ignore
      const conn = await Client.connect()

      const result = await conn.query(sql, [id])

      const book = result.rows[0]

      conn.release()

      return book
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`)
    }
  }

}
