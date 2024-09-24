import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import upload from "./router/upload.js";
import "./model/model.js"
import dataRoute from "./router/dataRoute.js";
import dbconnection from "./db.js";

dbconnection;

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


app.use("/api/dataroute", dataRoute);
app.use("/api/uploadroute", upload);


// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
