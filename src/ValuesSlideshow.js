// ValuesSlideshow.js
import React from 'react';
import Slider from 'react-slick';
import './valuesslideshow.css';

const values = [
  {
    title: 'Integrity',
    content: 'We uphold the highest standards of integrity in all our actions, ensuring trust and transparency in every interaction. We believe that honesty and strong moral principles are the foundation of our business practices.',
  },
  {
    title: 'Innovation',
    content: 'We constantly seek innovative solutions to improve the job-seeking experience and stay ahead in the industry. Our commitment to creativity and cutting-edge technology drives our growth and success.',
  },
  {
    title: 'Excellence',
    content: 'We strive for excellence in everything we do, aiming to exceed expectations and deliver outstanding results. Our dedication to quality and continuous improvement ensures that we achieve the highest standards.',
  },
  {
    title: 'Community',
    content: 'We foster a strong sense of community, encouraging collaboration and mutual support among job seekers and employers. Our focus on building meaningful connections and a supportive network is central to our mission.',
  },
];

function ValuesSlideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div className="values-slideshow">
      <Slider {...settings}>
        {values.map((value, index) => (
          <div key={index} className="value-slide">
            <h3>{value.title}</h3>
            <p>{value.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ValuesSlideshow;
