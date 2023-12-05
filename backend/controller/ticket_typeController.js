const { getConnection } = require("../config/connection");

// Path: ticket_type/....

// event_id int NOT NULL,
// ticket_type int NOT NULL,
// seat_num int NOT NULL,
// venue_id int NOT NULL,
// booked char(1),
module.exports = {
  removeAllticket_type: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = "TRUNCATE TABLE ticket_type";
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

  GetWholeTable: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const result = await connection.execute("SELECT * from ticket_type");
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

  getticket_typewithCondition: async function (req, res) {
    let connection;
    try {
      // console.log(req, "req from getDesertwithCondition")
      connection = await getConnection();
      const query = `SELECT * FROM ticket_type WHERE ${req.body.condition}`;

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

  AddNewticket_type: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `INSERT INTO ticket_type (event_id, ticket_type,seat_num, venue_id,booked) VALUES (:1, :2, :3,:4, 'n')`;
      const binds = [
        req.body.event_id,
        req.body.ticket_type,
        req.body.seat_num,
        req.body.venue_id,
      ];
      const options = {
        autoCommit: true, // Commit each insert immediately
      };
      // console.log(query , "aaa----------->>>>")
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

  FindNextAvailableTickForEvent: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();

      // Extract the event_id from the query parameters
      const eventId = req.query.event_id;

      const query = `select ticket_id from ticket_type where event_id = :1 and booked = 'n' fetch first 1 rows only`;
      const binds = [eventId];

      const table = await connection.execute(query, binds);
      console.log(table.rows);
      res.status(200).send(table.rows);
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

  Updateticket_type: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const binds = [
        req.body.event_id,
        req.body.ticket_type,
        req.body.seat_num,
        req.body.booked,
      ];

      console.log("binds -> ", binds);
      const query = `UPDATE ticket_type SET event_id = :1, ticket_type = :2, seat_num = :3, booked = :4 WHERE ${req.body.condition}`;
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

  Deleteticket_typeAtID: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from ticket_type WHERE ticket_id = :1`;
      const binds = [req.body.ticket_id];
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

  Deleteticket_typeWithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from ticket_type WHERE ${req.body.condition}`;

      await connection.execute(query);
      res.status(202).send("Deleted!");
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
