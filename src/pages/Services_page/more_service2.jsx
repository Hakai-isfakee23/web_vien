import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreService2 = () => {
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
            Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của
                các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu
                thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu
                liên kết và nhãn hiệu nổi tiếng.
              </p>
              <p className="mb-4">
                <strong>
                  ĐĂNG KÝ BẢO HỘ THƯƠNG HIỆU, NHÃN HIỆU CÓ LỢI ÍCH GÌ?
                </strong>
              </p>
              <p className="text-gray-700 mb-4">
                Đăng ký bảo hộ thương hiệu, nhãn hiệu hay còn được gọi là đăng
                ký thương hiệu, nhãn hiệu độc quyền. Đây là thủ tục cá nhân, tổ
                chức cần phải thực hiện để khẳng định quyền sở hữu đối hợp pháp
                đối với thương hiệu, nhãn hiệu của mình và có thể tự do khai
                thác các lợi ích thương mại từ nhãn hiệu thông qua việc sử dụng
                nhãn hiệu gắn liền với sản phẩm, dịch vụ hay chuyển giao quyền
                sử dụng...
              </p>
              <p className="text-gray-700 mb-4">
                Đăng ký nhãn hiệu không chỉ giúp khách hàng phân biệt được sản
                phẩm của bạn với các cá nhân tổ chức khác mà còn giúp cho thương
                hiệu, nhãn hiệu của bạn được pháp luật bảo vệ trước những hành
                vi xâm phạm, cạnh tranh không lành mạnh.
              </p>
              <p className="mb-4">
                <strong>LƯU Ý CẦN BIẾT KHI ĐĂNG KÝ BẢO HỘ NHÃN HIỆU</strong>
              </p>
              <p className="text-gray-700 mb-4">
                Doanh nghiệp, hộ kinh doanh, cá nhân đều có quyền nộp hồ sơ đăng
                ký bảo hộ nhãn hiệu để trở thành chủ sở hữu hợp pháp một hoặc
                nhiều nhãn hiệu nếu nhãn hiệu đó chưa có người đăng ký.
              </p>
              <p className="text-gray-700 mb-4">
                Nhãn hiệu đăng ký bảo hộ không được trùng, tương tự hoặc gây
                nhầm lẫn với các nhãn hiệu khác đã được đăng ký bảo hộ trong và
                ngoài nước.
              </p>
              <p className="text-gray-700 mb-4">
                Địa chỉ đăng ký nhãn hiệu độc quyền nên là địa chỉ cố định và có
                thể nhận được hồ sơ do bên Cục Sở hữu Trí tuệ cung cấp để tránh
                trường hợp thất lạc (các quyết định, thông báo của Cục đều gửi
                về theo đường bưu điện dù bạn nộp đơn qua mạng hay trực tiếp).
              </p>
              <p className="text-gray-700 mb-4">
                Sau khi được cấp văn bằng bảo hộ nhãn hiệu, chủ sở hữu có thể
                gắn chữ “R” lên nhãn hiệu, bao bì hàng hóa để khách hàng, đối
                tác có thể nhận biết nhãn hiệu của bạn đã được bảo hộ.{" "}
              </p>
              <p className="text-gray-700 mb-4">
                Văn bằng bảo hộ nhãn hiệu (giấy chứng nhận nhãn hiệu) do Cục Sở
                hữu trí tuệ cấp chỉ có thời hạn sử dụng là 10 năm. Cá nhân, tổ
                chức phải nộp hồ sơ yêu cầu gia hạn văn bằng bảo hộ nhãn hiệu
                trong vòng 6 tháng trước ngày văn bằng hết hiệu lực nhưng không
                được quá 5 năm kể từ ngày văn bằng hết hiệu lực. Mỗi văn bằng có
                thể gia hạn nhiều lần, mỗi lần bảo hộ là 10 năm.
              </p>
            </div>
            {/* Sidebar */}
            <aside
              className="inline-block p-4 -mt-4 sticky top-35 self-start"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Các dịch vụ khác
              </h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/more_service1"
                    className="text-blue-600 hover:underline"
                  >
                    Đào tạo, nâng cao kiến thức và năng lực chuyên môn
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

export default MoreService2;
