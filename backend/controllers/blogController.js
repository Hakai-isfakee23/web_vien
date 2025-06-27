const Blog = require("../models/blogModel");

exports.getAll = async (req, res) => {
  const [rows] = await Blog.getAll();
  res.json(rows);
};

exports.create = async (req, res) => {
  await Blog.create(req.body);
  res.json({ success: true });
};

exports.update = async (req, res) => {
  await Blog.update(req.params.id, req.body);
  res.json({ success: true });
};

exports.delete = async (req, res) => {
  await Blog.delete(req.params.id);
  res.json({ success: true });
};
