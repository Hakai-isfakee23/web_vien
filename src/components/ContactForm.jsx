import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (err) {
      setError("Không thể gửi dữ liệu. Vui lòng kiểm tra kết nối server.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Liên hệ với chúng tôi
      </h2>
      {submitted ? (
        <div className="text-green-600 text-center">Cảm ơn bạn đã liên hệ!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-red-600 text-center">{error}</div>}
          <div>
            <label className="block mb-1 font-medium">Tên</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Nhập tên của bạn"
              className="w-full border rounded px-3 py-2 placeholder:italic"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">SĐT</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Nhập sđt của bạn"
              className="w-full border rounded px-3 py-2 placeholder:italic"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Nhập email của bạn"
              className="w-full border rounded px-3 py-2 placeholder:italic"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Nội dung</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Nhập tin nhắn của bạn"
              className="w-full border rounded px-3 py-2 placeholder:italic"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Gửi
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
