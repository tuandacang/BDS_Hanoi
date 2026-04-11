import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertyDetail from './pages/PropertyDetail';
import './App.css';

const fakeProperties = [
    {
        id: 1,
        title: "Cho thuê phòng trọ full nội thất gần chợ Cổ Nhuế",
        price: "4.500.000",
        area: "25m²",
        address: "Ngõ 68, Phường Cổ Nhuế 1, Bắc Từ Liêm",
        image: "src/image/nha1.jpg"
    },
    {
        id: 2,
        title: "Căn hộ mini 2 phòng ngủ view đẹp gần ĐH Thương Mại",
        price: "7.800.000",
        area: "52m²",
        address: "Khu đô thị Cổ Nhuế, Bắc Từ Liêm",
        image: "src/image/nha2.jpg"
    },
    {
        id: 3,
        title: "Nhà nguyên căn mặt phố Phú Diễn - 3 tầng",
        price: "16.500.000",
        area: "85m²",
        address: "Phố Phú Diễn, Bắc Từ Liêm",
        image: "src/image/nha3.jpg"
    }
];

// Component Trang chủ
function Home() {
    return (
        <div className="app">
            {/* Navbar */}
            <Navbar />

            {/* Hero Banner */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>TÌM KIẾM NGÔI NHÀ TRONG MƠ CỦA BẠN</h1>
                    <p>Hàng trăm tin đăng cho thuê và mua bán nhà đất uy tín tại Bắc Từ Liêm</p>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Nhập phường, đường hoặc từ khóa... (Cổ Nhuế, Phú Diễn...)"
                            className="search-input"
                        />
                        <button className="search-button">Tìm kiếm</button>
                    </div>
                </div>
            </section>

            {/* Tin đăng nổi bật */}
            <section className="properties">
                <div className="container">
                    <div className="section-title">
                        <h2>Tin đăng nổi bật tại Bắc Từ Liêm</h2>
                        <p>3 tin đăng • Cập nhật mới nhất</p>
                    </div>

                    <div className="properties-grid">
                        {fakeProperties.map((property) => (
                            <div
                                className="property-card"
                                key={property.id}
                                onClick={() => window.location.href = `/property/${property.id}`}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="property-img"
                                />
                                <div className="property-body">
                                    <div className="property-price">
                                        {property.price} ₫ /tháng
                                    </div>
                                    <h3>{property.title}</h3>
                                    <p className="property-location">📍 {property.address}</p>
                                    <p className="property-area">{property.area}</p>
                                    <button className="btn-detail">Xem chi tiết</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Phần Sự Tín Nhiệm */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-header">
                        <span className="trust-label">GIÁ TRỊ CỐT LÕI</span>
                        <h2>Sự Tín Nhiệm Tạo Nền Đẳng Cấp</h2>
                        <p>
                            Tại BĐS Bắc Từ Liêm, chúng tôi không chỉ giao dịch bất động sản.
                            Chúng tôi kiến tạo phong cách sống thượng lưu và bảo vệ giá trị đầu tư bền vững.
                        </p>
                        <button className="trust-button">KHÁM PHÁ CÂU CHUYỆN</button>
                    </div>

                    <div className="trust-grid">
                        <div className="trust-card">
                            <h3>Pháp Lý</h3>
                            <p>Hồ sơ minh bạch, quy trình chuyển nhượng đảm bảo an tâm tuyệt đối.</p>
                        </div>
                        <div className="trust-card">
                            <h3>Vị Trí</h3>
                            <p>Tuyển chọn những toạ độ vàng với tiềm năng sinh lời vượt trội.</p>
                        </div>
                        <div className="trust-card">
                            <h3>Hỗ Trợ</h3>
                            <p>Đội ngũ chuyên gia đồng hành cùng bạn 24/7 trong mọi dự án.</p>
                        </div>
                        <div className="trust-card">
                            <h3>Đối Tác</h3>
                            <p>Kết nối trực tiếp với các chủ đầu tư danh tiếng hàng đầu.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

// Component chính chứa Router
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
            </Routes>
        </Router>
    );
}