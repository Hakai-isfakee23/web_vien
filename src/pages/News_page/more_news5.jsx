import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MoreNews5 = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Ký kết biên bản ghi nhớ hợp tác với Công ty TNHH MTV Thương mại Dịch
            vụ CHUYÊN TÂM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Main Content */}
            <div className="col-span-2">
              <p className="text-gray-700 mb-4">
                Vào ngày 15/03/2024, Trung tâm Đào tạo và Chuyển giao công nghệ
                (T3C) đã tiến hành ký biên bản ghi nhớ hợp tác với Công ty TNHH
                MTV Thương mại Dịch vụ CHUYÊN TÂM (Chuyên Tâm).
              </p>
              <p className="text-gray-700 mb-4">
                Chuyên Tâm là đơn vị đã có hơn 10 năm kinh nghiệm tư vấn du học
                với tỷ lệ đậu lên đến 99%, đã đưa thành công hơn 800 sinh viên
                và học viên sang Nhật, nhiều sinh viên và học viên sang các nước
                khác. Chuyên Tâm là đối tác uy tín của ít nhất 200 trường đại
                học hàng đầu tại quốc gia Mỹ, Canada, Úc, Đức, Nhật, Hàn Quốc,
                Singapore, Malaysia... với đội ngũ luật sư quốc tế giàu kinh
                nghiệm cam kết giải quyết mọi vấn đề liên quan đến visa và đảm
                bảo quyền lợi cho sinh viên.
              </p>
              <p className="text-gray-700 mb-4">
                Căn cứ vào thế mạnh của 2 bên, T3C và Chuyên Tâm đã thống nhất
                cùng triển khai liên kết hợp tác chiến lược trong công tác chiêu
                sinh, đào tạo và tuyển dụng cho công tác tư vấn du học.
              </p>
            </div>
            {/* Sidebar */}
            <aside className="inline-block p-4 -mt-4">
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
                    href="/more_news1"
                    className="text-blue-600 hover:underline"
                  >
                    Đề án 1 triệu ắc quy xanh - Hướng đi mới trong phát triển,
                    bảo vệ môi trường bền vững
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

export default MoreNews5;
