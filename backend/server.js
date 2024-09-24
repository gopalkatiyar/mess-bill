import express from "express";
import mysql from "mysql2";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "gopal@123",
  database: "mess",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/api/data", (req, res) => {
	const roomNo = req.query.roomNo;

	const sql = "SELECT * FROM users WHERE RoomNo = ?";
	connection.query(sql, [roomNo], (err, results) => {
		if (err) {
			console.error("Error fetching data:", err);
			return res.status(500).send("Error fetching data");
		}

		if (results.length === 0) {
			return res.status(404).send("No data found for the given room number");
		}
		console.log(results);
		res.json(results);
	});
});


app.post("/upload", (req, res) => {
  const data = req.body;

  // Assuming data is already an array of rows
  const dataToInsert = Array.isArray(data) ? data.slice(1) : []; // Neglect the first row

  // Loop through the JSON data (starting from the second row) and insert it into the database
  for (let x = 0; x < dataToInsert.length; x++) {
    const row = dataToInsert[x];
    const SrNo = row["MESS BILL"];
    const Name = row.__EMPTY;
    const RoomNo = row.__EMPTY_1;
    const Extra = row.__EMPTY_3;
    const offPt = row.__EMPTY_4;
    const offRs = row.__EMPTY_5;
    const Main = row.__EMPTY_6;
    const Bill = row.__EMPTY_7;
    const Deposit = row.__EMPTY_8;
	  const Balance = row.__EMPTY_9;
	  
	  console.log(row);

    const sql = `INSERT INTO users (SrNo, Namee, RoomNo, Extra, offPt, offRs, Main, Bill, Diposit, Balance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
      sql,
      [SrNo, Name, RoomNo, Extra, offPt, offRs, Main, Bill, Deposit, Balance],
      (err, results) => {
        if (err) {
          console.error("Error inserting data:", err);
          return res.status(500).send("Error inserting data");
        }
      }
    );
  }

		 

    //   const sql = `UPDATE users 
	// 						SET Namee = ?, RoomNo = ?, Extra = ?, offPt = ?, offRs = ?, Main = ?, Bill = ?, Diposit = ?, Balance = ? 
	// 						WHERE SrNo = ?`;

    //   connection.query(
    //     sql,
    //     [Name, RoomNo, Extra, offPt, offRs, Main, Bill, Deposit, Balance, SrNo],
    //     (err, results) => {
    //       if (err) {
    //         console.error("Error updating data:", err);
    //         return res.status(500).send("Error updating data");
    //       }
    //       res.status(200).send("Data updated successfully");
    //     }
	// );
	

  res.send("Data inserted successfully");
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
