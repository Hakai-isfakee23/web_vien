import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/images/logo_ISED.jpg"
              alt="Logo"
              className="h-18 w-18"
            />
            <div className="text-3xl font-bold text-blue-600">
              Viện Phát triển Khoa học Công nghệ và Giáo dục
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-blue-600">
        <nav className="container mx-auto px-3 py-2 flex justify-center space-x-10 text-white">
          <Link to="/" className="hover:underline text-sm font-medium">
            TRANG CHỦ
          </Link>
          <Link to="/about" className="hover:underline text-sm font-medium">
            GIỚI THIỆU
          </Link>
          <Link to="/services" className="hover:underline text-sm font-medium">
            DỊCH VỤ
          </Link>
          <Link to="/news" className="hover:underline text-sm font-medium">
            BẢNG TIN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
