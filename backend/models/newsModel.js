const db = require("../config/db");

exports.getAll = () => db.query("SELECT * FROM news ORDER BY created_at DESC");
exports.create = (data) =>
  db.query("INSERT INTO news (title, content, image_url) VALUES (?, ?, ?)", [
    data.title,
    data.content,
    data.image_url,
  ]);
exports.update = (id, data) =>
  db.query(
    "UPDATE news SET title = ?, content = ?, image_url = ? WHERE id = ?",
    [data.title, data.content, data.image_url, id]
  );
exports.delete = (id) => db.query("DELETE FROM news WHERE id = ?", [id]);
