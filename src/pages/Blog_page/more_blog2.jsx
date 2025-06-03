import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreBlog2 = () => {
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
            Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi, 4 phương châm
            hành động
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Bộ trưởng Nguyễn Mạnh Hùng đã chính thức công bố 5 giá trị cốt
                lõi và 4 phương châm hành động của Bộ Khoa học và Công nghệ,
                khẳng định đây là nền tảng vững chắc cho mọi hoạt động của Bộ
                trong thời gian tới.
              </p>

              <h2 className="font-bold mb-2">5 giá trị cốt lõi:</h2>
              <ol className="list-decimal list-inside mb-4 text-gray-700">
                <li>
                  <b>Tiên phong</b>: Không chỉ đi đầu trong nghiên cứu, ứng dụng
                  công nghệ mà còn sẵn sàng đối mặt với thách thức, mở đường cho
                  những hướng đi mới. Khoa học công nghệ và đổi mới sáng tạo sẽ
                  là động lực chính giúp Việt Nam thay đổi thứ hạng, phát triển
                  nhanh và bền vững.
                </li>
                <li>
                  <b>Sáng tạo</b>: Luôn tìm kiếm cái mới, cải tiến và tạo ra sự
                  khác biệt. Sáng tạo không chỉ là phát minh mà còn là đổi mới
                  và ứng dụng thực tiễn, góp phần thúc đẩy sự phát triển của xã
                  hội và nền kinh tế.
                </li>
                <li>
                  <b>Đột phá</b>: Tạo ra những bước tiến mang tính cách mạng,
                  phá vỡ những giới hạn cũ để xây dựng mô hình mới. Khoa học
                  công nghệ chính là chìa khóa giúp đất nước phát triển nhanh
                  chóng và bền vững.
                </li>
                <li>
                  <b>Trung dũng</b>: Kết hợp giữa lòng trung thành, sự dũng cảm
                  và trung thực. Trung thành với lý tưởng, dám nhận thử thách,
                  đối mặt với khó khăn và luôn giữ vững tinh thần trách nhiệm.
                </li>
                <li>
                  <b>Nghĩa tình</b>: Thể hiện lòng biết ơn, tri ân các thế hệ đi
                  trước và tiếp nối những giá trị truyền thống để xây dựng tương
                  lai. Nghĩa tình tạo nên sự kết nối bền chặt giữa các thế hệ,
                  tạo động lực phát triển bền vững.
                </li>
              </ol>

              <h2 className="font-bold mb-2">4 phương châm hành động:</h2>
              <ol className="list-decimal list-inside mb-4 text-gray-700">
                <li>
                  <b>Làm gương</b>: Người lãnh đạo phải nói trước, làm trước để
                  tạo niềm tin và động lực cho tập thể. Đây là yếu tố quan trọng
                  hàng đầu trong quản lý và phát triển tổ chức.
                </li>
                <li>
                  <b>Kỷ cương</b>: Mọi cá nhân trong tổ chức đều phải tuân thủ
                  nguyên tắc và kỷ luật nghiêm ngặt. Kỷ cương là yếu tố then
                  chốt tạo nên sức mạnh tập thể và đảm bảo sự thành công của tổ
                  chức.
                </li>
                <li>
                  <b>Trọng tâm</b>: Tập trung vào những nhiệm vụ then chốt, ưu
                  tiên giải quyết những vấn đề quan trọng để tạo ra hiệu quả cao
                  nhất.
                </li>
                <li>
                  <b>Bứt phá</b>: Hành động mạnh mẽ, quyết liệt để đạt được
                  những thành tựu đột phá, tạo động lực phát triển nhanh và bền
                  vững.
                </li>
              </ol>

              <p className="text-gray-700 mb-4">
                Việc xác định rõ giá trị cốt lõi và phương châm hành động sẽ
                giúp Bộ Khoa học và Công nghệ tiếp tục phát huy vai trò tiên
                phong trong nghiên cứu, ứng dụng và đổi mới sáng tạo, góp phần
                đưa Việt Nam tiến nhanh trên con đường trở thành quốc gia phát
                triển với thu nhập cao.
              </p>
              <img
                src="/src/assets/images/more_blog2_1.jpg"
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
                Các Blog khác
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/more_blog1"
                    className="text-blue-600 hover:underline"
                  >
                    Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung
                    Kiến trúc Chính phủ Số Việt Nam
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

export default MoreBlog2;
