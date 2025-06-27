const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL credentials (dùng chung cho tất cả)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "demo_web",
});

// Route cho contact form
app.post("/api/contact", (req, res) => {
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

// Các route khác giữ nguyên
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

const aboutRoutes = require("./routes/aboutRoutes");
app.use("/api/about", aboutRoutes);

const blogRoutes = require("./routes/blogRoutes");
app.use("/api/blogs", blogRoutes);

const newsRoutes = require("./routes/newsRoutes");
app.use("/api/news", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
