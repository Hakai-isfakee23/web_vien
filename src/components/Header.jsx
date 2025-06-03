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
    }, 120); // 120ms, có thể tăng/giảm nếu muốn
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

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-blue-600">
        <nav className="container mx-auto px-3 py-2 flex justify-center space-x-10 text-white">
          <a href="/" className="hover:underline text-sm font-medium">
            TRANG CHỦ
          </a>
          <a href="/about" className="hover:underline text-sm font-medium">
            GIỚI THIỆU
          </a>
          <a href="/services" className="hover:underline text-sm font-medium">
            DỊCH VỤ
          </a>
          {/* Dropdown for BẢNG TIN */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <button
                className="flex items-center hover:underline text-sm font-medium focus:outline-none"
                type="button"
              >
                BẢNG TIN
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
                className={`absolute left-0 mt-2 w-40 bg-blue-700 rounded shadow-lg z-50 transition-all duration-150 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="/news"
                  className="block px-4 py-2 text-white hover:bg-blue-800"
                  onClick={() => setDropdownOpen(false)}
                >
                  Tin tức
                </a>
                <a
                  href="/blog"
                  className="block px-4 py-2 text-white hover:bg-blue-800"
                  onClick={() => setDropdownOpen(false)}
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
