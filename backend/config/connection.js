// <<<<<<< Updated upstream
// const mysql = require("mysql");
// const connection = mysql.createConnection({host: "localhost", user: "root", database: "ticketeer"})
// =======
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
// >>>>>>> Stashed changes

// const getConnection = () => {
//     connection.connect((error) => {
//         if (error){
//             console.log("error connecting to db " + error);
//         }
//         else{
//             console.log("db connected");
//         }
//     })
//     };
// module.exports = {getConnection};