import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();
let client;

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_USER_PASSWORD,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  ENV,
} = process.env;

if (ENV === 'dev') {
  console.log('in dev env');
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_USER_PASSWORD,
  })
}

if (ENV === 'test') {
  console.log('in test env');
  client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_USER_PASSWORD,
  })
}


export default client;
