import dbconnection from "../db.js";
import dotenv from "dotenv";

dotenv.config();
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    SrNo INT AUTO_INCREMENT PRIMARY KEY, 
    Namee VARCHAR(255),   
    RoomNo VARCHAR(5),            
    Extra DECIMAL(10, 2),   
    offPt DECIMAL(10, 2),     
    offRs DECIMAL(10, 2),    
    Main DECIMAL(10, 2), 
    Bill DECIMAL(10, 2),     
    Diposit DECIMAL(10, 2),  
    Balance DECIMAL(10, 2)            
  )
`;



// Execute the query to create the table
dbconnection.query(createTableQuery, (err, results) => {
  if (err) {
    console.error("Error creating table:", err);
    return;
  }
  console.log("Table created successfully");
});