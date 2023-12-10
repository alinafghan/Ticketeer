const express = require("express");
const { getConnection } = require("../config/connection");
const router = express.Router();

router.get(`/`, async (req, res) => {
  let connection;

  try {
    connection = await getConnection();

    const searchKeyword = req.query.searchKeyword || "";

    const query = `
            SELECT
                e.event_id,
                e.event_name,
                v.venue_name,
                p.performer_name,
                ec.event_category_name,
                l.location_name,
                c.country_name

            FROM
                events e
                INNER JOIN venues v ON e.venue_id = v.venue_id
                INNER JOIN performers p ON e.performer_id = p.performer_id
                INNER JOIN event_category ec ON e.event_category_id = ec.event_category_id
                INNER JOIN locations l ON v.location_id =l.location_id
                INNER JOIN countries c ON l.country_id = c.country_id

            WHERE
                UPPER(e.event_name) LIKE UPPER('%${searchKeyword}%')
                OR UPPER(v.venue_name) LIKE UPPER('%${searchKeyword}%')
                OR UPPER(p.performer_name) LIKE UPPER('%${searchKeyword}%')
                OR UPPER(ec.event_category_name) LIKE UPPER('%${searchKeyword}%')
                OR UPPER(l.location_name) LIKE UPPER('%${searchKeyword}%')
                OR UPPER(c.country_name) LIKE UPPER('%${searchKeyword}%')
        `;

    console.log(query);
    console.log("this is the search keyword", searchKeyword);
    const result = await connection.execute(query);
    const rows = result.rows;
    console.log("this is the result", result.rows);

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing SQL query:", error.message);
    console.error("Oracle Database Error:", error);
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
});

module.exports = router;
