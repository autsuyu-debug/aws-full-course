require('dotenv').config()
const { Pool } = require('pg')

console.log({
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
});

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'url_shortener',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
  ssl: false
});

// Test the database connection
pool.connect()
  .then(client => {
    console.log('✅ Successfully connected to PostgreSQL!')
    client.release()
  })
  .catch(err => console.error('❌ Database connection error:', err));

module.exports = pool;
