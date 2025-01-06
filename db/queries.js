const pool = require('./pool')

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages')
  return rows
}

async function insertUsernameAndMessage(username, text) {
  await pool.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [
    username,
    text,
  ])
}

async function searchByUsername(searchTerm) {
  const { rows } = await pool.query(
    'SELECT * FROM messages WHERE username ILIKE $1',
    [`%${searchTerm}%`]
  )
  return rows
}

async function searchByMessage(searchTerm) {
  const { rows } = await pool.query(
    'SELECT * FROM messages WHERE text ILIKE $1',
    [`%${searchTerm}%`]
  )
  return rows
}

async function deleteAllMessages() {
  await pool.query('DELETE FROM messages')
}

module.exports = {
  getAllMessages,
  insertUsernameAndMessage,
  searchByUsername,
  searchByMessage,
  deleteAllMessages,
}
