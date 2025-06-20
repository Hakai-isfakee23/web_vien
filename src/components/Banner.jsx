import React, { useEffect, useState } from "react";

const banners = [
  "/src/assets/images/Banner.jpg",
  "/src/assets/images/Banner2.jpg",
  "/src/assets/images/Banner3.jpg",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
        setFade(true);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center">
      <div
        className="mb-8 rounded-xl items-center justify-center"
        style={{
          width: "1500px",
          height: "380px",
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <img
          src={banners[current]}
          alt="Banner"
          className={`transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
};

export default Banner;
