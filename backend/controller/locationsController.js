const {getConnection} = require('../config/connection');

module.exports = {
  GetWholeTable: async function (req, res) {
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute("SELECT * from event_category");
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
    removeAlllocations: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE locations";
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
    populatelocations: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const datalocations = [
                [1,"Khi", 1],[2,"Edmonton", 3],[3,"Toronto",3],[4,"Berlin", 4]
            ];
            
            for (const locationsData of datalocations) {
                const querylocations = `INSERT INTO locations (location_id, location_name, country_id) VALUES (:1, :2, :3)`;
                const bindslocations = locationsData; // Bind the locationsData array directly
                const optionslocations = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(querylocations,bindslocations,optionslocations);
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

    

    getlocationswithCondition: async function (req, res){
        let connection ;
        try {
            
            connection = await getConnection();
            const query = `SELECT locations.*,locations.location_id, locations.location_name, locations.country_id FROM locations WHERE ${req.body.condition}`;
          
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

    AddNewlocations: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO locations (location_id, location_name, country_id) VALUES (:1, :2, :3)`;
            const binds = [req.body.location_id, req.body.location_name,req.body.country_id];
            const options = {
              autoCommit: true, 
            };
            
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

    Updatelocations: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.location_id, req.body.location_name,req.body.country_id
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE locations SET location_id = :1, location_name= :2, country_id =:3 WHERE ${req.body.condition}`;
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
  
  
      DeletelocationsAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from locations WHERE location_id = :1`;
          const binds = [req.body.locations_id];
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
  
      },

      DeletelocationsWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from locations WHERE ${req.body.condition}`;
          
          await connection.execute(query);
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