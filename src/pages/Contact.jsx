import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <Navbar />

            <div className="contact-header">
                <h1><span className="gold-text">Liên Hệ</span> Với Chúng Tôi</h1>
                <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn tìm được không gian sống và làm việc hoàn hảo. Hãy để lại lời nhắn, đội ngũ chuyên gia của chúng tôi sẽ liên hệ trong thời gian sớm nhất.</p>
            </div>

            <div className="contact-container">
                {/* Left Column: Info & Map */}
                <div className="contact-info-col">
                    <div className="info-item-group">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-text">
                                <h4>Địa chỉ</h4>
                                <p>Số 123 Đường Phú Diễn, Bắc Từ Liêm, Hà Nội</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-text">
                                <h4>Hotline</h4>
                                <p>1900 5003<br/>077 645 0182</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-text">
                                <h4>Email</h4>
                                <p>contact@bdsbactuliem.vn</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">🕒</div>
                            <div className="info-text">
                                <h4>Giờ làm việc</h4>
                                <p>8:00 - 20:00 (Thứ 2 - Chủ Nhật)</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map-card">
                        <div className="map-placeholder">
                            Bản đồ khu vực
                        </div>
                        <button className="btn-view-map">Xem bản đồ trên Google Maps</button>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="contact-form-box">
                    <h3>Gửi yêu cầu tư vấn</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Họ và tên (VD: Nguyễn Văn A)" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Số điện thoại (VD: 0901234567)" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email của bạn (Không bắt buộc)" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Bạn quan tâm đến dự án hoặc khu vực nào? Xin hãy để lại chi tiết..." required></textarea>
                        </div>
                        <button type="submit" className="btn-submit-form">
                            Gửi yêu cầu <span>→</span>
                        </button>
                    </form>
                </div>
            </div>

            <div style={{ marginTop: '80px' }}>
                <Footer />
            </div>
        </div>
    );
}

export default Contact;