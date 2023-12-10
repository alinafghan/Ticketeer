const { getConnection } = require("../config/connection");

module.exports = {
  removeAllorganizers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = "TRUNCATE TABLE organizers";
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

  DoesOrganizerExist: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const organizer_id = req.query.organizer_id;

      console.log("printing org id from backend", organizer_id);

      const query = `begin orgchecker(:organizer_id); end;`;
      const binds = { organizer_id: organizer_id };

      console.log(query, binds);

      try {
        console.log("printing");

        const result = await connection.execute(query, binds);

        console.log("this is da result", result.rows);

        res.status(200).send("Organizer exists!");
      } catch (error) {
        if (error && error.errorNum === 20002) {
          res.status(202).send("Organizer doesn't exist.");
        } else {
          console.error("Error executing SQL query:", error);
          res
            .status(500)
            .send("Internal Server Error while running the procedure");
        }
      }
    } catch (error) {
      console.error("Error executing SQL on an even bigger scale:", error);
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

  FindIDfromUsername: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      console.log("called");
      const organizer_name = req.query.organizer_name;

      const query = `select organizer_id from organizers where organizer_name =:organizer_name`;
      const binds = { organizer_name: organizer_name };

      try {
        const result = await connection.execute(query, binds);
        console.log(result.rows);
        res.status(200).send(result.rows);
      } catch (error) {
        console.error("Error executing SQL query:", error);
        res.status(500).send("Internal Server Error");
      }
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
      const result = await connection.execute("SELECT * from organizers");
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

  getorganizerswithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `SELECT organizers.*,organizers.organizer_id, organizers.organizer_name FROM organizers WHERE ${req.body.condition}`;

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

  AddNeworganizers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `INSERT INTO organizers (organizer_name, email, phone_number,password) VALUES (:1, :2, :3, :4)`;
      const binds = [
        req.body.organizer_name,
        req.body.email,
        req.body.phone_number,
        req.body.password,
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

  Updateorganizers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const binds = [req.body.organizer_name];

      console.log("binds -> ", binds);
      const query = `UPDATE organizers SET  organizer_name= :1 WHERE ${req.body.condition}`;
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

  DeleteorganizersAtID: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from organizers WHERE organizer_id = :1`;
      const binds = [req.body.organizers_id];
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

  DeleteorganizersWithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from organizers WHERE ${req.body.condition}`;

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
