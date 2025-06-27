import React, { useState, useRef, useEffect } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const timeoutRef = useRef(null);

  // Lấy role và username từ localStorage
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  // Để cập nhật khi đăng nhập/xuất
  useEffect(() => {
    const syncUser = () => {
      setRole(localStorage.getItem("role"));
      setUsername(localStorage.getItem("username"));
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  // Xử lý mở dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  // Xử lý đóng dropdown có delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 120);
  };

  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    setRole(null);
    setUsername(null);
    setUserDropdown(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <a
            href="/"
            className="flex items-center space-x-4 group"
            style={{ textDecoration: "none" }}
          >
            <img
              src="/src/assets/images/logo_ISED.jpg"
              alt="Logo"
              className="h-18 w-18"
            />
            <div className="text-3xl font-bold text-blue-600 group-hover:underline">
              Viện Phát triển Khoa học Công nghệ và Giáo dục
            </div>
          </a>

          {/* Search Bar và Đăng nhập/Chào user */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            {!username ? (
              <a
                href="/signin"
                className="ml-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-semibold shadow"
              >
                Đăng nhập
              </a>
            ) : (
              <div className="relative">
                <button
                  className="ml-4 px-5 py-2 text-blue-700 rounded font-bold shadow-none transition-colors outline-none focus:outline-none hover:underline flex items-center text-md"
                  style={{
                    background: "none",
                    border: "none",
                    boxShadow: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setUserDropdown((v) => !v)}
                >
                  Xin chào, <span className="capitalize ml-1">{username}</span>
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50 border border-gray-200 animate-fade-in">
                    <button
                      className="flex items-center w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold rounded text-lg"
                      onClick={handleLogout}
                    >
                      <img
                        src="/src/assets/images/logout.jpg"
                        alt="Đăng xuất"
                        className="w-6 h-6 mr-2"
                      />
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-blue-600">
        <nav className="container mx-auto px-3 py-2 flex justify-center space-x-2 text-white">
          <a
            href="/"
            className="relative px-5 py-2 rounded transition-colors duration-150 text-base font-medium hover:bg-blue-100 hover:text-blue-700"
          >
            Trang chủ
          </a>
          <a
            href="/about"
            className="relative px-5 py-2 rounded transition-colors duration-150 text-base font-medium hover:bg-blue-100 hover:text-blue-700 flex items-center"
          >
            Giới thiệu
          </a>
          <a
            href="/services"
            className="relative px-5 py-2 rounded transition-colors duration-150 text-base font-medium hover:bg-blue-100 hover:text-blue-700"
          >
            Dịch vụ
          </a>
          {/* Dropdown for BẢNG TIN */}
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center px-5 py-2 rounded transition-colors duration-150 text-base font-medium focus:outline-none ${
                dropdownOpen
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-100 hover:text-blue-700"
              }`}
              type="button"
            >
              Bảng tin
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`absolute left-0 mt-2 w-44 bg-blue-700 rounded shadow-lg z-50 transition-all duration-150 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="/news"
                className="block px-4 py-2 pl-4 text-white transition-colors hover:bg-blue-300 hover:text-blue-700 font-bold"
                onClick={() => setDropdownOpen(false)}
              >
                Tin tức
              </a>
              <a
                href="/blog"
                className="block px-4 py-2 pl-4 text-white transition-colors hover:bg-blue-300 hover:text-blue-700 font-bold"
                onClick={() => setDropdownOpen(false)}
              >
                Blog
              </a>
            </div>
          </div>
          {/* Nút Quản lý chỉ hiện khi là admin */}
          {role === "admin" && (
            <a
              href="/admin"
              className="relative px-5 py-2 rounded transition-colors duration-150 text-base font-bold bg-yellow-500 hover:bg-yellow-600 ml-2"
            >
              Quản lý
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
