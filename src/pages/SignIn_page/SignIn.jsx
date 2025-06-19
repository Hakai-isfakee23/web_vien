import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Gọi API đăng nhập ở đây
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg flex w-[700px] max-w-full">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="src/assets/images/signin.jpg"
            alt="Sign in illustration"
            className="w-56 h-56 object-contain"
          />
        </div>
        <form
          className="flex-1 p-10 flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-2xl font-bold text-center">Đăng nhập</h2>
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
              <input type="checkbox" className="mr-2" />
              Ghi nhớ mật khẩu
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white rounded py-2 mb-4 hover:bg-blue-500 transition"
          >
            Đăng nhập
          </button>
          <div className="mb-4">
            <a href="/signup" className="text-gray-800 underline text-sm">
              Chưa có tài khoản? Đăng ký ngay
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Hoặc đăng nhập với</span>
            <button
              type="button"
              className="bg-[#3b5998] text-white rounded w-8 h-8"
            >
              f
            </button>
            <button
              type="button"
              className="bg-[#1da1f2] text-white rounded w-8 h-8"
            >
              t
            </button>
            <button
              type="button"
              className="bg-[#ea4335] text-white rounded w-8 h-8"
            >
              G
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
