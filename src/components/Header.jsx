import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  const data = [
    { id: 1, title: "Đề án 1 triệu ắc quy xanh", link: "/more_news1" },
    { id: 2, title: "Hợp tác với Alibaba Việt Nam", link: "/more_news2" },
    {
      id: 3,
      title: "Thăm và làm việc với Trường THPT Cần Thạnh",
      link: "/more_news3",
    },
    { id: 4, title: "Lớp bồi dưỡng kiến thức UNESCO", link: "/more_news4" },
    {
      id: 5,
      title:
        "Ký kết biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương mại Dịch vụ CHUYÊN TÂM",
      link: "/more_news5",
    },
    {
      id: 6,
      title: "Lễ ra mắt Trung tâm Đào tạo và Chuyển giao công nghệ (T3C)",
      link: "/more_news6",
    },
    {
      id: 7,
      title: "Dịch vụ đào tạo, nâng cao kiến thức",
      link: "/more_service1",
    },
    { id: 8, title: "Dịch vụ đăng ký thương hiệu", link: "/more_service2" },
    {
      id: 9,
      title: "Dịch vụ chứng nhận ISO 9001:2015",
      link: "/more_service3",
    },
    {
      id: 10,
      title: "Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí",
      link: "/more_announcement1",
    },
    {
      id: 11,
      title: "Giới thiệu về Viện Phát triển Khoa học Công nghệ và Giáo dục",
      link: "/About",
    },
  ];

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim()) {
      setLoading(true);
      setShowDropdown(true);
      setActiveIndex(-1);

      setTimeout(() => {
        const results = data.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
        setFilteredResults(results);
        setLoading(false);
      }, 500);
    } else {
      setFilteredResults([]);
      setShowDropdown(false);
      setLoading(false);
      setActiveIndex(-1);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filteredResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      window.location.href = filteredResults[activeIndex].link;
      setShowDropdown(false);
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight matched text
  const highlightMatch = (title) => {
    const idx = title.toLowerCase().indexOf(searchQuery);
    if (idx === -1 || !searchQuery) return title;
    return (
      <>
        {title.slice(0, idx)}
        <span className="font-bold bg-yellow-100">
          {title.slice(idx, idx + searchQuery.length)}
        </span>
        {title.slice(idx + searchQuery.length)}
      </>
    );
  };

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
          <div className="relative w-120" ref={searchRef}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
              onFocus={() => searchQuery && setShowDropdown(true)}
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 absolute right-3 top-2.5" />
            {showDropdown && (
              <ul className="absolute bg-white border rounded-lg mt-2 w-full shadow-lg z-10 max-h-60 overflow-auto">
                {loading ? (
                  <li className="p-2 flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-blue-600"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <span className="ml-2 text-blue-600">Đang tìm kiếm...</span>
                  </li>
                ) : filteredResults.length > 0 ? (
                  filteredResults.map((result, idx) => (
                    <li
                      key={result.id}
                      className={`p-2 hover:bg-gray-100 cursor-pointer ${
                        idx === activeIndex ? "bg-blue-100" : ""
                      }`}
                      onMouseDown={() => (window.location.href = result.link)}
                    >
                      <span className="text-blue-600 hover:underline">
                        {highlightMatch(result.title)}
                      </span>
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-500">Không tìm thấy kết quả</li>
                )}
              </ul>
            )}
          </div>
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
