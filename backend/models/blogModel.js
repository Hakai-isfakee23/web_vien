const db = require("../config/db");

exports.getAll = () => db.query("SELECT * FROM blogs ORDER BY created_at DESC");
exports.getById = (id) => db.query("SELECT * FROM blogs WHERE id = ?", [id]);
exports.create = (data) =>
  db.query("INSERT INTO blogs (title, content, image_url) VALUES (?, ?, ?)", [
    data.title,
    data.content,
    data.image_url,
  ]);
exports.update = (id, data) =>
  db.query(
    "UPDATE blogs SET title = ?, content = ?, image_url = ? WHERE id = ?",
    [data.title, data.content, data.image_url, id]
  );
exports.delete = (id) => db.query("DELETE FROM blogs WHERE id = ?", [id]);
