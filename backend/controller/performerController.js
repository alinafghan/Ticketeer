const {getConnection} = require('../connection');

module.exports = {
    removeAllPerformers: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE Performers";
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
    populatePerformers: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const dataPerformers = [
                [1,'Beyonce', 1],
                [2,'TSwizzle', 1],
                [3,'Jayz', 450, 1],
                [2,'Spongebob Squarepants', 3],
                [4,'the Strokes', 1],
                [5,'Nasty Nas', 1],
            ];
            
            for (const PerformersData of dataPerformers) {
                const queryPerformers = `INSERT INTO Performers (performer_id, performer_name, performer_type) VALUES (:1, :2, :3)`;
                const bindsPerformers = PerformersData; // Bind the PerformersData array directly
                const optionsPerformers = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryPerformers,bindsPerformers,optionsPerformers);
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

    GetWholeTable: async function  (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const table = await connection.execute("select * from Performers");
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
        // return table;
    },

    getPerformerswithCondition: async function (req, res){
        let connection ;
        try {
            // console.log(req, "req from getDesertwithCondition")
            connection = await getConnection();
            const query = `SELECT Performers.*,Performers.performer_id, Performers.performer_name, Performers.performer_type FROM Performers WHERE ${req.body.condition}`;
            
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

    AddNewPerformer: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO Performers (performer_id, performer_name, performer_type) VALUES (:1, :2, :3, :4)`;
            const binds = [req.body.performer_id, req.body.performer_name, req.body.performer_type];
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

    UpdatePerformers: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.performer_id,
            req.body.performer_name,
            req.body.performer_type,
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE Performers SET performer_id = :1, performer_name= :2, performer_type = :3 WHERE ${req.body.condition}`;
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
          const query = `Delete from Performers WHERE performer_id = :1`;
          const binds = [req.body.performer_id];
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

      DeletePerformerWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from Performers WHERE ${req.body.condition}`;
          const binds = [
            req.body.performer_id,
            req.body.performer_name,
            req.body.performer_type,
          ];
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