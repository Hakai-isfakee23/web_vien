import React, { useEffect, useState } from "react";
import axios from "axios";
import imageList from "../../assets/images/imageList";
import { useNavigate } from "react-router-dom";

export default function ManageBlog() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", image_url: "" });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blogs");
    setBlogs(Array.isArray(res.data) ? res.data : []);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      const confirmed = window.confirm(
        `Áp dụng các thay đổi cho "${form.title}"?`
      );
      if (!confirmed) return;
      await axios.put(`/api/blogs/${editId}`, form);
    } else {
      await axios.post("/api/blogs", form);
    }
    setForm({ title: "", content: "", image_url: "" });
    setEditId(null);
    fetchBlogs();
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      content: item.content,
      image_url: item.image_url || "",
    });
    setEditId(item.id);
  };

  const handleDelete = async (id, title) => {
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xoá "${title}" không?`
    );
    if (!confirmed) return;
    await axios.delete(`/api/blogs/${id}`);
    fetchBlogs();
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="font-bold text-xl mb-4">Quản lý Blog</h2>
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
          placeholder="Nội dung"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <select
          className="border p-2 w-full max-h-40 overflow-y-auto"
          value={form.image_url}
          onChange={(e) => setForm({ ...form, image_url: e.target.value })}
        >
          <option value="">-- Chọn hình ảnh --</option>
          {imageList.map((img) => (
            <option key={img} value={`/src/assets/images/${img}`}>
              {img}
            </option>
          ))}
        </select>
        {form.image_url && (
          <img
            src={form.image_url}
            alt="preview"
            className="w-32 h-20 object-cover my-2"
          />
        )}
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
      {blogs.map((item) => (
        <div key={item.id} className="border rounded p-3 mb-3">
          <div className="font-bold">{item.title}</div>
          <div className="text-gray-700 whitespace-pre-line">
            {item.content}
          </div>
          {item.image_url && (
            <img
              src={item.image_url}
              alt={item.title}
              className="w-32 h-20 object-cover my-2"
            />
          )}
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
      ))}
    </div>
  );
}
