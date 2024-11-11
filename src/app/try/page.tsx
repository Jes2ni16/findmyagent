
"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

export default function Homes() {

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  let sliderRef1 = useRef<Slider | null>(null);
  let sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }
}, []);

  const sliderSettings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const sliderSettings2 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
};

  return (
    <div className="slider-container">
    <h2>Slider Syncing (AsNavFor)</h2>
    <h4>First Slider</h4>
    <Slider
        asNavFor={nav2|| undefined} // Use nav2 for syncing
        ref={sliderRef1} // Assign ref directly
        {...sliderSettings1} // Use settings defined above
    >
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
    </Slider>

    <h4>Second Slider</h4>
    <Slider
        asNavFor={nav1|| undefined} // Use nav1 for syncing
        ref={sliderRef2} // Assign ref directly
        {...sliderSettings2} // Use settings defined above
    >
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
    </Slider>
</div>
  );
}
