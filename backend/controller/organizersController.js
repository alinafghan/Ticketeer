const {getConnection} = require('../config/connection');

module.exports = {
    removeAllorganizers: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE organizers";
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
    populateorganizers: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const dataorganizers = [
                ["Alina"],["Hiba"],["Maaz"],["Bilal"]
            ];
            
            for (const organizersData of dataorganizers) {
                const queryorganizers = `INSERT INTO organizers ( organizer_name) VALUES (:1)`;
                const bindsorganizers = organizersData; // Bind the organizersData array directly
                const optionsorganizers = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryorganizers,bindsorganizers,optionsorganizers);
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
          const result = await connection.execute("SELECT * from organizers");
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

    getorganizerswithCondition: async function (req, res){
        let connection ;
        try {
            
            connection = await getConnection();
            const query = `SELECT organizers.*,organizers.organizer_id, organizers.organizer_name FROM organizers WHERE ${req.body.condition}`;
          
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

    AddNeworganizers: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO organizers (organizer_name) VALUES ( :2)`;
            const binds = [ req.body.organizer_name];
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

    Updateorganizers: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
             req.body.organizer_name
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE organizers SET  organizer_name= :1 WHERE ${req.body.condition}`;
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
  
  
      DeleteorganizersAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from organizers WHERE organizer_id = :1`;
          const binds = [req.body.organizers_id];
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

      DeleteorganizersWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from organizers WHERE ${req.body.condition}`;
          
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