const About = require("../models/aboutModel");

exports.getAll = async (req, res) => {
  const [rows] = await About.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await About.create(req.body);
  res.json({ success: true });
};

exports.update = async (req, res) => {
  await About.update(req.params.id, req.body);
  res.json({ success: true });
};

exports.delete = async (req, res) => {
  await About.delete(req.params.id);
  res.json({ success: true });
};
