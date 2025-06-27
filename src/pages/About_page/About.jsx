import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import unitsData from "../../datas/unitsData";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";

const About = () => {
  const units = unitsData;
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    fetchAbouts();
  }, []);

  const fetchAbouts = async () => {
    try {
      const res = await axios.get("/api/about");
      if (Array.isArray(res.data) && res.data.length > 0) {
        setAbouts(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 py-8">
        <section className="container mx-auto px-4 md:px-8 lg:px-12 overflow-hidden">
          <h1
            className="text-3xl font-bold text-gray-800 mb-4 text-center"
            data-aos="fade-left"
          >
            Các thông tin về Viện Phát triển Khoa học Công nghệ và Giáo dục
          </h1>

          {/* Nội dung about */}
          {abouts.length > 0 && (
            <div className="mt-4">
              {abouts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow-md rounded-lg p-6 border border-blue-400 mb-6"
                  data-aos="fade-up"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <div className="text-gray-700 whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          )}

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
