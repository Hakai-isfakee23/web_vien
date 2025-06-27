const Service = require("../models/serviceModel");

exports.getAll = async (req, res) => {
  const [rows] = await Service.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await Service.create(req.body);
  res.json({ message: "Created" });
};

exports.update = async (req, res) => {
  await Service.update(req.params.id, req.body);
  res.json({ message: "Updated" });
};

exports.remove = async (req, res) => {
  await Service.remove(req.params.id);
  res.json({ message: "Deleted" });
};
