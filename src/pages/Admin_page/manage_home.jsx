import React, { useEffect, useState } from "react";
import axios from "axios";
import imageList from "../../assets/images/imageList";

export default function ManageHome() {
  // Banner
  const [banner, setBanner] = useState({
    title: "",
    subtitle: "",
    image_url: "",
  });
  // Units
  const [units, setUnits] = useState([]);
  const [unitForm, setUnitForm] = useState({ name: "", logo: "", url: "" });
  const [editUnitId, setEditUnitId] = useState(null);

  useEffect(() => {
    fetchBanner();
    fetchUnits();
  }, []);

  // Banner
  const fetchBanner = async () => {
    const res = await axios.get("/api/homepage/banner");
    setBanner(res.data || { title: "", subtitle: "", image_url: "" });
  };
  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    await axios.put("/api/homepage/banner", banner);
    fetchBanner();
    alert("Cập nhật banner thành công!");
  };

  // Units
  const fetchUnits = async () => {
    const res = await axios.get("/api/homepage/units");
    setUnits(Array.isArray(res.data) ? res.data : []);
  };
  const handleUnitSubmit = async (e) => {
    e.preventDefault();
    if (editUnitId) {
      await axios.put(`/api/homepage/units/${editUnitId}`, unitForm);
    } else {
      await axios.post("/api/homepage/units", unitForm);
    }
    setUnitForm({ name: "", logo: "", url: "" });
    setEditUnitId(null);
    fetchUnits();
  };
  const handleEditUnit = (unit) => {
    setUnitForm({ name: unit.name, logo: unit.logo, url: unit.url });
    setEditUnitId(unit.id);
  };
  const handleDeleteUnit = async (id) => {
    if (window.confirm("Bạn chắc chắn muốn xoá đơn vị này?")) {
      await axios.delete(`/api/homepage/units/${id}`);
      fetchUnits();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="font-bold text-2xl mb-4">Quản lý Trang chủ</h2>

      {/* Banner Section */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-2">Banner</h3>
        <form onSubmit={handleBannerSubmit} className="space-y-2">
          <input
            className="border p-2 w-full"
            placeholder="Tiêu đề"
            value={banner.title}
            onChange={(e) => setBanner({ ...banner, title: e.target.value })}
            required
          />
          <input
            className="border p-2 w-full"
            placeholder="Phụ đề"
            value={banner.subtitle}
            onChange={(e) => setBanner({ ...banner, subtitle: e.target.value })}
            required
          />
          {/* Dropdown chọn ảnh banner */}
          <select
            className="border p-2 w-full max-h-40 overflow-y-auto"
            value={banner.image_url}
            onChange={(e) =>
              setBanner({ ...banner, image_url: e.target.value })
            }
          >
            <option value="">-- Chọn hình ảnh banner --</option>
            {imageList.map((img) => (
              <option key={img} value={`/src/assets/images/${img}`}>
                {img}
              </option>
            ))}
          </select>
          {banner.image_url && (
            <img
              src={banner.image_url}
              alt="preview"
              className="w-32 h-20 object-cover my-2"
            />
          )}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Cập nhật Banner
          </button>
        </form>
      </div>

      {/* Units Section */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-2">Các đơn vị trực thuộc</h3>
        <form onSubmit={handleUnitSubmit} className="space-y-2 mb-4">
          <input
            className="border p-2 w-full"
            placeholder="Tên đơn vị"
            value={unitForm.name}
            onChange={(e) => setUnitForm({ ...unitForm, name: e.target.value })}
            required
          />
          {/* Dropdown chọn logo đơn vị */}
          <select
            className="border p-2 w-full max-h-40 overflow-y-auto"
            value={unitForm.logo}
            onChange={(e) => setUnitForm({ ...unitForm, logo: e.target.value })}
          >
            <option value="">-- Chọn logo đơn vị --</option>
            {imageList.map((img) => (
              <option key={img} value={`/src/assets/images/${img}`}>
                {img}
              </option>
            ))}
          </select>
          {unitForm.logo && (
            <img
              src={unitForm.logo}
              alt="preview"
              className="w-32 h-20 object-cover my-2"
            />
          )}
          <input
            className="border p-2 w-full"
            placeholder="Website (url)"
            value={unitForm.url}
            onChange={(e) => setUnitForm({ ...unitForm, url: e.target.value })}
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            {editUnitId ? "Cập nhật" : "Thêm mới"}
          </button>
          {editUnitId && (
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
              onClick={() => {
                setEditUnitId(null);
                setUnitForm({ name: "", logo: "", url: "" });
              }}
            >
              Huỷ
            </button>
          )}
        </form>
        {units.map((unit) => (
          <div
            key={unit.id}
            className="border rounded p-3 mb-2 flex items-center gap-3"
          >
            <img
              src={unit.logo}
              alt={unit.name}
              className="w-12 h-12 object-contain"
            />
            <div className="flex-1">
              <div className="font-bold">{unit.name}</div>
              <div className="text-sm text-gray-600">{unit.url}</div>
            </div>
            <button
              onClick={() => handleEditUnit(unit)}
              className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
            >
              Sửa
            </button>
            <button
              onClick={() => handleDeleteUnit(unit.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Xoá
            </button>
          </div>
        ))}
      </div>

      {/* Các section khác như dịch vụ, tin tức, blog sẽ quản lý ở trang riêng, chỉ hiển thị động trên homepage */}
      <div className="mb-8">
        <h3 className="font-bold text-lg mb-2">Các section khác</h3>
        <p>
          Dịch vụ, Tin tức, Blog sẽ được lấy động từ các trang quản lý tương
          ứng.
          <br />
          Để chỉnh sửa, hãy vào trang quản lý dịch vụ, tin tức, blog.
        </p>
        <button
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
          onClick={() => (window.location.href = "/admin")}
        >
          Quay về trang quản lý
        </button>
      </div>
    </div>
  );
}
