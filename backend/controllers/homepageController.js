const Homepage = require("../models/homepageModel");

// Banner
exports.getBanner = async (req, res) => {
  const [rows] = await Homepage.getBanner();
  res.json(rows[0] || {});
};
exports.updateBanner = async (req, res) => {
  await Homepage.updateBanner(req.body);
  res.json({ success: true });
};

// Units
exports.getUnits = async (req, res) => {
  const [rows] = await Homepage.getUnits();
  res.json(rows);
};
exports.createUnit = async (req, res) => {
  await Homepage.createUnit(req.body);
  res.json({ success: true });
};
exports.updateUnit = async (req, res) => {
  await Homepage.updateUnit(req.params.id, req.body);
  res.json({ success: true });
};
exports.deleteUnit = async (req, res) => {
  await Homepage.deleteUnit(req.params.id);
  res.json({ success: true });
};
