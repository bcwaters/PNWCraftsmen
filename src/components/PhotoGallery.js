import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './GalleryStyles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function PhotoGallery(props) {




  return (
    <>
      <Swiper
      
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{display:props.showGallery?"block":"none"}}
      >


      {props.galleryImages.map(
        (entry) => (
        <SwiperSlide>
          <img id="GalleryIcon"  src={entry.img} alt="PNWCraftsmen" />
            <div onClick={props.toggleGallery} className="close">Close X</div>
            <div className="GalleryCaption">{entry.desc}</div>
        </SwiperSlide>

      ))}





      </Swiper>
    </>
  );
}
