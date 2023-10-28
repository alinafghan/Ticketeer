const oracledb = require('oracledb');

async function getConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: 'c##alihaider',
      password: '123',
      connectString: 'localhost/ticketeer'
    });
    return connection;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getConnection };

