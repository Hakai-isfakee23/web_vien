import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
app.use(cors());
app.use(express.json());

// Update with your MySQL credentials
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "contactdb",
});

app.post("/contact", (req, res) => {
  const { name, phone, email, message } = req.body;
  const sql =
    "INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, phone, email, message], (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).json({ success: false, error: "Database error" });
    }
    res.json({ success: true, message: "Form received!" });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
