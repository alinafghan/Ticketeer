const { getConnection } = require("../config/connection");

module.exports = {
  removeAllbookings: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = "TRUNCATE TABLE bookings";
      const options = {
        autoCommit: true, // Commit each insert immediately
      };
      await connection.execute(query, [], options);
      // console.log(table.rows);
      res.status(202).send("Deleted");
    } catch (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          // Release the connection when done
          await connection.close();
        } catch (error) {
          console.error("Error closing database connection:", error);
        }
      }
    }
  },
  // populatebookings: async function (req, res){

  //     let connection ;
  //     try {

  //         connection = await getConnection();
  //         const databookings = [
  //             [1,3,2],[2,1,1],[3,2,3,45.45,'8:00'],[4,1,2,99.99,'8:00']
  //         ];

  //         for (const bookingsData of databookings) {
  //             const querybookings = `INSERT INTO bookings (user_id,ticket_id,event_id,amt_paid,transaction_time) VALUES (:1, :2, :3, :4, :5)`;
  //             const bindsbookings = bookingsData; // Bind the bookingsData array directly
  //             const optionsbookings = {
  //               autoCommit: true, // Commit each insert immediately
  //             };
  //             // console.log(query , "aaa----------->>>>")
  //             await connection.execute(querybookings,bindsbookings,optionsbookings);
  //           }

  //           res.status(202).send("Populated");
  //     }
  //     catch (error) {
  //         console.error('Error executing SQL query:', error);
  //         res.status(500).send('Internal Server Error');

  //     }
  //     finally {
  //         if (connection) {
  //           try {
  //             // Release the connection when done
  //             await connection.close();
  //           } catch (error) {
  //             console.error('Error closing database connection:', error);
  //           }
  //         }
  //     }
  // },

  GetWholeTable: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute("SELECT * from bookings");
      const data = result.rows;
      res.status(200).json(data);
    } catch (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.error("Error closing database connection:", error);
        }
      }
    }
  },

  getbookingswithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `SELECT bookings.*,bookings.user_id, bookings.ticket_id, bookings.event_id, bookings.amt_paid, bookings.transaction_time FROM bookings WHERE ${req.body.condition}`;

      const table = await connection.execute(query);
      // console.log(table.rows);
      res.status(200).send(table);
    } catch (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          // Release the connection when done
          await connection.close();
        } catch (error) {
          console.error("Error closing database connection:", error);
        }
      }
    }
  },

  AddNewbookings: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `INSERT INTO bookings (user_id,ticket_id,event_id,amt_paid,transaction_time) VALUES (:1, :2,:3,:4,:5)`;
      const binds = [
        req.body.user_id,
        req.body.ticket_id,
        req.body.event_id,
        req.body.amt_paid,
        req.body.transaction_time,
      ];
      const options = {
        autoCommit: true,
      };

      await connection.execute(query, binds, options);
      res.status(202).send("Added");
    } catch (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          // Release the connection when done
          await connection.close();
        } catch (error) {
          console.error("Error closing database connection:", error);
        }
      }
    }
  },

  Updatebookings: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const binds = [req.body.country_id, req.body.country_name];

      console.log("binds -> ", binds);
      const query = `UPDATE bookings SET user_id = :1, ticket_id= :2, event_id =:3, amt_paid =:4, transaction_time =:5 WHERE ${req.body.condition}`;
      const options = {
        autoCommit: true, // Commit each insert immediately
      };

      const respnse = await connection.execute(query, binds, options);

      res.status(202).send("Updated");
    } catch (error) {
      console.error("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          // Release the connection when done
          await connection.close();
        } catch (error) {
          console.error("Error closing database connection:", error);
        }
      }
    }
  },

  DeleteTransactionAtTicketID: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from bookings WHERE ticket_id = :1`;
      const binds = [req.body.countries_id];
      const options = {
        autoCommit: true, // Commit each insert immediately
      };

      await connection.execute(query, binds, options);
      res.status(202).send("Deleted");
    } catch (error) {
      console.log("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.log("Error closing database connection:", error);
        }
      }
    }
  },
  DeleteTransactionAtUserID: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from bookings WHERE user_id = :1`;
      const binds = [req.body.countries_id];
      const options = {
        autoCommit: true, // Commit each insert immediately
      };

      await connection.execute(query, binds, options);
      res.status(202).send("Deleted");
    } catch (error) {
      console.log("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.log("Error closing database connection:", error);
        }
      }
    }
  },

  DeletebookingsWithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from bookings WHERE ${req.body.condition}`;

      await connection.execute(query);
      res.status(202).send("Deleted");
    } catch (error) {
      console.log("Error executing SQL query:", error);
      res.status(500).send("Internal Server Error");
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (error) {
          console.log("Error closing database connection:", error);
        }
      }
    }
  },
};
