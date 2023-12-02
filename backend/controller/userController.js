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
  populateusers: async function (req, res) {
    let connection;
    try {
      connection = await getConnection();
      const datausers = [
        [
          "Beyonce",
          "beyonce@gmail.com",
          3028898756,
          "beybey2828",
          "Colorado",
          1,
        ],
        [
          "TSwizzle",
          "taylorswift@gmail.com",
          3028898756,
          "password1",
          "Colorado",
          1,
        ],
        ["Jayz", "jayzbayz@gmail.com", 3028898756, "password1", "Colorado", 1],
        [
          "Spongebob Squarepants",
          "squidwardfan@gmail.com",
          3028898756,
          "password1",
          "Colorado",
          3,
        ],
        [
          "the Strokes",
          "roomonfire@hotmail.com",
          3028898756,
          "password1",
          "Colorado",
          1,
        ],
        [
          "Nasty Nas",
          "theking@gmail.com",
          3028898756,
          "password1",
          "Colorado",
          1,
        ],
      ];

      for (const usersData of datausers) {
        const queryusers = `INSERT INTO users (username, email, phone_number,password, city_state_country, user_type) VALUES (:1, :2, :3)`;
        const bindsusers = usersData; // Bind the usersData array directly
        const optionsusers = {
          autoCommit: true, // Commit each insert immediately
        };
        // console.log(query , "aaa----------->>>>")
        await connection.execute(queryusers, bindsusers, optionsusers);
      }

      res.status(202).send("Populated");
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
      const query = `INSERT INTO users ( username,email, phone_number,password, city_state_country,num_of_tickets_booked) VALUES (:1, :2, :3, :4, :5, :6)`;
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
