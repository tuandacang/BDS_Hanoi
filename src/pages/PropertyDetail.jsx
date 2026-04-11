import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PropertyDetail.css';

const properties = {
    1: {
        id: 1,
        title: "Cho thuê phòng trọ full nội thất gần chợ Cổ Nhuế",
        price: "4.500.000",
        area: "25m²",
        address: "Ngõ 68, Phường Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội",
        description: "Phòng trọ rộng rãi, đầy đủ nội thất, gần chợ, trường học và giao thông thuận tiện.",
        images: [
            "/src/image/nha1.jpg",
            "/src/image/nha2.jpg",
            "/src/image/nha3.jpg"
        ],
        lat: 21.0664,
        lng: 105.7828,
        type: "Cho thuê",
        bedrooms: 1,
        bathrooms: 1
    },
    // Có thể thêm nhiều tin khác sau
};

function PropertyDetail() {
    const { id } = useParams();
    const property = properties[id];

    const [currentImage, setCurrentImage] = useState(0);

    if (!property) {
        return <h2>Không tìm thấy tin đăng</h2>;
    }

    return (
        <div className="property-detail-page">
            <Navbar />

            <div className="detail-container">
                {/* Carousel Ảnh */}
                <div className="image-gallery">
                    <img
                        src={property.images[currentImage]}
                        alt={property.title}
                        className="main-image"
                    />
                    <div className="thumbnail-list">
                        {property.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Ảnh ${index + 1}`}
                                className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                                onClick={() => setCurrentImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="detail-info">
                    <div className="detail-header">
                        <span className="tag">{property.type}</span>
                        <h1>{property.title}</h1>
                        <p className="price">{property.price} ₫/tháng</p>
                    </div>

                    <div className="info-grid">
                        <div><strong>Diện tích:</strong> {property.area}</div>
                        <div><strong>Phòng ngủ:</strong> {property.bedrooms}</div>
                        <div><strong>Phòng tắm:</strong> {property.bathrooms}</div>
                        <div><strong>Địa chỉ:</strong> {property.address}</div>
                    </div>

                    <div className="description">
                        <h3>Mô tả</h3>
                        <p>{property.description}</p>
                    </div>

                    {/* Bản đồ nhỏ */}
                    <div className="map-section">
                        <h3>Vị trí trên bản đồ</h3>
                        <div className="map-container">
                            <MapContainer
                                center={[property.lat, property.lng]}
                                zoom={16}
                                style={{ height: "300px", width: "100%", borderRadius: "12px" }}
                            >
                                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <Marker position={[property.lat, property.lng]}>
                                    <Popup>
                                        <strong>{property.title}</strong><br />
                                        {property.address}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    {/* Nút hành động */}
                    <div className="action-buttons">
                        <button className="contact-btn">Liên hệ ngay</button>
                        <button className="save-btn">Lưu tin</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PropertyDetail;