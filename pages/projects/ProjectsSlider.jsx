import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import projectsSlides from '../../lib/projectsData';
import ProjectGrid from "./ProjectGrid";

export default function ProjectsSlider() {
  return (
    <>
      {/* for larger devices */}
      <div className="hidden xl:flex items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          modules={[Pagination, Mousewheel, Navigation]}
          className="h-[480px]"
        >
          {/* different variant and double mapping instead of using grid because Swiper grid is broken */}
          {projectsSlides(4).map((slide, index) =>
            <SwiperSlide className="hidden" key={`project_${4 * index}->${4 * index + 4}`} >
              <ProjectGrid slide={slide} variant={4} />
            </SwiperSlide>
          )
          }
        </Swiper>
      </div>
      {/* for medium devices */}
      <div className="hidden sm:max-xl:flex">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="h-[210px] md:h-[245px] lg:h-[300px]"
        >
          {/* different variant and double mapping instead of using grid because Swiper grid is broken */}
          {projectsSlides(1).map((slide, index) =>
            <SwiperSlide className="hidden" key={`project_${4 * index}->${4 * index + 4}`} >
              <ProjectGrid slide={slide} variant={1} />
            </SwiperSlide>
          )
          }
        </Swiper >
      </div>
      {/* for small devices */}
      <div className="hidden max-sm:flex">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="h-full"
        >
          {/* different variant and double mapping instead of using grid because Swiper grid is broken */}
          {projectsSlides(1).map((slide, index) =>
            <SwiperSlide className="hidden" key={`project_${4 * index}->${4 * index + 4}`} >
              <ProjectGrid slide={slide} variant={1} />
            </SwiperSlide>
          )
          }
        </Swiper >
      </div>
    </>
  )
} 2
