import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import unitsData from "../../datas/unitsData";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const units = unitsData;

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-12">
          <h1
            className="text-3xl font-bold text-gray-800 mb-6"
            data-aos="fade-left"
          >
            Chức năng, nhiệm vụ
          </h1>
          <div
            className="bg-white shadow-md rounded-lg p-6 border border-black"
            data-aos="zoom-in"
          >
            <p className="text-gray-700 mb-4">
              <strong>Viện Phát triển Khoa học Công nghệ và Giáo dục</strong> là
              tổ chức khoa học, có tư cách pháp nhân và hoạt động theo Luật Khoa
              học và Công nghệ năm 2013, Nghị định số 08/2014/NĐ-CP ban hành
              ngày 27/01/2014 của Chính phủ quy định chi tiết và hướng dẫn thi
              hành một số điều của Luật Khoa học và Công nghệ, Thông tư số
              04/2014/TT-BKHCN ban hành ngày 31/03/2014 của Bộ Khoa học và Công
              nghệ hướng dẫn điều kiện thành lập và đăng ký hoạt động của tổ
              chức khoa học và công nghệ, văn phòng đại diện, chi nhánh của tổ
              chức khoa học và công nghệ.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Chức năng:</h2>
            <p className="text-gray-700 mb-4">
              Tập hợp các nhà khoa học, các chuyên gia có kinh nghiệm và cán bộ
              có trình độ chuyên môn đa ngành, nhiệt huyết, tự nguyện tham gia
              nghiên cứu ứng dụng khoa học công nghệ và kỹ thuật vào môi trường
              giáo dục đào tạo nhằm phát triển năng lực quản trị, năng lực sáng
              tạo của các đối tượng có nhu cầu, nâng cao năng lực cạnh tranh đáp
              ứng nhu cầu phát triển kinh tế xã hội.
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Nhiệm vụ:</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>
                Nghiên cứu và ứng dụng khoa học kỹ thuật và công nghệ vào các
                chương trình giáo dục đào tạo phù hợp với môi trường xã hội hóa.
                Nghiên cứu việc nâng cao kỹ thuật dạy nghề, quy hoạch thiết kế
                kiến trúc, xây dựng, giao thông vận tải; xây dựng vận hành các
                hệ thống quản lý theo tiêu chuẩn ISO, tự động hóa, phát triển
                năng lực sáng tạo khoa học và công nghệ trước nhu cầu cấp bách
                của xã hội về công nghệ sản xuất các thiết bị hỗ trợ khoa học
                công nghệ đạt chuẩn phục vụ đa ngành nghề và cuộc sống, bảo vệ
                môi trường.
              </li>
              <li>
                Tư vấn, truyền thông phổ biến kiến thức, đào tạo tập huấn,
                chuyển giao công nghệ, phản biện khoa học, biên soạn sách, tài
                liệu; thực hiện các đề tài, dự án, chương trình và tiêu chuẩn,
                quy chuẩn, đánh giá chất lượng công nghệ quản lý giáo dục và dạy
                nghề vào lĩnh vực nghiên cứu như trên.
              </li>
              <li>
                Hợp tác với các tổ chức, cá nhân trong và ngoài nước để thực
                hiện các nhiệm vụ của Viện.
              </li>
            </ol>
          </div>

          {/* New Section: Các đơn vị trực thuộc */}
          <h2
            className="text-2xl font-bold text-gray-800 mt-12 mb-6 text-center"
            data-aos="zoom-out"
          >
            Các đơn vị trực thuộc
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-7"
            data-aos="fade-up"
          >
            {units.map((unit, index) => (
              <a
                key={index}
                href={unit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={unit.logo}
                  alt={unit.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-bold text-center">{unit.name}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
