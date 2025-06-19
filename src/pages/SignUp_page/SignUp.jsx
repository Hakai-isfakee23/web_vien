import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    // TODO: Gọi API đăng ký ở đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg flex w-[700px] max-w-full">
        <form
          className="flex-1 p-10 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-2xl font-bold text-center">Đăng ký</h2>
          <div className="mb-4">
            <label className="flex items-center">
              <span className="mr-2">👤</span>
              <input
                type="text"
                placeholder="Tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-4/5 py-2 border-0 border-b border-gray-300 focus:outline-none"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <span className="mr-2">📧</span>
              <input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-4/5 py-2 border-0 border-b border-gray-300 focus:outline-none"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <span className="mr-2">🔒</span>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-4/5 py-2 border-0 border-b border-gray-300 focus:outline-none"
                required
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <span className="mr-2">🔒</span>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="w-4/5 py-2 border-0 border-b border-gray-300 focus:outline-none"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white rounded py-2 mb-4 hover:bg-blue-500 transition"
          >
            Đăng ký
          </button>
          <div>
            <span
              className="text-sm underline cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              Đã có tài khoản? Đăng nhập ngay
            </span>
          </div>
        </form>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="src/assets/images/signup.jpg"
            alt="Sign up illustration"
            className="w-56 h-56 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
