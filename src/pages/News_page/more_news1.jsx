import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreNews1 = () => {
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
            Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển, bảo vệ
            môi trường bền vững
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Trước thực trạng ô nhiễm môi trường do ắc quy, axit chì thải gây
                ra ngày càng nghiêm trọng, Viện Phát triển Khoa học Công nghệ và
                Giáo Dục, phối hợp cùng Tiến sĩ Dương Văn Sinh, chính thức triển
                khai Đề án “1 triệu bình ắc quy xanh”.
              </p>
              <p className="text-gray-700 mb-4">
                Đây là chương trình khoa học có ý nghĩa thực tiễn sâu sắc, góp
                phần thúc đẩy mô hình kinh tế tuần hoàn, bảo vệ môi trường và
                sức khỏe cộng đồng.
              </p>
              <p className="text-gray-700 mb-4">
                Trong nhiều năm qua, hàng triệu bình ắc quy từ các phương tiện
                giao thông, máy, xí nghiệp và thiết bị công nghiệp được thải
                trực tiếp ra môi trường gây ảnh hưởng không nhỏ đến nguồn nước,
                đất, không khí và nghiêm trọng hơn là sức khỏe con người. Tuy
                nhiên, đến nay quy trình thu gom và xử lý các bình ắc quy axit
                đã qua sử dụng vẫn chưa khép kín và tồn tại nhiều lỗ hổng. Thực
                tế cho thấy, phần lớn ắc quy thải hiện nay đang được thu gom, xử
                lý tự phát tại các cơ sở nhỏ lẻ, không đảm bảo an toàn kỹ thuật
                và không tuân thủ các quy định pháp luật về bảo vệ môi trường.
                Điều này tiềm ẩn nguy cơ gây ô nhiễm kéo dài, đồng thời ảnh
                hưởng trực tiếp đến mục tiêu phát triển bền vững mà Việt Nam
                đang theo đuổi.
              </p>
              <div className="text-center my-4">
                <img
                  src="/src/assets/images/more_news1_1.jpg"
                  alt="Placeholder"
                  className="w-full h-auto mx-auto"
                />
                <p className="text-gray-700 italic">
                  Tiến sĩ Dương Văn Sinh (áo trắng), chuyên gia đầu ngành về tái
                  tạo ắc quy axit chì.
                </p>
              </div>
              <br />
              <p className="text-gray-700 mb-4">
                Trước vấn đề cấp bách đó, cùng với mong muốn hướng đến giá trị
                bền vững và xây dựng nền kinh tế xanh, Viện Phát triển Khoa học
                Công nghệ và Giáo Dục đã phối hợp với Tiến sĩ Dương Văn Sinh –
                Chuyên gia đầu ngành về tái tạo ắc quy axit chì, triển khai Đề
                án “1 Triệu Bình Ắc Quy Xanh”. Đề án đặt mục tiêu thu gom, tái
                chế và tái tạo 1 triệu bình ắc quy axit chì trên toàn quốc trong
                vòng 5 năm, hướng tới xây dựng hệ sinh thái thu gom, xử lý ắc
                quy thải an toàn, minh bạch và hiệu quả.
              </p>
              <p className="text-gray-700 mb-4">
                Điểm nổi bật của đề án là ứng dụng công nghệ tái tạo ắc quy tiên
                tiến do Tiến sĩ Dương Văn Sinh nghiên cứu và phát triển. Công
                nghệ này cho phép phục hồi các bình ắc quy đã qua sử dụng, kéo
                dài tuổi thọ sản phẩm, giảm thiểu lượng ắc quy phải xử lý, đồng
                thời tiết kiệm đáng kể tài nguyên chì và axit – những nguyên
                liệu có nguy cơ cạn kiệt trong tương lai.
              </p>
              <div className="text-center my-4">
                <img
                  src="/src/assets/images/more_news1_2.jpg"
                  alt="Placeholder"
                  className="w-full h-auto mx-auto"
                />
                <p className="text-gray-700 italic">
                  Ắc quy đã qua sử dụng được thu gom và tiến hành xử lý theo
                  đúng quy trình.
                </p>
              </div>
              <br />
              <p>
                Việc thu gom, tái chế và tái sử dụng ắc quy thải không chỉ giúp
                giảm áp lực ô nhiễm môi trường, mà còn mở ra hướng đi mới cho
                ngành công nghiệp tái chế tại Việt Nam. Đây là một trong những
                giải pháp thiết thực để thực hiện mục tiêu giảm phát thải ròng
                bằng 0 vào năm 2050 theo cam kết của Việt Nam tại Hội nghị
                COP26.
              </p>
              <div className="text-center my-4">
                <img
                  src="/src/assets/images/News1.jpg"
                  alt="Placeholder"
                  className="w-full h-auto mx-auto"
                />
                <p className="text-gray-700 italic">
                  Ắc quy đã được tái tạo qua quá trình thu gom và xử lý các bình
                  ắc quy cũ.
                </p>
              </div>
              <br />
              <p>
                Bên cạnh đó, nhằm xây dựng mạng lưới thu gom bền vững và mở rộng
                phạm vi tác động, Viện Phát triển Khoa học Công nghệ và Giáo Dục
                kêu gọi các doanh nghiệp, cơ sở sản xuất, kinh doanh có liên
                quan đến sử dụng ắc quy axit chì chủ động tham gia đóng góp ắc
                quy thải cho Viện. Đây không chỉ là hành động thiết thực thể
                hiện trách nhiệm xã hội, mà còn giúp doanh nghiệp tuân thủ đúng
                quy định pháp luật về quản lý chất thải nguy hại, tránh các nguy
                cơ bị xử phạt hành chính theo Nghị định 155/2016/NĐ-CP và các
                quy định liên quan.
              </p>
              <br />
              <p className="text-gray-700 mb-4 italic font-bold text-right">
                Tạp chí Thiên nhiên và Môi trường <br />
              </p>
              <p className="text-gray-700 mb-4 italic text-right">
                <span>(</span>
                <a
                  href="https://thiennhienmoitruong.vn/de-an-1-trieu-ac-quy-xanh-huong-di-moi-trong-phat-trien-bao-ve-moi-truong-ben-vung.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bài viết gốc
                </a>
                <span>)</span>
              </p>
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

export default MoreNews1;
