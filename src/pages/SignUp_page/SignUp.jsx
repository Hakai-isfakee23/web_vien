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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative">
      {/* Logo bên trái và text bên phải, căn giữa */}
      <div className="w-full flex flex-col items-center mt-8 mb-2">
        <div className="flex items-center justify-center mb-2">
          <img
            src="src/assets/images/logo_ISED.jpg"
            alt="ISED Logo"
            className="w-28 h-28 mr-4"
          />
          <span className="text-3xl md:text-4xl font-bold text-blue-600 text-center drop-shadow">
            Viện Phát triển Khoa học Công nghệ và Giáo dục
          </span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="bg-white rounded-2xl shadow-lg flex w-[700px] max-w-full mt-8">
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src="src/assets/images/signup.jpg"
              alt="Sign up illustration"
              className="w-56 h-56 object-contain"
            />
            {/* Nút quay về trang chủ */}
            <button
              className="mt-4 font-bold bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => navigate("/")}
            >
              ← Quay về trang chủ
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
}
