import React, { useState, useRef } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

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

          {/* Search Bar và Nút Đăng nhập */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            <a
              href="/signin"
              className="ml-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-semibold shadow"
            >
              Đăng nhập
            </a>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
