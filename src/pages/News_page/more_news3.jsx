import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreNews3 = () => {
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
            Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm việc với
            Trường THPT Cần Thạnh
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Ngày 05/08/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục
                (ISED) đã có chuyến thăm và làm việc với Ban Giám hiệu Trường
                THPT Cần Thạnh (Huyện Cần Giờ, Thành phố Hồ Chí Minh).
              </p>
              <p className="text-gray-700 mb-4">
                Trong buổi làm việc, đại diện ISED và Ban Giám hiệu nhà trường
                đã trao đổi và thảo luận về phương án hợp tác nhằm triển khai
                giáo dục STEM cho học sinh của trường. Các nội dung chính của
                buổi làm việc bao gồm:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  <strong>Đào tạo giáo viên:</strong> ISED sẽ tiến hành đào tạo
                  giáo viên của trường về xây dựng giáo án STEM và các phương
                  pháp giảng dạy tích cực.
                </li>
                <li>
                  <strong>Chuyển giao chương trình đào tạo:</strong> ISED sẽ
                  cung cấp các chương trình đào tạo về STEM cho nhà trường.
                </li>
                <li>
                  <strong>Tư vấn xây dựng chương trình:</strong> ISED sẽ hỗ trợ
                  tư vấn cho nhà trường trong việc xây dựng các chương trình đào
                  tạo STEM.
                </li>
                <li>
                  <strong>Thành lập Câu lạc bộ Tài năng Lập trình:</strong> ISED
                  sẽ kết hợp với nhà trường để thành lập Câu lạc bộ Tài năng Lập
                  trình, tạo sân chơi lành mạnh và định hướng nghề nghiệp về lập
                  trình cho những học sinh đam mê lĩnh vực này.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Trong khuôn khổ buổi làm việc, ISED đã tổ chức một lớp học thử
                về lĩnh vực STEM Lập trình cho các giáo viên của trường, với chủ
                đề Thiết kế website cá nhân. Các giáo viên đã được trải nghiệm
                một lớp học STEM thực tế, áp dụng nền tảng đào tạo trực tuyến{" "}
                <strong>Xuân Tuyền Education</strong> trong việc quản lý lớp học
                và lập trình ngôn ngữ HTML và CSS để tạo ra các trang web cá
                nhân của mình.
              </p>
              <p className="text-gray-700 mb-4">
                Buổi làm việc đã diễn ra thành công tốt đẹp, mở ra cơ hội hợp
                tác chặt chẽ giữa Viện Phát triển Khoa học Công nghệ và Giáo dục
                (ISED) và Trường THPT Cần Thạnh trong việc đẩy mạnh giáo dục
                STEM trong nhà trường.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                Các hình ảnh của buổi làm việc
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="/src/assets/images/more_news3_1.jpg"
                  alt="Placeholder 1"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/src/assets/images/more_news3_2.jpg"
                  alt="Placeholder 2"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/src/assets/images/more_news3_3.jpg"
                  alt="Placeholder 3"
                  className="w-full h-auto rounded-lg"
                />
                <img
                  src="/src/assets/images/more_news3_4.jpg"
                  alt="Placeholder 4"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside
              className="inline-block p-4 -mt-4 sticky top-35 self-start"
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
                    href="/more_news4"
                    className="text-blue-600 hover:underline"
                  >
                    Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công
                    nghệ và Giáo dục theo tinh thần của UNESCO
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

export default MoreNews3;
