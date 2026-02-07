const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');
const { items } = require('./schema');

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'wimf',
});

const db = drizzle(pool);

module.exports = { db, items };
