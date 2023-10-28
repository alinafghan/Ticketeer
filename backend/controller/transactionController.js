const {getConnection} = require('../config/connection');

module.exports = {
    removeAlltransactions: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE transactions";
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
    populatetransactions: async function (req, res){

        let connection ;
        try {

            
            connection = await getConnection();
            const datatransactions = [
                [1,3,2,5.00,'8:00'],[2,1,1,56.00,'8:00'],[3,2,3,45.45,'8:00'],[4,1,2,99.99,'8:00']
            ];
            
            for (const transactionsData of datatransactions) {
                const querytransactions = `INSERT INTO transactions (user_id,ticket_id,event_id,amt_paid,transaction_time) VALUES (:1, :2, :3, :4, :5)`;
                const bindstransactions = transactionsData; // Bind the transactionsData array directly
                const optionstransactions = {
                  autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(querytransactions,bindstransactions,optionstransactions);
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
            const table = await connection.execute("select * from transactions");
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

    gettransactionswithCondition: async function (req, res){
        let connection ;
        try {
            
            connection = await getConnection();
            const query = `SELECT transactions.*,transactions.user_id, transactions.ticket_id, transactions.event_id, transactions.amt_paid, transactions.transaction_time FROM transactions WHERE ${req.body.condition}`;
          
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

    AddNewtransactions: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = `INSERT INTO transactions (user_id,ticket_id,event_id,amt_paid,transaction_time) VALUES (:1, :2,:3,:4,:5)`;
            const binds = [req.body.user_id,req.body.ticket_id,req.body.event_id,req.body.amt_paid,req.body.transaction_time];
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

    UpdateTransactions: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [
            req.body.country_id,
            req.body.country_name,
          ];
      
          console.log("binds -> ", binds);
          const query = `UPDATE transactions SET user_id = :1, ticket_id= :2, event_id =:3, amt_paid =:4, transaction_time =:5 WHERE ${req.body.condition}`;
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

      DeleteTransactionAtTicketID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from transactions WHERE ticket_id = :1`;
          const binds = [req.body.countries_id];
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
      DeleteTransactionAtUserID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from transactions WHERE user_id = :1`;
          const binds = [req.body.countries_id];
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

      DeleteTransactionsWithCondition : async function (req,res) {
        let connection;
        try{
          connection = await getConnection();
          const query = `Delete from transactions WHERE ${req.body.condition}`;
          
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