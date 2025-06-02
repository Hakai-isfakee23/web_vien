import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreService3 = () => {
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
            Dịch vụ chứng nhận ISO 9001:2015
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành
                một quá trình đánh giá và xác minh của một tổ chức độc lập bên
                thứ 3 để chứng minh rằng hệ thống quản lý chất lượng của doanh
                nghiệp mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.
              </p>
              <p className="text-gray-700 mb-4">
                Chứng nhận ISO 9001 có thể giúp cho tổ chức cải thiện quy trình
                và hiệu quả kinh doanh của mình, tăng cường niềm tin của khách
                hàng và nâng cao khả năng cạnh tranh trên thị trường.
              </p>
              <p className="text-gray-700 mb-4">
                Quy trình đánh giá và cấp chứng nhận ISO 9001:2015 tuân thủ quy
                định của pháp luật và quy tắc của Tổ chức tiêu chuẩn ISO Thế
                giới, về cơ bản bao gồm các giai đoạn sau:
              </p>
              <p className="text-gray-700 mb-4">
                <u>Giai đoạn 1:</u> Thu thập thông tin và đăng ký chứng nhận ISO
                9001:2015;
              </p>
              <p className="text-gray-700 mb-4">
                <u>Giai đoạn 2:</u> Khảo sát đánh giá và xác định tổng quan, bao
                gồm:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Khảo sát hệ thống quản lý và đánh giá theo tiêu chuẩn ISO
                  9001;
                </li>
                <li>Hoàn thiện cơ cấu tổ chức trong công ty;</li>
                <li>
                  Quy định quyền hạn, trách nhiệm của lãnh đạo, bộ phận điều
                  hành ISO 9001;
                </li>
                <li>Phân bổ chức năng và nhiệm vụ cho các phòng, ban;</li>
                <li>
                  Quy định quyền và nghĩa vụ cho từng chức danh dựa trên năng
                  lực.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                <u>Giai đoạn 3:</u> Xây dựng và áp dụng hệ thống tài liệu, bao
                gồm:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  Xác định các đối tượng tài liệu, hồ sơ cần xây dựng văn bản
                  hóa;
                </li>
                <li>Lập cấu trúc và xây dựng hệ thống tài liệu;</li>
                <li>Áp dụng hệ thống quản lý.</li>
              </ul>
              <p className="text-gray-700 mb-4">
                <u>Giai đoạn 4:</u> Xem xét và đánh giá hệ thống;
              </p>
              <p className="text-gray-700 mb-4">
                <u>Giai đoạn 5:</u> Cấp chứng chỉ, giấy chứng nhận ISO
                9001:2015.
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
                    href="/more_service1"
                    className="text-blue-600 hover:underline"
                  >
                    Đào tạo, nâng cao kiến thức và năng lực chuyên môn
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

export default MoreService3;
