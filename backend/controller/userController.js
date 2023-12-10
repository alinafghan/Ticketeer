const { getConnection } = require("../config/connection");

module.exports = {
  removeAllusers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = "TRUNCATE TABLE users";
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
      const result = await connection.execute("SELECT * from users");
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

  FindIDfromUsername: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const username = req.query.username;
      const query = `select user_id from users where username =:username`;
      const binds = { username: username };

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

  DoesUserExist: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const user_id = req.query.user_id;

      console.log("printing user id from backend", user_id);

      const query = `begin checker(:user_id); end;`;
      const binds = { user_id: user_id };

      console.log(query, binds);

      try {
        console.log("printing");

        const result = await connection.execute(query, binds);

        console.log("this is da result", result.rows);

        res.status(200).send("User exists!");
      } catch (error) {
        if (error && error.errorNum === 20001) {
          res.status(202).send("User doesn't exist.");
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

  getuserswithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `SELECT users.*,users.user_id, users.username,users.email, users.phone_number,users.password, users.city_state_country, users.user_type FROM users WHERE ${req.body.condition}`;

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

  AddNewuser: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `INSERT INTO users ( username,email, phone_number,password,
         city_state_country,num_of_tickets_booked) VALUES (:1, :2, :3, :4, :5, :6)`;
      const binds = [
        req.body.username,
        req.body.email,
        req.body.phone_number,
        req.body.password,
        req.body.city_state_country,
        req.body.num_of_tickets_booked,
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

  Updateusers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const binds = [
        req.body.username,
        req.body.email,
        req.body.phone_number,
        req.body.password,
        req.body.city_state_country,
        req.body.user_type,
      ];

      console.log("binds -> ", binds);
      const query = `UPDATE users SET  username= :1,email =:2, phone_number =: 3,password =: 4, city_state_country =:5, user_type = :6 WHERE ${req.body.condition}`;
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

  DeleteUserAtID: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from users WHERE user_id = :1`;
      const binds = [req.body.user_id];
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

  DeleteUserWithCondition: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const query = `Delete from users WHERE ${req.body.condition}`;

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
