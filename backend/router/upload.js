import { Router } from "express";
import dbconnection from "../db.js";

const upload = Router();

upload.post("/upload", (req, res) => {
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

    const sql = `UPDATE users 
							SET Namee = ?, RoomNo = ?, Extra = ?, offPt = ?, offRs = ?, Main = ?, Bill = ?, Diposit = ?, Balance = ? 
							WHERE SrNo = ?`;

    dbconnection.query(
      sql,
      [Name, RoomNo, Extra, offPt, offRs, Main, Bill, Deposit, Balance, SrNo],
      (err, results) => {
        if (err) {
          console.error("Error updating data:", err);
          return res.status(500).send("Error updating data");
        }
	}
  );
}
res.status(200).send("Data updated successfully");
});

export default upload;