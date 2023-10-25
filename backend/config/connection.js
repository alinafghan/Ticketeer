const mysql = require("mysql");
const connection = mysql.createConnection({host: "localhost", user: "root", database: "ticketeer"})

const getConnection = () => {
    connection.connect((error) => {
        if (error){
            console.log("error connecting to db " + error);
        }
        else{
            console.log("db connected");
        }
    })
    };
module.exports = {getConnection};