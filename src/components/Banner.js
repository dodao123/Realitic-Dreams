import React from 'react';
import './Banner.css'; // Để thêm kiểu dáng cho Banner

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://iit.com.vn/files/images/Article/5-dieu-can-biet-khi-thiet-ke-website-du-lich.jpg"
        alt="Banner"
        className="banner-image"
      />
      <img
          src="https://tds.indianeagle.com/wp-content/uploads/2023/04/Disabled-Travel-01-640x426.png"
          alt="Banner2"
          className="banner-2-image"
      />
    </div>
  );
};

export default Banner;
