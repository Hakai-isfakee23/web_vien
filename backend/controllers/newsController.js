const News = require("../models/newsModel");

exports.getAll = async (req, res) => {
  const [rows] = await News.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await News.create(req.body);
  res.json({ success: true });
};

exports.update = async (req, res) => {
  await News.update(req.params.id, req.body);
  res.json({ success: true });
};

exports.delete = async (req, res) => {
  await News.delete(req.params.id);
  res.json({ success: true });
};
