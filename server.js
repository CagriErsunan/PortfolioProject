import bodyParser from "body-parser";
import pg from "pg";
import express from "express";


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Portfolio",
    password: "1234",
    port: 5432,
  });
  db.connect();
  
  app.get("/", (req, res) => {
    res.render("index.js");
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  