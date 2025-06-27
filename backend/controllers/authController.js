const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await userModel.findByUsername(username);
  if (user) return res.status(400).json({ message: "Username đã tồn tại" });

  const hash = await bcrypt.hash(password, 10);
  await userModel.createUser(username, email, hash);
  res.json({ message: "Đăng ký thành công" });
};

exports.signin = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findByUsername(username);
  if (!user)
    return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu" });

  const match = await bcrypt.compare(password, user.password);
  if (!match)
    return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu" });

  // Tạo token
  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  res.json({ token, role: user.role, username: user.username });
};
