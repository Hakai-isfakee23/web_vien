import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            data-aos="zoom-out"
          >
            Blog
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nếu không có blog nào */}
            {blogs.length === 0 && (
              <>
                {/* Blog Card 1 (demo tĩnh) */}
                <div
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
                  data-aos="fade-up"
                >
                  <img
                    src="/src/assets/images/Blog1.jpg"
                    alt="Khung Kiến trúc Chính phủ Số Việt Nam"
                    className="w-full h-65 object-cover"
                    style={{ maxHeight: 220 }}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <a
                      href="/more_blog1"
                      className="text-lg font-bold text-left hover:text-blue-600 block"
                    >
                      Bộ Khoa học và Công nghệ cập nhật phiên bản mới của Khung Kiến
                      trúc Chính phủ Số Việt Nam
                    </a>
                    <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                      Bộ Khoa học và Công nghệ (KH&CN) vừa chính thức ban hành Khung
                      Kiến trúc Chính phủ số Việt Nam, phiên bản 4.0. Bản cập nhật
                      này sẽ là cơ sở quan trọng giúp các bộ, ngành, địa phương điều
                      chỉnh khung kiến trúc số của mình cho phù hợp với thực tiễn,
                      hướng tới sự kết nối và liên thông hiệu quả.
                    </p>
                    <a
                      href="/more_blog1"
                      className="mt-4 text-blue-600 font-medium hover:underline text-center"
                    >
                      Đọc tiếp &rarr;
                    </a>
                  </div>
                </div>
                {/* Blog Card 2 (demo tĩnh) */}
                <div
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="/src/assets/images/Blog2.jpg"
                    alt="Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi"
                    className="w-full h-65 object-cover"
                    style={{ maxHeight: 220 }}
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <a
                      href="/more_blog2"
                      className="text-lg font-bold text-left hover:text-blue-600 block"
                    >
                      Bộ Khoa học và Công nghệ công bố 5 giá trị cốt lõi, 4 phương
                      châm hành động
                    </a>
                    <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                      Bộ trưởng Nguyễn Mạnh Hùng đã chính thức công bố 5 giá trị cốt
                      lõi và 4 phương châm hành động của Bộ Khoa học và Công nghệ,
                      khẳng định đây là nền tảng vững chắc cho mọi hoạt động của Bộ
                      trong thời gian tới.
                    </p>
                    <a
                      href="/more_blog2"
                      className="mt-4 text-blue-600 font-medium hover:underline text-center"
                    >
                      Đọc tiếp &rarr;
                    </a>
                  </div>
                </div>
              </>
            )}
            {/* Blog động từ API */}
            {blogs.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-65 object-cover"
                    style={{ maxHeight: 220 }}
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <div className="text-lg font-bold text-left mb-2">{item.title}</div>
                  <div className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow whitespace-pre-line">
                    {item.content}
                  </div>
                  {/* Nếu có trang chi tiết, thêm link ở đây */}
                  {/* <a
                    href={`/blog/${item.id}`}
                    className="mt-4 text-blue-600 font-medium hover:underline text-center"
                  >
                    Đọc tiếp &rarr;
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
