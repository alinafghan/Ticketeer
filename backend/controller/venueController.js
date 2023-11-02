const {getConnection} = require('../config/connection');

// Path: order/....

module.exports = {
    removeAllVenues: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE Venues";
            const options={
                autoCommit: true, // Commit each insert immediately
            }
            await connection.execute(query ,[], options);
            // console.log(table.rows);
            res.status(202).send("Deleted");
          } catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
          } finally {
            if (connection) {
              try {
                // Release the connection when done
                await connection.close();
              } catch (error) {
                console.error('Error closing database connection:', error);
              }
            }
        }
    },
    populateVenues: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const dataVenues = [
                [1,'Gugenheim', 840, 2],
                [2,'Metropolitan Museum of Art', 700, 3],
                [3,'Bobs bar', 450, 7],
                [2,'Krabby Patty', 3000, 24],
                [4,'Airbnb at Tipu Sultan', 500, 9],
                [5,'Checking', 150, 8],
            ];
            
            for (const VenuesData of dataVenues) {
                const queryVenues = `INSERT INTO Venues (venue_id, venue_name, venue_capacity, location_id) VALUES (:1, :2, :3, :4)`;
                const bindsVenues = VenuesData; // Bind the VenuesData array directly
                const optionsVenues = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryVenues,bindsVenues,optionsVenues);
              }

              res.status(202).send("Populated");
        } 
        catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
          
        } 
        finally {
            if (connection) {
              try {
                // Release the connection when done
                await connection.close();
              } catch (error) {
                console.error('Error closing database connection:', error);
              }
            }
        }
    },

    GetWholeTable: async function (req, res) {
      let connection;
      try {
          connection = await getConnection();
          const result = await connection.execute("SELECT * from venues");
          const data = result.rows;
          res.status(200).json(data);
      } catch (error) {
          console.error('Error executing SQL query:', error);
          res.status(500).send('Internal Server Error');
      } finally {
          if (connection) {
              try {
                  await connection.close();
              } catch (error) {
                  console.error('Error closing database connection:', error);
              }
          }
      }
  },

    getVenueswithCondition: async function (req, res){
        let connection ;
        try {
            // console.log(req, "req from getDesertwithCondition")
            connection = await getConnection();
            const query = `SELECT Venues.*,Venues.venue_name , Venues.venue_capacity, Venues.location_id FROM Venues WHERE ${req.body.condition}`;
            
            // bind = [req.body.condition];
            // console.log(bind[0], "bind")
            const table = await connection.execute(query);
            // console.log(table.rows);
            res.status(200).send(table);
          } catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
          } finally {
            if (connection) {
              try {
                // Release the connection when done
                await connection.close();
              } catch (error) {
                console.error('Error closing database connection:', error);
              }
            }
        } 
    },

    AddNewVenue: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO Venues (venue_id, venue_name, venue_capacity, location_id) VALUES (:1, :2, :3, :4)`;
            const binds = [req.body.venue_id, req.body.venue_name, req.body.venue_capacity, req.body.location_id];
            const options = {
              autoCommit: true, 
            };
            // console.log(query , "aaa----------->>>>")
            await connection.execute(query,binds,options);
            res.status(202).send("Added");
        } 
        catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error');
          
        } 
        finally {
            if (connection) {
              try {
                // Release the connection when done
                await connection.close();
              } catch (error) {
                console.error('Error closing database connection:', error);
              }
            }
        }
    },

    UpdateVenues: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.venue_id,
            req.body.venue_name,
            req.body.venue_capacity,
            req.body.location_id,
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE Venues SET venue_id = :1, venue_name= :2, venue_capacity = :3, location_id = :4 WHERE ${req.body.condition}`;
          const options = {
            autoCommit: true, // Commit each insert immediately
          }
    
          const respnse = await connection.execute(query, binds, options);
  
      
          res.status(202).send("Updated");
        } catch (error) {
          console.error("Error executing SQL query:", error);
          res.status(500).send('Internal Server Error');
        } finally {
          if (connection) {
            try {
              // Release the connection when done
              await connection.close();
            } catch (error) {
              console.error('Error closing database connection:', error);
            }
          }
        }
      },
  
  
      DeleteVenueAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from Venues WHERE venue_id = :1`;
          const binds = [req.body.order_id];
          const options = {
            autoCommit: true, // Commit each insert immediately
          };
  
          await connection.execute(query,binds,options);
          res.status(202).send("Deleted");
        }
        catch(error){
          console.log("Error executing SQL query:" ,error)
          res.status(500).send('Internal Server Error');
        }
        finally{
          if(connection){
            try{
              await connection.close();
            }
            catch(error){
              console.log("Error closing database connection:", error);
            }
          }
  
        }
  
      }




}