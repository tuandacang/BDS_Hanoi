import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Listing.css';

const buyProperties = [
    {
        id: 1,
        title: "Tên",
        price: "12.5 Tỷ",
        area: "120 m²",
        rooms: "3 Phòng",
        address: "QUẬN TÂY HỒ, HÀ NỘI",
        image: "/src/image/nha1.jpg"
    },
    {
        id: 2,
        title: "Tên",
        price: "45.0 Tỷ",
        area: "350 m²",
        rooms: "5 Phòng",
        address: "QUẬN HOÀN KIẾM, HÀ NỘI",
        image: "/src/image/nha2.jpg"
    },
    {
        id: 3,
        title: "Tên",
        price: "18.2 Tỷ",
        area: "165 m²",
        rooms: "4 Phòng",
        address: "QUẬN BA ĐÌNH, HÀ NỘI",
        image: "/src/image/nha3.jpg"
    },
    {
        id: 4,
        title: "Tên",
        price: "29.5 Tỷ",
        area: "210 m²",
        rooms: "4 Phòng",
        address: "QUẬN CẦU GIẤY, HÀ NỘI",
        image: "/src/image/nha1.jpg"
    }
];

function Buy() {
    return (
        <div className="listing-page">
            <Navbar />
            
            <div className="listing-header">
                <h1>Danh Mục Mua Bán</h1>
                <p>Khám phá những bất động sản đẳng cấp nhất tại Hà Nội. Từ căn hộ hiện đại đến biệt thự kiến trúc Pháp cổ điển.</p>
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
                            <label className="filter-label"><input type="radio" name="type" /> Căn hộ cao cấp</label>
                            <label className="filter-label"><input type="radio" name="type" /> Biệt thự</label>
                            <label className="filter-label"><input type="radio" name="type" /> Nhà phố</label>
                        </div>
                    </div>

                    <div className="filter-section">
                        <h3>KHOẢNG GIÁ</h3>
                        <div className="filter-range">
                            <span>0 tỷ</span>
                            <span>150+ tỷ</span>
                        </div>
                        <input type="range" className="range-input" min="0" max="150" defaultValue="75" />
                    </div>

                    <button className="btn-apply-filter">ÁP DỤNG BỘ LỌC</button>
                </div>

                {/* Right Content */}
                <div className="properties-list">
                    <div className="properties-grid">
                        {buyProperties.map(prop => (
                            <div className="product-card" key={prop.id}>
                                <img src={prop.image} alt={prop.title} className="product-image" />
                                <div className="product-info">
                                    <div className="product-header">
                                        <h3 className="product-title">{prop.title}</h3>
                                        <div className="product-price">{prop.price}</div>
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

export default Buy;