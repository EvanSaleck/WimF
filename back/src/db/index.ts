import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { items } from './schema';

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'wimf',
});

export const db = drizzle(pool);
export { items };
