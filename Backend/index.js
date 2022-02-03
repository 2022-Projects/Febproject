const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// MySQL Connection:
// Host IP: "thefebproject.cdnpppzt14v0.ap-south-1.rds.amazonaws.com"
// DB Name: "febadmin"
// Port: "3306"
// Password: "Febproject123"

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "febadmin",
});

const port = 5000

app.listen(port, () => {
  console.log(`Backend server listening on port : ${port}`);
});