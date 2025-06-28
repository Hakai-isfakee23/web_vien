import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("/api/news");
      setNews(Array.isArray(res.data) ? res.data : []);
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
            Các tin tức mới nhất
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.length === 0 && (
              <>
                {/* ... fallback tĩnh ... */}
              </>
            )}
            {news.map((item, idx) => (
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
                  />
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <a
                    href={`/more_news${item.id}`}
                    className="text-lg font-bold text-left hover:text-blue-600 block"
                  >
                    {item.title}
                  </a>
                  <div className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow whitespace-pre-line">
                    {item.description || item.content}
                  </div>
                  <a
                    href={`/more_news${item.id}`}
                    className="mt-4 text-blue-600 font-medium hover:underline text-center"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <section className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            data-aos="fade-down"
          >
            Thông báo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
              data-aos="zoom-in"
            >
              <img
                src="/src/assets/images/announcement1.jpg"
                alt="Announ 1"
                className="w-full h-65 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <a href="/more_announce1">
                  <h3 className="text-lg font-bold text-left hover:text-blue-600">
                    Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow">
                  Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng
                  Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát
                  triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp
                  học “Lập trình HTML, CSS và Javascript” miễn phí.
                </p>
                <a
                  href="/more_announce1"
                  className="mt-4 text-blue-600 font-medium hover:underline text-center"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default News;
