import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreNews4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-4 max-w-6xl">
          <h1
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="zoom-out"
          >
            Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và
            Giáo dục theo tinh thần của UNESCO
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục
                phối hợp cùng Trung tâm UNESCO Khoa học, Công nghệ và Tư vấn đầu
                tư phát triển đã tổ chức{" "}
                <strong>
                  Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công
                  nghệ và Giáo dục theo tinh thần của UNESCO.
                </strong>
              </p>
              <p className="text-gray-700 mb-4">
                Lớp học được tổ chức với mục tiêu nhằm giúp cho học viên là cán
                bộ quản lý khoa học, công nghệ và giáo dục; các nhà khoa học,
                giáo dục, doanh nghiệp và cộng đồng hiểu biết về:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li className="text-gray-700 mb-4">
                  Lịch sử ra đời, tôn chỉ, mục đích, mục tiêu, cơ cấu tổ chức,
                  vai trò, chức năng, nhiệm vụ, các lĩnh vực và chương trình
                  hoạt động của UNESCO.
                </li>
                <li className="text-gray-700 mb-4">
                  Hệ thống các khái niệm cơ bản và quan điểm của UNESCO về mục
                  tiêu và nội dung hoạt động của UNESCO và công tác UNESCO.
                </li>
                <li>
                  Hệ thống các khái niệm và quan điểm cơ bản của UNESCO về phát
                  triển Khoa học, Công nghệ và Giáo dục, giới thiệu các chương
                  trình khoa học, công nghệ và giáo dục của UNESCO, định hướng
                  tiếp cận, nghiên cứu và triển khai các chương trình, dự án về
                  khoa học, công nghệ và giáo dục với sự tư vấn và hỗ trợ của
                  UNESCO.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Lớp học được sự quan tâm của nhiều nhà khoa học, nhà nguyên cứu,
                giảng viên và học viên tìm hiểu và tham gia lớp. Tại lễ Khai
                giảng lớp, TS. Lê Văn Tấn – Viện trưởng Viện Phát triển Khoa học
                Công nghệ và Giáo dục (ISED) chia sẻ:{" "}
                <em>
                  "Bám sát chức năng, nhiệm vụ của Viện nên những lớp Bồi dưỡng
                  mang nhiều giá trị được chia sẻ đến Cộng đồng, trong thời gian
                  tới những Lớp bồi dưỡng sẽ liên tục được mở hàng tháng với
                  những chủ đề, lĩnh vực phong phú hơn nữa".
                </em>
              </p>
              <img
                src="/src/assets/images/more_news4_1.jpg"
                alt="Placeholder 1"
                className="w-full h-auto rounded-lg"
              />
              <br />
              <p className="text-gray-700 mb-4">
                Tại lớp học, GS. TS. Nguyễn Tấn Anh (Giám đốc Trung tâm UNESCO
                Khoa học, Công nghệ và Tư vấn đầu tư phát triển) đã trao đổi và
                trình bày với với các học viên với 3 chuyên đề:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li className="text-gray-700 mb-4">UNESCO là gì?</li>
                <li className="text-gray-700 mb-4">
                  Giáo dục hiểu biết quốc tế, hợp tác và hòa bình theo tinh thần
                  của UNESCO.
                </li>
                <li>
                  Phát triển khoa học, công nghệ và giáo dục theo tinh thần của
                  UNESCO.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Thông qua lớp học này, học viên đã có được hiểu biết cơ bản về
                UNESCO và công tác UNESCO; có nhận thức đúng và triển khai có
                hiệu quả chương trình và dự án của UNESCO theo đúng tôn chỉ, mục
                đích và mục tiêu của UNESCO.
              </p>
              <p className="text-gray-700 mb-4">
                Cũng trong lễ tổng kết, GS. TS. Nguyễn Tấn Anh cũng đã chúc mừng
                và trao thẻ hội viên cho những thành viên mới của Liên hiệp Các
                hội UNESCO Việt Nam, và hy vọng những hội viên mới sẽ đóng góp
                công sức của mình để thực hiện sứ mệnh của tổ chức UNESCO.
              </p>
              <img
                src="/src/assets/images/more_news4_2.jpg"
                alt="Placeholder 1"
                className="w-full h-auto rounded-lg"
              />
              <br />
              <img
                src="/src/assets/images/more_news4_3.jpg"
                alt="Placeholder 1"
                className="w-full h-auto rounded-lg"
              />
              <br />
              <img
                src="/src/assets/images/more_news4_4.jpg"
                alt="Placeholder 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Sidebar */}
            <aside
              className="inline-block p-4 -mt-4 sticky top-30 self-start"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Các tin tức khác
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/more_news6"
                    className="text-blue-600 hover:underline"
                  >
                    Lễ ra mắt Trung tâm Đào tạo và Chuyển giao công nghệ (T3C)
                  </a>
                </li>
                <li>
                  <a
                    href="/more_news5"
                    className="text-blue-600 hover:underline"
                  >
                    Ký kết biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương
                    mại Dịch vụ CHUYÊN TÂM
                  </a>
                </li>
                <li>
                  <a
                    href="/more_news1"
                    className="text-blue-600 hover:underline"
                  >
                    Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển,
                    bảo vệ môi trường bền vững
                  </a>
                </li>
                <li>
                  <a
                    href="/more_news3"
                    className="text-blue-600 hover:underline"
                  >
                    Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm
                    việc với Trường THPT Cần Thạnh
                  </a>
                </li>
                <li>
                  <a
                    href="/more_news2"
                    className="text-blue-600 hover:underline"
                  >
                    Hợp tác với Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa
                    hàng hóa, tham gia thương mại điện tử và chuỗi cung ứng toàn
                    cầu
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MoreNews4;
