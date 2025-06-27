import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Admin() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 bg-transparent">
      {/* Logo và tên viện */}
      <div
        className="flex flex-col items-center mt-4 mb-4"
        data-aos="fade-down"
      >
        <img
          src="/src/assets/images/logo_ISED.jpg"
          alt="ISED Logo"
          className="w-35 h-35 mb-4"
        />
        <span className="text-3xl md:text-4xl font-bold text-blue-600 text-center drop-shadow">
          Viện Phát triển Khoa học Công nghệ và Giáo dục
        </span>
      </div>
      <br />
      <br />
      {/* Tiêu đề */}
      <h1
        className="text-2xl md:text-3xl font-bold text-blue-700 mb-8"
        data-aos="zoom-in"
      >
        Trang quản trị
      </h1>

      {/* Các button quản lý */}
      <div
        className="flex flex-wrap gap-4 justify-center mb-8"
        data-aos="fade-up"
      >
        <a
          href="/admin/manage_home"
          className="px-6 py-3 bg-white border border-blue-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Quản lý Trang chủ
        </a>
        <a
          href="/admin/manage_about"
          className="px-6 py-3 bg-white border border-blue-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Quản lý Giới thiệu
        </a>
        <a
          href="/admin/manage_services"
          className="px-6 py-3 bg-white border border-blue-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Quản lý Dịch vụ
        </a>
        <a
          href="/admin/manage_news"
          className="px-6 py-3 bg-white border border-blue-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Quản lý Tin tức
        </a>
        <a
          href="/admin/manage_blog"
          className="px-6 py-3 bg-white border border-blue-400 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Quản lý Blog
        </a>
      </div>
      <br />
      {/* Nút quay về trang chủ */}
      <a
        href="/"
        className="mt-2 font-bold bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition text-center"
        data-aos="zoom-in"
      >
        ← Quay về
      </a>
    </div>
  );
}
