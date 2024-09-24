
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

 const connect=()=>{
	const connection = mysql.createConnection({
	host: process.env.DB_HOST,     
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
	});
	 connection.connect((err) => {
	if (err) {
			console.error("Error connecting to the database:", err);
			return;
		}
		console.log("Connected to MySQL database");
	});
	return connection;
}
const dbconnection = connect();
export default dbconnection;