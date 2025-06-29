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
            {blogs.length === 0 && <>{/* ... fallback tĩnh ... */}</>}
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
                  <a
                    href={`/more_blog${item.id}`}
                    className="text-lg font-bold text-left hover:text-blue-600 block"
                  >
                    {item.title}
                  </a>
                  <div className="mt-2 text-gray-600 text-left line-clamp-4 flex-grow whitespace-pre-line">
                    {item.description || item.content}
                  </div>
                  <a
                    href={`/more_blog${item.id}`}
                    className="mt-4 text-blue-600 font-medium hover:underline text-center"
                  >
                    Read more &rarr;
                  </a>
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
