import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ManageServices() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image_url: "",
  });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  // Lấy dữ liệu
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    console.log("fetchServices called");
    const res = await axios.get("/api/services");
    console.log(res.data);
    setServices(Array.isArray(res.data) ? res.data : []);
  };

  // Thêm hoặc cập nhật
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      // Xác nhận trước khi cập nhật
      const confirmed = window.confirm(
        `Áp dụng các thay đổi cho "${form.title}"?`
      );
      if (!confirmed) return;
      await axios.put(`/api/services/${editId}`, form);
    } else {
      await axios.post("/api/services", form);
    }
    setForm({ title: "", description: "", image_url: "" });
    setEditId(null);
    fetchServices();
  };

  // Xoá
  const handleDelete = async (id, title) => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xoá "${title}" không?`
    );
    if (!confirmed) return;
    await axios.delete(`/api/services/${id}`);
    fetchServices();
  };

  // Sửa
  const handleEdit = (service) => {
    setForm(service);
    setEditId(service.id);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="font-bold text-xl mb-4">Quản lý Dịch vụ</h2>
      <form onSubmit={handleSubmit} className="mb-4 space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Tiêu đề"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Mô tả"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="URL hình ảnh"
          value={form.image_url}
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {editId ? "Cập nhật" : "Thêm mới"}
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin")}
          >
            Quay lại trang quản lý
          </button>
        </div>
      </form>
      {services.map((item) => (
        <div key={item.id} className="border rounded p-3 mb-3 flex gap-3">
          {item.image_url && item.image_url.trim() !== "" && (
            <img
              src={item.image_url}
              alt=""
              className="w-20 h-20 object-cover"
            />
          )}
          <div className="flex-1">
            <div className="font-bold">{item.title}</div>
            <div>{item.description}</div>

            <button
              onClick={() => handleEdit(item)}
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2 transition-colors duration-150"
            >
              Sửa
            </button>
            <button
              onClick={() => handleDelete(item.id, item.title)}
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors duration-150"
            >
              Xoá
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
