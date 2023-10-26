
const {getConnection} = require("../connection");



module.exports = {

  
    removeAllDeserts: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE Deserts";
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

    populateDeserts: async function (req, res){

        let connection ;
        try {
            connection = await getConnection();
            const data = [
                ['Pecan Pie', 3.0, 40.0, 20.0, 4.79],
                ['Tiramisu', 3.8, 25.0, 12.0, 5.99],
                ['Cupcake', 1.8, 22.0, 8.0, 2.49],
                ['Brownie', 2.5, 30.0, 12.0, 3.29],
                ['Lemon Tart', 2.3, 20.5, 10.8, 4.79],
                ['Strawberry Shortcake', 3.5, 29.0, 14.2, 5.49],
                ['Chocolate Mousse', 4.0, 28.5, 15.7, 6.99],
                ['Peach Cobbler', 2.7, 34.0, 11.3, 4.29],
                ['Banana Split', 3.2, 45.0, 18.5, 7.99],
                ['IceCream Sandwich', 3.2, 45.0, 18.5, 7.99],
              ];
            
              for (const dessert of data) {
                const query = `INSERT INTO Deserts (deserts, protein, carbs, fat, unit_price) VALUES (:1,:2,:3,:4,:5)`;
                const binds = dessert; // Bind the dessert array directly
                const options = {
                    autoCommit: true, // Commit each insert immediately
                };
                // console.log(query , "aaa----------->>>>")
                await connection.execute(query,binds,options);
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
          console.log("hitttt--<<<<<<")
            connection = await getConnection();
            const table = await connection.execute("SELECT * FROM Deserts");
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

    getDesertwithCondition: async function (req, res){
        let connection ;
        try {
            // console.log(req, "req from getDesertwithCondition")
            connection = await getConnection();
            const query = `SELECT * FROM Deserts WHERE ${req.body.condition}`;
            
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

    AddNewDesert : async function (req, res){
      let connection ;
      try {
        connection = await getConnection();
        
        const bind = [req.body.deserts, req.body.protein, req.body.carbs, req.body.fat, req.body.unit_price]

        console.log(bind, "bind")
        // INSERT INTO Deserts (deserts, protein, carbs, fat, unit_price)
        const query = `INSERT INTO Deserts (deserts, protein, carbs, fat, unit_price) VALUES (:1,:2,:3,:4,:5)`;
        const options = {
          autoCommit: true, // Commit each insert immediately
        };
        await connection.execute(query,bind,options);
        res.status(202).send("Added");
      }
      catch(error){
        console.log("Error executing SQL query:" ,error)
        res.status(500).send('Internal Server Error');
      }
      finally{
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

    UpdateDesert: async function (req, res) {
      let connection;
      try {
        connection = await getConnection();
        const binds = [
          req.body.deserts,
          req.body.protein,
          req.body.carbs,
          req.body.fat,
          req.body.unit_price,
          req.body.desert_id,
        ];
    
        console.log("binds -> ", binds);
        const query = `UPDATE Deserts SET deserts = :1, protein = :2, carbs = :3, fat = :4, unit_price = :5 WHERE desert_id = :6`;
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


    DeleteDesertAtID : async function (req, res){

      let connection ;
      try{
        connection = await getConnection();
        const query = `BEGIN \n DeleteDesertAndOrders(:1); \n END;`;
        const binds = [req.body.desert_id];
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