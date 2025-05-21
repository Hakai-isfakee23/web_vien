import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            data-aos="flip-left"
          >
            Các tin tức mới nhất
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Cards */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
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
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="200"
            >
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
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="/src/assets/images/News4.jpg"
                alt="News 4"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news4">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công
                    nghệ và Giáo dục theo tinh thần của UNESCO
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo
                  dục phối hợp cùng Trung tâm UNESCO Khoa học, Công nghệ và Tư
                  vấn đầu tư phát triển đã tổ chức Lớp bồi dưỡng kiến thức
                  UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục theo tinh
                  thần của UNESCO.
                </p>
                <Link
                  to="/more_news4"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="/src/assets/images/News5.jpg"
                alt="News 5"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news5">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Ký kết biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương
                    mại Dịch vụ CHUYÊN TÂM
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Vào ngày 15/03/2024, Trung tâm Đào tạo và Chuyển giao công
                  nghệ (T3C) đã tiến hành ký biên bản ghi nhớ hợp tác với Công
                  ty TNHH MTV Thương mại Dịch vụ CHUYÊN TÂM (Chuyên Tâm).
                </p>
                <Link
                  to="/more_news5"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="/src/assets/images/News6.jpg"
                alt="News 6"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <Link to="/more_news6">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Lễ ra mắt Trung tâm Đào tạo và Chuyển giao công nghệ (T3C)
                  </h3>
                </Link>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Trong không khí hân hoan chuẩn bị chào đón năm Giáp Thìn 2024,
                  vào sáng ngày 27/01/2024, Viện Phát triển Khoa học Công nghệ
                  và Giáo dục đã tổ chức lễ ra mắt Trung tâm Đào tạo và Chuyển
                  giao công nghệ trực thuộc Viện.
                </p>
                <Link
                  to="/more_news6"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            data-aos="fade-down"
          >
            Thông báo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="zoom-in"
            >
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
      </main>
      <Footer />
    </>
  );
};

export default News;
