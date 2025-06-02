import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4 md:mb-0 space-y-2">
            <h3 className="text-lg font-bold">
              Viện Phát triển Khoa học Công nghệ và Giáo dục
            </h3>
            <p>
              224, đường Điện Biên Phủ, phường Võ Thị Sáu, quận 3, thành phố Hồ
              Chí Minh
            </p>
            <p>Phone: +84903661688</p>
            <p>Email: contact@ised.edu.vn</p>
          </div>

          {/* Center Section */}
          <div className="text-center md:text-left mb-4 md:mb-0 md:pl-4">
            <h3 className="text-lg font-bold">ISED</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline">
                  Bảng tin
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-center">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex justify-center space-x-6 mt-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/logo_FB.jpg"
                    alt="Facebook"
                    className="w-10 h-10"
                  />
                </div>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/logo_TW.jpg"
                    alt="Twitter"
                    className="w-10 h-10"
                  />
                </div>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/src/assets/images/logo_INSTA.jpg"
                    alt="Instagram"
                    className="w-10 h-10"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-lg font-bold">
          © Bản quyền của Viện Phát triển Khoa học Công nghệ và Giáo dục. All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
