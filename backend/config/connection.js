const oracledb = require('oracledb');

async function getConnection() {
  try {
    const connection = await oracledb.getConnection({
      user: 'c##hiba3',
      password: '123',
      connectString: 'localhost/orcl'
    });
    return connection;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getConnection };
