import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>BĐS Hà Nội</h3>
                        <p>
                            Kiến tạo những giá trị bất động sản thực thụ và đẳng cấp cho khách hàng thượng lưu tại Việt Nam.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Dự án</h4>
                        <p>Biệt Thự Đơn Lập</p>
                        <p>Căn Hộ Cao Cấp</p>
                        <p>Penthouse</p>
                    </div>

                    <div className="footer-col">
                        <h4>Công ty</h4>
                        <p>Về chúng tôi</p>
                        <p>Chính sách</p>
                        <p>Liên hệ</p>
                    </div>

                    <div className="footer-col">
                        <h4>Liên hệ</h4>
                        <p>Địa chỉ: 487 Cổ Nhuế, Hà Nội</p>
                        <p>Hotline: 1900 2003</p>
                        <p>Email: contact@bdsbactuliem.vn</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 BĐS HaNoi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;