import React from "react";
import styles from "./SlideShow.module.css";
import { SingleMovieCard } from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movies, light = false }) {
  return (
    <div>
      <h2 className={`${styles.title} ${light ? styles.light : ''}`}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={20}
          slidesPerView={5}
        >
          {(movies || []).map((movie) => (
            <SwiperSlide key={movie.id}>
              <SingleMovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default SlideShow;
