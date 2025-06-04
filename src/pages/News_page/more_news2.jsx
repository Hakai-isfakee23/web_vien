import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreNews2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-2 md:px-4 max-w-6xl">
          <h1
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="zoom-out"
          >
            Hợp tác với Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa hàng hóa,
            tham gia thương mại điện tử và chuỗi cung ứng toàn cầu
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Nhằm thúc đẩy sự phát triển của các doanh nghiệp Việt Nam trên
                thị trường thương mại điện tử và chuỗi cung ứng toàn cầu, Viện
                Phát triển Khoa học Công nghệ và Giáo dục đã làm việc với
                Alibaba Việt Nam để hỗ trợ các doanh nghiệp trong việc chuẩn hóa
                hàng hóa theo các tiêu chuẩn quốc tế vào ngày 18/02/2025.
              </p>
              <p className="text-gray-700 mb-4">
                Viện Phát triển Khoa học Công nghệ và Giáo dục hợp tác với
                Alibaba Việt Nam hỗ trợ doanh nghiệp chuẩn hóa hàng hóa, tham
                gia thương mại điện tử và chuỗi cung ứng toàn cầuNhằm thúc đẩy
                sự phát triển của các doanh nghiệp Việt Nam trên thị trường
                thương mại điện tử và chuỗi cung ứng toàn cầu, Viện Phát triển
                Khoa học Công nghệ và Giáo dục đã làm việc với Alibaba Việt Nam
                để hỗ trợ các doanh nghiệp trong việc chuẩn hóa hàng hóa theo
                các tiêu chuẩn quốc tế.
              </p>
              <br />
              <p className="mb-4 font-bold">
                Lợi ích của thương mại điện tử đối với doanh nghiệp Việt Nam
              </p>
              <p className="text-gray-700 mb-4">
                Thương mại điện tử đã trở thành một xu hướng tất yếu trong nền
                kinh tế hiện đại, mang lại nhiều lợi ích quan trọng cho doanh
                nghiệp, đặc biệt là các đơn vị sản xuất tại Việt Nam:
              </p>
              <p className="text-gray-700 mb-4">
                - Mở rộng thị trường: Thông qua các nền tảng thương mại điện tử,
                doanh nghiệp có thể tiếp cận khách hàng toàn cầu mà không bị
                giới hạn bởi khoảng cách địa lý.
              </p>
              <p className="text-gray-700 mb-4">
                - Tăng doanh thu và lợi nhuận: Việc kinh doanh trực tuyến giúp
                giảm bớt chi phí trung gian, từ đó tăng lợi nhuận cho doanh
                nghiệp.
              </p>
              <p className="text-gray-700 mb-4">
                - Nâng cao khả năng cạnh tranh: Khi tham gia vào các sàn thương
                mại điện tử uy tín, doanh nghiệp Việt Nam có cơ hội cạnh tranh
                bình đẳng với các thương hiệu quốc tế.
              </p>
              <p>
                - Tối ưu hóa quy trình kinh doanh: Các công cụ số hóa giúp doanh
                nghiệp quản lý hiệu quả hoạt động bán hàng, kho bãi, vận chuyển
                và chăm sóc khách hàng.
              </p>
              <br />
              <p className="mb-4 font-bold">
                Tầm quan trọng của việc chuẩn hóa hàng hóa
              </p>
              <p>
                Việc đảm bảo hàng hóa đạt tiêu chuẩn không chỉ giúp doanh nghiệp
                đáp ứng yêu cầu của các sàn thương mại điện tử lớn như Alibaba
                mà còn mở ra cơ hội tham gia vào chuỗi cung ứng toàn cầu. Những
                lợi ích khi chuẩn hóa hàng hóa gồm:
              </p>
              <br />
              <p className="text-gray-700 mb-4">
                - Đáp ứng yêu cầu kiểm định chất lượng quốc tế: Giúp sản phẩm
                được chấp nhận trên nhiều thị trường khắt khe như Mỹ, châu Âu,
                Nhật Bản.
              </p>
              <p className="text-gray-700 mb-4">
                - Tạo niềm tin với khách hàng: Hàng hóa đạt chuẩn giúp khách
                hàng yên tâm về chất lượng, từ đó nâng cao uy tín thương hiệu.
              </p>
              <p className="text-gray-700 mb-4">
                - Tối ưu chi phí logistics: Hàng hóa đạt tiêu chuẩn giúp tối ưu
                hóa quy trình vận chuyển và giảm thiểu rủi ro liên quan đến kiểm
                định và trả hàng.
              </p>
              <p>
                - Gia nhập chuỗi cung ứng toàn cầu: Các sản phẩm đáp ứng tiêu
                chuẩn quốc tế có nhiều cơ hội tham gia vào chuỗi cung ứng của
                các tập đoàn đa quốc gia.
              </p>
              <br />
              <p className="mb-4 font-bold">
                Hỗ trợ từ Viện Phát triển Khoa học Công nghệ và Giáo dục và
                Alibaba Việt Nam
              </p>
              <p>
                Trong khuôn khổ hợp tác, Viện Phát triển Khoa học Công nghệ và
                Giáo dục cùng Alibaba Việt Nam sẽ triển khai các chương trình hỗ
                trợ doanh nghiệp như:
              </p>
              <br />
              <p className="text-gray-700 mb-4">
                - Tư vấn và đào tạo về tiêu chuẩn chất lượng hàng hóa để đáp ứng
                yêu cầu của thị trường quốc tế.
              </p>
              <p className="text-gray-700 mb-4">
                - Hướng dẫn doanh nghiệp đăng ký và tối ưu hóa gian hàng trên
                nền tảng thương mại điện tử.
              </p>
              <p className="text-gray-700 mb-4">
                - Kết nối với đối tác quốc tế, giúp doanh nghiệp mở rộng thị
                trường xuất khẩu.
              </p>
              <p>
                - Cung cấp giải pháp công nghệ giúp số hóa quy trình sản xuất và
                quản lý chất lượng.
              </p>
              <br />
              <p>
                Việc hợp tác giữa Viện Phát triển Khoa học Công nghệ và Giáo dục
                với Alibaba Việt Nam không chỉ giúp doanh nghiệp Việt Nam nâng
                cao năng lực cạnh tranh mà còn thúc đẩy sự phát triển của nền
                kinh tế số, đưa thương hiệu Việt vươn xa trên bản đồ kinh tế
                toàn cầu.
              </p>
              <br />
              <p className="text-gray-700 mb-4">
                Nếu doanh nghiệp của bạn quan tâm đến chương trình hỗ trợ này,
                hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và đồng
                hành trên hành trình vươn ra thế giới!
              </p>
              <img
                src="/src/assets/images/News2.jpg"
                alt="Placeholder"
                className="w-full h-auto mx-auto"
              />
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
                    href="/more_news3"
                    className="text-blue-600 hover:underline"
                  >
                    Viện Phát triển Khoa học Công nghệ và Giáo dục thăm và làm
                    việc với Trường THPT Cần Thạnh
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
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MoreNews2;
