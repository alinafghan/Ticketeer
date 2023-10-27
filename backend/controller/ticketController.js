const {getConnection} = require('../connection');

// Path: Tickets/....

module.exports = {
    removeAllTickets: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE Tickets";
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
    populateTickets: async function (req, res){

        let connection ;
        try {
            connection = await getConnection();

            const dataTickets = [
              [1,1,1],
              [2,2,2],
              [3,3,3],
              [4,4,4],
              
            ];
            
            for (const TicketsData of dataTickets) {
                const queryTickets = `INSERT INTO Tickets (event_id, ticket_type,seat_num) VALUES (:1, :2, :3)`;
                const bindsTickets = TicketsData; // Bind the TicketsData array directly, ticket_id not req bc autoincrement
                const optionsTickets = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(queryTickets,bindsTickets,optionsTickets);
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
            const table = await connection.execute("SELECT * FROM Tickets");
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

    getTicketswithCondition: async function (req, res){
        let connection ;
        try {
            // console.log(req, "req from getDesertwithCondition")
            connection = await getConnection();
            const query = `SELECT * FROM Tickets WHERE ${req.body.condition}`;
            
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

    AddNewTickets: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO Tickets ( event_id, ticket_type,seat_num) VALUES (:1, :2, :3)`;
            const binds = [req.body.event_id, req.body.ticket_type, req.body.seat_num];
            const options = {
              autoCommit: true, // Commit each insert immediately
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

    UpdateTickets: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.ticket_id, req.body.event_id, req.body.ticket_type, req.body.seat_num];
      
          console.log("binds -> ", binds);
          const query = `UPDATE Tickets SET ticket_id = :1, event_id = :2, ticket_type = :3, seat_num = :4 WHERE ${req.body.condition}`;
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
  
      DeleteTicketsAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from Tickets WHERE ticket_id = :1`;
          const binds = [req.body.ticket_id];
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


      AddTicketsForEvent: async function (req, res, count) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [req.body.event_id, req.body.ticket_type, req.body.seat_num];
      
          console.log("binds -> ", binds);
          const options = {
            autoCommit: true, 
          }

          for(let i = 0;i < (count+1);i++){
          const query = `INSERT INTO Tickets (event_id, ticket_type,seat_num) VALUES (:1, :2, :3)`;
          const respnse = await connection.execute(query, binds, options);
           }  
      
          res.status(202).send("Tickets created.");
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
      }


}