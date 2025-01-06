#! /usr/bin/env node
const dotenv = require('dotenv')
dotenv.config()

const { Client } = require('pg')

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text) 
VALUES
  ('Luffy', 'm1'),
  ('Zoro', 'm2'),
  ('Sanji', 'm3');
`

async function main() {
  console.log('seeding...')
  const client = new Client({
    connectionString: process.env.DB_URI,
  })
  await client.connect()
  await client.query(SQL)
  await client.end()
  console.log('done')
}

main()
