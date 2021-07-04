// @ts-ignore
import client from "../database";
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config();

export type User = {
  id?: string,
  first_name: string,
  last_name: string,
  username: string,
  password: string,
  password_digest?: string,
  token?: string,
  email: string
}

export class UserStore {
  async create(u: User): Promise<string> {
    try {
      const sql = 'INSERT INTO users (first_name, last_name, username, ' +
        'email, password_digest, token) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';

      const {
        BCRYPT_PASSWORD: pepper,
        SALT_ROUNDS: saltRounds,
        TOKEN_SECRET
      } = process.env;


      const hash = bcrypt.hashSync(
        u.password + pepper,
        // @ts-ignore
        parseInt(saltRounds)
      );

      console.log(hash, 'hash');

      // @ts-ignore
      const token = jwt.sign({ user: u }, TOKEN_SECRET);
      // @ts-ignore
      const conn = await client.connect();

      const result = await conn.query(sql, [u.first_name, u.last_name, u.username,
        u.email, hash, token]);

      const user = result.rows[0];

      conn.release();

      return token;
    } catch (err) {
      throw new Error(`Could not add new user. Error: ${err}`)
    }
  }

  async authenticate(username: string, password: string): Promise<User | null> {

    const sql = 'SELECT password_digest from users WHERE username=($1)';

    // @ts-ignore
    const conn = await client.connect();

    const result = await conn.query(sql, [username]);

    if (result.rows.length) {

      const user = result.rows[0];
      const { BCRYPT_PASSWORD: pepper } = process.env;

      if(bcrypt.compareSync(password + pepper, user.password_digest)) {
        return user;
      }
    }
    return  null;
  }
}
