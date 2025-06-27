const db = require("../config/db");

exports.getAll = () => db.query("SELECT * FROM services");
exports.create = (data) =>
  db.query(
    "INSERT INTO services (title, description, image_url) VALUES (?, ?, ?)",
    [data.title, data.description, data.image_url]
  );
exports.update = (id, data) =>
  db.query(
    "UPDATE services SET title=?, description=?, image_url=? WHERE id=?",
    [data.title, data.description, data.image_url, id]
  );
exports.remove = (id) => db.query("DELETE FROM services WHERE id=?", [id]);
