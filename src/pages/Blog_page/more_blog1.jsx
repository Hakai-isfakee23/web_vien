import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreBlog1 = () => {
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
            Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung Kiến trúc
            Chính phủ Số Việt Nam
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Bộ Khoa học và Công nghệ (KH&CN) vừa chính thức ban hành Khung
                Kiến trúc Chính phủ số Việt Nam, phiên bản 4.0. Bản cập nhật này
                sẽ là cơ sở quan trọng giúp các bộ, ngành, địa phương điều chỉnh
                khung kiến trúc số của mình cho phù hợp với thực tiễn, hướng tới
                sự kết nối và liên thông hiệu quả.
              </p>

              <h2 className="font-bold mb-2">
                Khung Kiến trúc Chính phủ số: Bức tranh tổng thể
              </h2>
              <p className="text-gray-700 mb-4">
                Khung Kiến trúc Chính phủ số là một bức tranh tổng thể mô tả các
                thành phần và mối quan hệ trong hệ thống chính phủ số. Giống như
                một tấm bản đồ, khung kiến trúc giúp các bên liên quan xác định
                vị trí, hình dung những công việc đã thực hiện và những nhiệm vụ
                cần tiếp tục triển khai. Từ đó, giúp đảm bảo sự kết nối, liên
                thông giữa các hệ thống và tránh trùng lắp.
              </p>

              <h2 className="font-bold mb-2">
                Yêu cầu triển khai phiên bản 4.0 từ trung ương đến địa phương
              </h2>
              <p className="text-gray-700 mb-4">
                Ngày 30/3, Cục Chuyển đổi số quốc gia (Bộ KH&CN) đã đề nghị các
                đơn vị chuyên trách CNTT tại các bộ, ngành, địa phương nhanh
                chóng nghiên cứu và đề xuất khung kiến trúc số cấp bộ (đối với
                các bộ) và khung kiến trúc số cấp tỉnh (đối với các tỉnh, thành
                phố trực thuộc Trung ương) dựa trên phiên bản mới nhất.
              </p>
              <p className="text-gray-700 mb-4">
                Theo hướng dẫn, việc xây dựng khung kiến trúc số phiên bản 4.0
                cần bám sát và nâng cấp từ phiên bản trước, bảo đảm phù hợp với
                cơ cấu tổ chức mới của các bộ, ngành, địa phương; đồng thời
                thích ứng với các chủ trương sắp nhập đơn vị hành chính.
              </p>

              <h2 className="font-bold mb-2">
                Những điểm mới trong phiên bản 4.0
              </h2>
              <p className="text-gray-700 mb-2">
                Bản cập nhật Khung Kiến trúc Chính phủ số Việt Nam, phiên bản
                4.0 có những điểm mới quan trọng:
              </p>
              <ul className="list-decimal list-inside mb-4 text-gray-700">
                <li>
                  Cập nhật theo Luật Giao dịch điện tử 2023, đồng bộ với quy
                  định có hiệu lực từ tháng 7/2024.
                </li>
                <li>
                  Bổ sung nội dung từ Nghị quyết 57 của Bộ Chính trị về đổi mới
                  sáng tạo và chuyển đổi số quốc gia.
                </li>
                <li>
                  Cập nhật các mô hình tham chiếu, gồm: mô hình tham chiếu
                  nghiệp vụ, dữ liệu, ứng dụng, công nghệ và an toàn thông tin.
                </li>
              </ul>

              <h2 className="font-bold mb-2">Hướng đi tương lai</h2>
              <p className="text-gray-700 mb-4">
                Việc ban hành phiên bản 4.0 nhằm mục tiêu tăng cường kết nối,
                chia sẻ dữ liệu, bảo đảm an toàn thông tin trong triển khai
                Chính phủ số. Các bộ, ngành, địa phương cần nhanh chóng áp dụng
                để đảm bảo tính đồng bộ và hiệu quả trong quá trình chuyển đổi
                số toàn diện.
              </p>
              <img
                src="/src/assets/images/Blog1.jpg"
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
                    href="/more_blog2"
                    className="text-blue-600 hover:underline"
                  >
                    Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi, 4 phương
                    châm hành động
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

export default MoreBlog1;
