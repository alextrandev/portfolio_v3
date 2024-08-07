import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

// swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import projectsSlides from '../../lib/projectsData';

export default function ProjectsSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {projectsSlides.map((item, index) =>
        <SwiperSlide key={`${index}_${item.title}`}>
          <img src={item.image} alt="" />
        </SwiperSlide>
      )}
    </Swiper>
  )
}
