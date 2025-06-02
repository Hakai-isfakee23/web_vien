import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreService1 = () => {
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
            Đào tạo, nâng cao kiến thức và năng lực chuyên môn
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan
                trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn,
                sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.
              </p>
              <p className="text-gray-700 mb-4">
                Viện Phát triển Khoa học Công nghệ và Giáo dục là tổ chức khoa
                học có tư cách pháp nhân, hoạt động theo Luật Khoa học và Công
                nghệ năm 2013 cùng các nghị định, thông tư hướng dẫn liên quan.
                Với mục tiêu thúc đẩy sự phát triển của khoa học, công nghệ và
                giáo dục, Viện tập hợp đội ngũ các nhà khoa học, chuyên gia và
                cán bộ có trình độ cao để nghiên cứu, ứng dụng khoa học kỹ thuật
                vào giáo dục và đào tạo.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Chức năng đào tạo</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan
                trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn,
                sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu. Cụ
                thể, Viện thực hiện các hoạt động đào tạo theo các định hướng
                chính sau:
              </p>
              <p className="text-gray-700 mb-4">
                1. Đào tạo và tập huấn nâng cao trình độ chuyên môn
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Xây dựng và triển khai các chương trình đào tạo khoa học và
                  công nghệ ứng dụng trong giáo dục, quản lý và các lĩnh vực sản
                  xuất.
                </li>
                <li>
                  Cung cấp các khóa đào tạo chuyên sâu về kỹ thuật dạy nghề,
                  quản trị giáo dục, phát triển kỹ năng sáng tạo và đổi mới công
                  nghệ.
                </li>
              </ul>
              <br />
              <p className="text-gray-700 mb-4">
                2. Nghiên cứu và ứng dụng khoa học vào giáo dục đào tạo
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Thực hiện các nghiên cứu nhằm tối ưu hóa phương pháp giảng
                  dạy, nâng cao hiệu quả đào tạo trong môi trường xã hội hóa
                  giáo dục.
                </li>
                <li>
                  Phát triển và ứng dụng công nghệ tiên tiến vào giảng dạy, đào
                  tạo trực tuyến, mô phỏng thực tế ảo và các công cụ hỗ trợ
                  giảng dạy.
                </li>
              </ul>
              <br />
              <p className="text-gray-700 mb-4">
                3. Chuyển giao công nghệ và tư vấn đào tạo
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Cung cấp dịch vụ tư vấn, đào tạo theo nhu cầu của doanh
                  nghiệp, tổ chức và cá nhân.
                </li>
                <li>
                  Triển khai các chương trình chuyển giao công nghệ, hỗ trợ các
                  tổ chức giáo dục áp dụng công nghệ mới vào hoạt động giảng dạy
                  và quản lý.
                </li>
              </ul>
              <br />
              <p className="text-gray-700 mb-4">
                4. Hợp tác trong nước và quốc tế về đào tạo
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Kết nối và hợp tác với các trường đại học, viện nghiên cứu, tổ
                  chức khoa học trong và ngoài nước để phát triển chương trình
                  đào tạo tiên tiến.
                </li>
                <li>
                  Tổ chức hội thảo, diễn đàn khoa học, trao đổi chuyên môn để
                  nâng cao chất lượng đào tạo và nghiên cứu khoa học.
                </li>
              </ul>
              <br />
              <p className="text-gray-700 mb-4">
                Thông qua các hoạt động đào tạo, Viện Phát triển Khoa học Công
                nghệ và Giáo dục không chỉ góp phần nâng cao chất lượng nguồn
                nhân lực mà còn thúc đẩy sự phát triển của khoa học và công nghệ
                trong giáo dục, góp phần vào sự phát triển bền vững của xã hội.
              </p>
            </div>
            {/* Sidebar */}
            <aside
              className="inline-block p-4 -mt-4 sticky top-30 self-start"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Các dịch vụ khác
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/more_service2"
                    className="text-blue-600 hover:underline"
                  >
                    Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền
                  </a>
                </li>
                <li>
                  <a
                    href="/more_service3"
                    className="text-blue-600 hover:underline"
                  >
                    Dịch vụ chứng nhận ISO 9001:2015
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

export default MoreService1;
