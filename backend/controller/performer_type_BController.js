const {getConnection} = require('../config/connection');

module.exports = {
  GetWholeTable: async function (req, res) {
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute("SELECT * from performer_type_B");
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
    removeAllperformer_type_B: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE performer_type_B";
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
    populateperformer_type_B: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const dataperformer_type_B = [
                [1,"Pakistan"],[2,"Alaska"],[3,"Canada"],[4,"Germany"]
            ];
            
            for (const performer_type_BData of dataperformer_type_B) {
                const queryperformer_type_B = `INSERT INTO performer_type_B (performer_type_B,type_name) VALUES (:1, :2)`;
                const bindsperformer_type_B = performer_type_BData; // Bind the performer_type_BData array directly
                const optionsperformer_type_B = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryperformer_type_B,bindsperformer_type_B,optionsperformer_type_B);
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

    

    getperformer_type_BwithCondition: async function (req, res){
        let connection ;
        try {
            
            connection = await getConnection();
            const query = `SELECT performer_type_B.*,performer_type_B.performer_type_B, performer_type_B.type_name FROM performer_type_B WHERE ${req.body.condition}`;
          
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

    AddNewperformer_type_B: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO performer_type_B (performer_type_B,type_name) VALUES (:1, :2)`;
            const binds = [req.body.performer_type_B, req.body.type_name];
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

    Updateperformer_type_B: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.country_id,
            req.body.country_name,
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE performer_type_B SET performer_type_B = :1, type_name= :2 WHERE ${req.body.condition}`;
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
  
  
      Deleteperformer_type_BAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from performer_type_B WHERE performer_type_B = :1`;
          const binds = [req.body.performer_type_B];
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

      Deleteperformer_type_BWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from performer_type_B WHERE ${req.body.condition}`;
          
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