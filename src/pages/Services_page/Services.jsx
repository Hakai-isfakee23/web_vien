import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const defaultServices = [
  {
    icon: "🛠️",
    title: "Đào tạo, nâng cao kiến thức và năng lực chuyên môn",
    description:
      "Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn, sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.",
    link: "/more_service1",
  },
  {
    icon: "🛠️",
    title: "Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền",
    description:
      "Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu thông thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu liên kết và nhãn hiệu nổi tiếng.",
    link: "/more_service2",
  },
  {
    icon: "🛠️",
    title: "Dịch vụ chứng nhận ISO 9001:2015",
    description:
      "Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành một quá trình đánh giá và xác minh của một tổ chức độc lập bên thứ 3 để chứng minh rằng hệ thống quản lý chất lượng của doanh nghiệp mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.",
    link: "/more_service3",
  },
];

const Services = () => {
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("/api/services");
      // Nếu có dữ liệu từ API thì dùng, không thì giữ dữ liệu tĩnh
      if (Array.isArray(res.data) && res.data.length > 0) {
        setServices(res.data);
      }
    } catch (error) {
      // Nếu lỗi API thì vẫn giữ dữ liệu tĩnh
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-50 py-8 flex-grow">
        <section className="container mx-auto px-4">
          <h1
            className="text-3xl font-bold text-center text-gray-800 mb-8"
            data-aos="zoom-out"
          >
            Các dịch vụ của chúng tôi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id || index}
                className="bg-white shadow-md p-6 rounded-lg flex flex-col"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center items-center text-4xl mb-4">
                  {service.icon || "🛠️"}
                </div>
                <a href={service.link || "#"}>
                  <h3 className="text-xl font-bold text-left hover:text-blue-600">
                    {service.title}
                  </h3>
                </a>
                <p className="mt-2 text-gray-600 text-left flex-grow">
                  {service.description}
                </p>
                <a
                  href={service.link || "#"}
                  className="mt-4 text-blue-600 font-medium hover: text-center"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
