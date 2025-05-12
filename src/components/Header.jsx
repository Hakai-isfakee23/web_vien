import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
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
          <div className="relative w-120">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-blue-500 absolute right-3 top-2.5" />
            {filteredResults.length > 0 && (
              <ul className="absolute bg-white border rounded-lg mt-2 w-full shadow-lg z-10">
                {filteredResults.map((result) => (
                  <li key={result.id} className="p-2 hover:bg-gray-100">
                    <Link
                      to={result.link}
                      className="text-blue-600 hover:underline"
                    >
                      {result.title}
                    </Link>
                  </li>
                ))}
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
