import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
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
          <a href="/news" className="hover:underline text-sm font-medium">
            BẢNG TIN
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
