import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";

const HomePage = () => {
  const units = [
    {
      logo: "/src/assets/images/DTC_logo.jpg",
      name: "Trung tâm Đào tạo và Ứng dụng Chuyển đổi số",
      url: "https://ised.edu.vn/dtc/index.php",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gray-50">
        {/* Hero Section */}
        <Banner />
        <section className="py-1 text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            <span className="text-black">Chào mừng quý khách đã đến thăm</span>{" "}
            <span className="text-blue-600">ISED</span>.
          </h1>
          <p className="text-2xl mt-4 text-gray-700">
            Viện Phát triển Khoa học Công nghệ và Giáo dục.
          </p>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Các dịch vụ của chúng tôi
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
              <div className="text-blue-600 text-4xl mb-4 text-center">⚙️</div>
              <Link to="/more_service1">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Đào tạo, nâng cao kiến thức và năng lực chuyên môn
                </h3>
              </Link>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan
                trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn,
                sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.
              </p>
              <Link
                to="/more_service1"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </Link>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
              <div className="text-blue-600 text-4xl mb-4 text-center">📚</div>
              <Link to="/more_service2">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền
                </h3>
              </Link>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của
                các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu
                thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu
                liên kết và nhãn hiệu nổi tiếng.
              </p>
              <Link
                to="/more_service2"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </Link>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex flex-col">
              <div className="text-blue-600 text-4xl mb-4 text-center">🌐</div>
              <Link to="/more_service3">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Dịch vụ chứng nhận ISO 9001:2015
                </h3>
              </Link>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành
                một quá trình đánh giá và xác minh của một tổ chức độc lập bên
                thứ 3 để chứng minh rằng hệ thống quản lý chất lượng của doanh
                nghiệp mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.
              </p>
              <Link
                to="/more_service3"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </Link>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Các tin tức mới nhất
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src="/src/assets/images/News1.jpg"
                alt="News 1"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news1">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển,
                    bảo vệ môi trường bền vững
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Trước thực trạng ô nhiễm môi trường do ắc quy, axit chì thải
                  gây ra ngày càng nghiêm trọng, Viện Phát triển Khoa học Công
                  nghệ và Giáo Dục, phối hợp cùng Tiến sĩ Dương Văn Sinh, chính
                  thức triển khai Đề án “1 triệu bình ắc quy xanh”.
                </p>
                <Link
                  to="/more_news1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src="/src/assets/images/News2.jpg"
                alt="News 2"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news2">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Hợp tác với Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa
                    hàng hóa, tham gia thương mại điện tử và chuỗi cung ứng toàn
                    cầu
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Nhằm thúc đẩy sự phát triển của các doanh nghiệp Việt Nam trên
                  thị trường thương mại điện tử và chuỗi cung ứng toàn cầu, Viện
                  Phát triển Khoa học Công nghệ và Giáo dục đã làm việc với
                  Alibaba Việt Nam để hỗ trợ các doanh nghiệp trong việc chuẩn
                  hóa hàng hóa theo các tiêu chuẩn quốc tế vào ngày 18/02/2025.
                </p>
                <Link
                  to="/more_news2"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src="/src/assets/images/News3.jpg"
                alt="News 3"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news3">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm
                    việc với Trường THPT Cần Thạnh
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Ngày 05/08/2024, Viện Phát triển Khoa học Công nghệ và Giáo
                  dục (ISED) đã có chuyến thăm và làm việc với Ban Giám hiệu
                  Trường THPT Cần Thạnh (Huyện Cần Giờ, Thành phố Hồ Chí Minh).
                </p>
                <Link
                  to="/more_news3"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Thông báo Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Thông báo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src="/src/assets/images/announcement1.jpg"
                alt="Announ 1"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_announcement1">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng
                  Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát
                  triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp
                  học “Lập trình HTML, CSS và Javascript” miễn phí.
                </p>
                <Link
                  to="/more_announcement1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Các đơn vị trực thuộc Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Các đơn vị trực thuộc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {units.map((unit, index) => (
              <a
                key={index}
                href={unit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={unit.logo}
                  alt={unit.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-center">{unit.name}</h3>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-16">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
