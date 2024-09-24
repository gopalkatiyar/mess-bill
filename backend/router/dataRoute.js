import { Router } from "express";
import dbconnection from "../db.js";


const dataRoute = Router();

			dataRoute.get("/data", (req, res) => {
			const roomNo = req.query.roomNo;

			const sql = "SELECT * FROM users WHERE RoomNo = ?";
			dbconnection.query(sql, [roomNo], (err, results) => {
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

export default dataRoute;