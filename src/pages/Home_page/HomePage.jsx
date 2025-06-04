import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import unitsData from "../../datas/unitsData";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const HomePage = () => {
  const units = unitsData;

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 overflow-hidden">
        {/* Hero Section */}
        <section
          className="flex flex-col items-center justify-center pt-8 pb-4"
          data-aos="fade-down"
        >
          <div className="max-w-lg w-full">
            <Banner />
          </div>
          <div className="mt-1 text-center">
            <h1 className="text-4xl font-bold text-blue-600">
              <span className="text-black">
                Chào mừng quý khách đã đến thăm{" "}
              </span>
              <span className="text-blue-600">ISED</span>.
            </h1>
            <p className="text-2xl mt-4 text-gray-700">
              Viện Phát triển Khoa học Công nghệ và Giáo dục.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Các dịch vụ của chúng tôi
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div
              className="bg-white shadow-md p-6 rounded-lg flex flex-col"
              data-aos="zoom-in"
              data-aos-delay="0"
            >
              <div className="text-blue-600 text-4xl mb-4 text-center">⚙️</div>
              <a href="/more_service1">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Đào tạo, nâng cao kiến thức và năng lực chuyên môn
                </h3>
              </a>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan
                trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn,
                sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.
              </p>
              <a
                href="/more_service1"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </a>
            </div>
            <div
              className="bg-white shadow-md p-6 rounded-lg flex flex-col"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="text-blue-600 text-4xl mb-4 text-center">📚</div>
              <a href="/more_service2">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền
                </h3>
              </a>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của
                các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu
                thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu
                liên kết và nhãn hiệu nổi tiếng.
              </p>
              <a
                href="/more_service2"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </a>
            </div>
            <div
              className="bg-white shadow-md p-6 rounded-lg flex flex-col"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-blue-600 text-4xl mb-4 text-center">🌐</div>
              <a href="/more_service3">
                <h3 className="text-lg font-bold text-left hover:text-blue-600">
                  Dịch vụ chứng nhận ISO 9001:2015
                </h3>
              </a>
              <p className="mt-2 text-gray-600 text-left flex-grow">
                Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành
                một quá trình đánh giá và xác minh của một tổ chức độc lập bên
                thứ 3 để chứng minh rằng hệ thống quản lý chất lượng của doanh
                nghiệp mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.
              </p>
              <a
                href="/more_service3"
                className="mt-4 text-blue-600 font-medium hover:underline text-center"
              >
                Read more →
              </a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-gray-100 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Các tin tức mới nhất
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-right"
            >
              <img
                src="/src/assets/images/News1.jpg"
                alt="News 1"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <a href="/more_news1">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển,
                    bảo vệ môi trường bền vững
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Trước thực trạng ô nhiễm môi trường do ắc quy, axit chì thải
                  gây ra ngày càng nghiêm trọng, Viện Phát triển Khoa học Công
                  nghệ và Giáo Dục, phối hợp cùng Tiến sĩ Dương Văn Sinh, chính
                  thức triển khai Đề án “1 triệu bình ắc quy xanh”.
                </p>
                <a
                  href="/more_news1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </a>
              </div>
            </div>
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
              <img
                src="/src/assets/images/News2.jpg"
                alt="News 2"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <a href="/more_news2">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Hợp tác với Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa
                    hàng hóa, tham gia thương mại điện tử và chuỗi cung ứng toàn
                    cầu
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Nhằm thúc đẩy sự phát triển của các doanh nghiệp Việt Nam trên
                  thị trường thương mại điện tử và chuỗi cung ứng toàn cầu, Viện
                  Phát triển Khoa học Công nghệ và Giáo dục đã làm việc với
                  Alibaba Việt Nam để hỗ trợ các doanh nghiệp trong việc chuẩn
                  hóa hàng hóa theo các tiêu chuẩn quốc tế vào ngày 18/02/2025.
                </p>
                <a
                  href="/more_news2"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </a>
              </div>
            </div>
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-left"
            >
              <img
                src="/src/assets/images/News3.jpg"
                alt="News 3"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <a href="/more_news3">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm
                    việc với Trường THPT Cần Thạnh
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Ngày 05/08/2024, Viện Phát triển Khoa học Công nghệ và Giáo
                  dục (ISED) đã có chuyến thăm và làm việc với Ban Giám hiệu
                  Trường THPT Cần Thạnh (Huyện Cần Giờ, Thành phố Hồ Chí Minh).
                </p>
                <a
                  href="/more_news3"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Thông báo Section */}
        <section className="container mx-auto px-4 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Thông báo
          </h2>
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
                <a href="/more_announce1">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng
                  Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát
                  triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp
                  học “Lập trình HTML, CSS và Javascript” miễn phí.
                </p>
                <a
                  href="/more_announce1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mx-auto px-4 py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
              <img
                src="/src/assets/images/Blog1.jpg"
                alt="Khung Kiến trúc Chính phủ Số Việt Nam"
                className="w-full h-65 object-cover"
                style={{ maxHeight: 220 }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <a
                  href="/more_blog1"
                  className="text-lg font-bold text-left hover:text-blue-600 block"
                >
                  Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung Kiến
                  trúc Chính phủ Số Việt Nam
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Bộ Khoa học và Công nghệ (KH&CN) vừa chính thức ban hành Khung
                  Kiến trúc Chính phủ số Việt Nam, phiên bản 4.0. Bản cập nhật
                  này sẽ là cơ sở quan trọng giúp các bộ, ngành, địa phương điều
                  chỉnh khung kiến trúc số của mình cho phù hợp với thực tiễn,
                  hướng tới sự kết nối và liên thông hiệu quả.
                </p>
                <a
                  href="/more_blog1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Đọc tiếp &rarr;
                </a>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/src/assets/images/Blog2.jpg"
                alt="Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi"
                className="w-full h-65 object-cover"
                style={{ maxHeight: 220 }}
              />
              <div className="p-4 flex flex-col flex-grow">
                <a
                  href="/more_blog2"
                  className="text-lg font-bold text-left hover:text-blue-600 block"
                >
                  Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi, 4 phương
                  châm hành động
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Bộ trưởng Nguyễn Mạnh Hùng đã chính thức công bố 5 giá trị cốt
                  lõi và 4 phương châm hành động của Bộ Khoa học và Công nghệ,
                  khẳng định đây là nền tảng vững chắc cho mọi hoạt động của Bộ
                  trong thời gian tới.
                </p>
                <a
                  href="/more_blog2"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Đọc tiếp &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Các đơn vị trực thuộc Section */}
        <section className="container mx-auto px-4 py-16" data-aos="fade-up">
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
                data-aos="zoom-in"
                data-aos-delay={index * 100}
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
        <section className="container mx-auto px-4 py-16" data-aos="fade-up">
          <ContactForm />
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
