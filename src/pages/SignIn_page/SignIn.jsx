import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", data.username);
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Lỗi kết nối server!");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: 'url("src/assets/images/bg_signin_signup.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-full max-w-4xl mx-auto flex flex-col items-center mt-12 mb-8 bg-white bg-opacity-95 rounded-2xl shadow-2xl z-10 p-8"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-center mb-6">
          <img
            src="src/assets/images/logo_ISED.jpg"
            alt="ISED Logo"
            className="w-28 h-28 mr-4"
          />
          <span className="text-3xl md:text-4xl font-bold text-blue-600 text-center drop-shadow">
            Viện Phát triển Khoa học Công nghệ và Giáo dục
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center w-full">
          <div className="bg-white rounded-2xl shadow-lg flex w-[700px] max-w-full mt-0">
            <div className="flex-1 flex flex-col items-center justify-center">
              <img
                src="src/assets/images/signin.jpg"
                alt="Sign in illustration"
                className="w-56 h-56 object-contain"
              />
              <a
                href="/"
                className="mt-4 font-bold bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition text-center"
              >
                ← Quay về trang chủ
              </a>
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
                <label className="flex items-center relative w-full">
                  <span className="mr-2">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-4/5 py-2 border-0 border-b border-gray-300 focus:outline-none pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    tabIndex={-1}
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    <img
                      src={
                        showPassword
                          ? "/src/assets/images/hide_pass.jpg"
                          : "/src/assets/images/show_pass.jpg"
                      }
                      alt={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                      className="w-6 h-6"
                    />
                  </button>
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
      </div>
    </div>
  );
}
