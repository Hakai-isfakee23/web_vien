const db = require("../config/db");

// Banner
exports.getBanner = () => db.query("SELECT * FROM homepage_banner LIMIT 1");
exports.updateBanner = (data) =>
  db.query(
    "UPDATE homepage_banner SET title=?, subtitle=?, image_url=? WHERE id=1",
    [data.title, data.subtitle, data.image_url]
  );

// Units
exports.getUnits = () => db.query("SELECT * FROM homepage_units");
exports.createUnit = (data) =>
  db.query("INSERT INTO homepage_units (name, logo, url) VALUES (?, ?, ?)", [
    data.name,
    data.logo,
    data.url,
  ]);
exports.updateUnit = (id, data) =>
  db.query("UPDATE homepage_units SET name=?, logo=?, url=? WHERE id=?", [
    data.name,
    data.logo,
    data.url,
    id,
  ]);
exports.deleteUnit = (id) =>
  db.query("DELETE FROM homepage_units WHERE id=?", [id]);
