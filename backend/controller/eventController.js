/*const eventController = (req,res) => {
  async (req, res) => {
    try {
      const listOfEvents = await event.findAll();
      res.json(listOfEvents);
    } catch (error) {
      console.error("Error retrieving events:", error);
      res.status(500).json({ error: "Internal Server Error" });
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

    return res.status(200).json({message: "fjdsfsk"});
 
};

module.exports = {eventController};
*/
const {getConnection} = require('../config/connection');
const ticketController = require('./ticketController');


module.exports = {
    removeAllEvents: async function (req, res){
        let connection ;
        try {
            connection = await getConnection();
            const query = "TRUNCATE TABLE events";
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
    populateEvents: async function (req, res){

      let connection ;
      try {

          connection = await getConnection();
          const dataEvent = [
              // eventid,eventname,venueid,date,starttime,endtime,organizrid,performerid,eventcategoryid,numoftickets
              [1,'Bachelorette Party',2, '01-Oct-2010','9:00','6:00',3,4,1,500], 
              [2,'Met Gala',2, '01-Oct-2010', '9:00','6:00',3,4,2,500],
              [3,'Coachella',2, '01-Oct-2010','9:00','6:00',3,4,1,500],
              [2,'Kashmir Concert',2, '01-Oct-2010', '9:00','6:00',3,2,500],
              [4,'Eras Tour',2, '01-Oct-2010', '9:00','6:00',3,3,500],
              [5,'Lollapalooza',2, '01-Oct-2010', '9:00','6:00',3,3,500],
          ];
          
          for (const EventData of dataEvent) {
              const queryEvent = `INSERT INTO events (event_id, event_name, venue_id,event_date,start_time,end_time,organizer_id,performer_id,event_category_id,num_of_tickets) VALUES (:1, :2, :3, :4, :5,:6, :7, :8, :9, :10)`;
              const bindsEvent = EventData; 
              const optionsEvent = {
                autoCommit: true, // Commit each insert immediately
              };
              // console.log(query , "aaa----------->>>>")
              await connection.execute(queryEvent,bindsEvent,optionsEvent);
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
            const table = await connection.execute("SELECT * from events");
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

    getEventwithCondition: async function (req, res) {
        let connection;
        try {
            connection = await getConnection();
            const query = `SELECT * from events WHERE ${req.body.condition}`;
            const binds = [req.body.condition];
            const table = await connection.execute(query, binds);
            res.status(200).send(table);
        } catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error (smt is the problem w ur sql query)');
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
    

    AddNewEvent: async function (req, res){
      // must be able to autogenerate x num of tickets based on ticket num, so call the addticketsforevent func
        let connection ;
        try {
            connection = await getConnection();
            const query = `insert into events (event_id, event_name, venue_id,event_date,start_time,end_time,organizer_id,performer_id,event_category_id,num_of_tickets) VALUES (:1, :2, :3, :4, :5,:6, :7, :8, :9, :10)`;
            const binds = [req.body.event_id, req.body.event_name, req.body.venue_id,req.body.event_date,req.body.start_time,req.body.end_time,req.body.organizer_id,req.body.performer_id,req.body.event_category_id,req.bod.num_of_tickets];
            const options = {
              autoCommit: true, // Commit each insert immediately
            };

            ticketController.AddTicketsForEvent(req,res,binds[9])

            // console.log(query , "aaa----------->>>>")
            await connection.execute(query,binds,options);
            res.status(202).send("Added");
        } 
        catch (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).send('Internal Server Error (smt is the matter w ur sql query)');
          
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

    UpdateEvent: async function (req, res) {
        let connection;
        try {
          connection = await getConnection();
          const binds = [req.body.event_id,
             req.body.event_name,
              req.body.venue_id,
              req.body.event_date,
              req.body.start_time,
              req.body.end_time,
              req.body.organizer_id,
              req.body.performer_id,
              req.body.event_category_id,
              req.bod.num_of_tickets
          ];
      
          console.log("binds -> ", binds);
          const query = `update events set event_id = :1, event_name = :2, venue_id = :3 , event_date =:4 , start_time = :5, end_time =:6 , organizer_id =: 7, performer_id = :8, event_cateogory_id =:9, num_of_tickets =:10 where ${req.body.condition}`;
          const options = {
            // is there an error in the req.body.condition?
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
  
  
      DeleteEventAtID : async function (req, res){
  
        let connection ;
        try{
          connection = await getConnection();
          const query = `Delete from events WHERE event_id = :1`;
          const binds = [req.body.id];
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
