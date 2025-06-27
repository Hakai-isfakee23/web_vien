const db = require("../config/db");

exports.getAll = () => db.query("SELECT * FROM about");
exports.create = (data) =>
  db.query("INSERT INTO about (title, content) VALUES (?, ?)", [
    data.title,
    data.content,
  ]);
exports.update = (id, data) =>
  db.query("UPDATE about SET title = ?, content = ? WHERE id = ?", [
    data.title,
    data.content,
    id,
  ]);
exports.delete = (id) => db.query("DELETE FROM about WHERE id = ?", [id]);
