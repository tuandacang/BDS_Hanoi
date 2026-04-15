import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Listing.css';

const rentProperties = [
    {
        id: 1,
        title: "Tên",
        price: "35tr",
        unit: "/tháng",
        area: "65 m²",
        rooms: "1 Phòng",
        address: "QUẬN TÂY HỒ, HÀ NỘI",
        image: "/src/image/nha2.jpg"
    },
    {
        id: 2,
        title: "Tên",
        price: "120tr",
        unit: "/tháng",
        area: "180 m²",
        rooms: "8 Phòng",
        address: "QUẬN BA ĐÌNH, HÀ NỘI",
        image: "/src/image/nha3.jpg"
    },
    {
        id: 3,
        title: "Tên",
        price: "28tr",
        unit: "/tháng",
        area: "56 m²",
        rooms: "Studio",
        address: "QUẬN HOÀN KIẾM, HÀ NỘI",
        image: "/src/image/nha1.jpg"
    },
    {
        id: 4,
        title: "Tên",
        price: "85tr",
        unit: "/tháng",
        area: "210 m²",
        rooms: "4 Phòng",
        address: "QUẬN BẮC TỪ LIÊM, HÀ NỘI",
        image: "/src/image/nha2.jpg"
    }
];

function Rent() {
    return (
        <div className="listing-page">
            <Navbar />
            
            <div className="listing-header">
                <h1>Danh Mục Cho Thuê</h1>
                <p>Khám phá những không gian thuê đẳng cấp, từ căn hộ dịch vụ hiện đại đến văn phòng làm việc sang trọng tại Hà Nội.</p>
            </div>

            <div className="listing-container">
                {/* Sidebar */}
                <div className="filter-sidebar">
                    <div className="filter-section">
                        <h3>VỊ TRÍ</h3>
                        <div className="filter-options">
                            <label className="filter-label"><input type="checkbox" /> Hoàn Kiếm</label>
                            <label className="filter-label"><input type="checkbox" /> Tây Hồ</label>
                            <label className="filter-label"><input type="checkbox" /> Ba Đình</label>
                            <label className="filter-label"><input type="checkbox" /> Cầu Giấy</label>
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>LOẠI HÌNH</h3>
                        <div className="filter-options">
                            <label className="filter-label"><input type="radio" name="type" /> Căn hộ dịch vụ</label>
                            <label className="filter-label"><input type="radio" name="type" /> Văn phòng cao cấp</label>
                            <label className="filter-label"><input type="radio" name="type" /> Studio</label>
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>KHOẢNG GIÁ</h3>
                        <div className="filter-range">
                            <span>5tr</span>
                            <span>150+ tr</span>
                        </div>
                        <input type="range" className="range-input" min="5" max="150" defaultValue="50" />
                    </div>

                    <button className="btn-apply-filter">ÁP DỤNG BỘ LỌC</button>
                </div>

                {/* Right Content */}
                <div className="properties-list">
                    <div className="properties-grid">
                        {rentProperties.map(prop => (
                            <div className="product-card" key={prop.id}>
                                <img src={prop.image} alt={prop.title} className="product-image" />
                                <div className="product-info">
                                    <div className="product-header">
                                        <h3 className="product-title">{prop.title}</h3>
                                        <div className="product-price">
                                            {prop.price}<small>{prop.unit}</small>
                                        </div>
                                    </div>
                                    <div className="product-meta">
                                        <span>📏 {prop.area}</span>
                                        <span>🛏 {prop.rooms}</span>
                                    </div>
                                    <div className="product-address">
                                        📍 {prop.address}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button className="page-btn">&lt;</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">&gt;</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Rent;