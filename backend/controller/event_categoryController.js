const {getConnection} = require('../config/connection');
const ticketController = require('./ticketController');

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
  

    removeAllevent_category: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE event_category";
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
    populateevent_category: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const dataevent_category = [
                [1,"Sports Event"],[2,"Musical Event"],[3,"Theatre Event"],[4,"Comedy Event"]
            ];
            
            for (const event_categoryData of dataevent_category) {
                const queryevent_category = `INSERT INTO event_category (event_category_id, event_category_name) VALUES (:1, :2)`;
                const bindsevent_category = event_categoryData; // Bind the event_categoryData array directly
                const optionsevent_category = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryevent_category,bindsevent_category,optionsevent_category);
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


    getevent_categorywithCondition: async function (req, res){
        let connection ;
        try {
            
            connection = await getConnection();
            const query = `SELECT event_category.*,event_category.event_category_id, event_category.event_category_name FROM event_category WHERE ${req.body.condition}`;
          
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

    AddNewevent_category: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO event_category (event_category_id, event_category_name) VALUES (:1, :2)`;
            const binds = [req.body.event_category_id, req.body.event_category_name];
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

    Updateevent_category: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.event_category_id,
            req.body.event_category_name,
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE event_category SET event_category_id = :1, event_category_name= :2 WHERE ${req.body.condition}`;
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
  
  
      Deleteevent_categoryAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from event_category WHERE event_category_id = :1`;
          const binds = [req.body.event_category_id];
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

      Deleteevent_categoryWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from event_category WHERE ${req.body.condition}`;
          
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