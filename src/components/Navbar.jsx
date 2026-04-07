import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <span>BDS HaNoi</span>
                </div>

                <div className="nav-menu">
                    <a href="#">Trang chủ</a>
                    <a href="#">Mua bán</a>
                    <a href="#">Cho thuê</a>
                    <a href="#">Đăng tin</a>
                </div>

                <div className="nav-buttons">
                    <button className="login-btn">Đăng nhập</button>
                    <button className="post-btn">Đăng tin miễn phí</button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;