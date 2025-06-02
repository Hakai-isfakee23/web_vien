import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const MoreAnnou1 = () => {
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
            Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2" data-aos="fade-right">
              <p className="text-gray-700 mb-4">
                Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng
                Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển
                Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập
                trình HTML, CSS và Javascript” miễn phí.
              </p>
              <p className="mb-4">
                - Nhằm thực hiện chương trình{" "}
                <strong>“Gắn kết yêu thương – thắt chặt tình đoàn kết”</strong>{" "}
                của Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group;
              </p>
              <p className="text-gray-700 mb-4">
                - Nhằm giúp học sinh được tiếp cận với công nghệ, tăng cường kỹ
                năng số cho học sinh;
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group</strong>{" "}
                kết hợp cùng
                <strong>Trung tâm Đào tạo và Ứng dụng Công nghệ số</strong>{" "}
                thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành
                chiêu sinh lớp học{" "}
                <strong>“Lập trình HTML, CSS và Javascript”</strong> miễn phí.
              </p>
              <p className="mb-4">
                Khi tham gia lớp học này, học sinh sẽ được tìm hiểu về ngôn ngữ
                lập trình và thiết kế website gồm HTML, CSS và Javascript. Học
                sinh sẽ ứng dụng những ngôn ngữ trên để sáng tạo ra những
                website của riêng mình. Thông qua chương trình, học sinh cũng
                được rèn luyện, trau dồi thêm các kỹ năng sử dụng máy tính, giao
                tiếp trên môi trường không gian mạng, trang bị thêm về kỹ năng
                số.
              </p>
              <p className="text-gray-700 mb-4">
                Lớp học dự kiến được khai giảng vào thứ bảy ngày 05/04/2025,
                lịch học sẽ từ 19:00 đến 20h30 thứ bảy hằng tuần, kéo dài trong
                12 buổi học trực tuyến (online) thông qua công cụ Zoom.
              </p>
              <p className="text-gray-700 mb-4">
                Đây là lớp học hoàn toàn miễn phí, số lượng có giới hạn nên kính
                mong quý phụ huynh đăng ký sớm. Nếu quá số lượng dự kiến thì đơn
                vị tổ chức sẽ ghi nhận thông tin và sẽ cố gắng khai giảng tiếp
                những lớp miễn phí khác.
              </p>
              <p className="text-gray-700 mb-4">
                Chân thành cảm ơn quý phụ huynh đã quan tâm và đăng ký! Quý phụ
                huynh vui lòng đăng ký{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeqan9tSgFB1EXSHZPW5OvKD4NrFCGRnTXusNzZzjbCkXRqow/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  tại đây
                </a>
                !
              </p>
            </div>
            {/* Sidebar */}
            <aside
              className="inline-block p-4 -mt-4 sticky top-30 self-start"
              data-aos="fade-left"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Các thông báo khác
              </h2>
              <ul className="space-y-4"></ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MoreAnnou1;
