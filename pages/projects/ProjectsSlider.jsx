import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation } from "swiper";
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import projectsSlides from '../../lib/projectsData';
import ProjectGrid from "./ProjectGrid";

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';

export default function ProjectsSlider() {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='w-full xl:max-w-[65%]'
    >
      {/* different variant of the same thing because Swiper grid attribute is broken */}
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
          {projectsSlides(1).map((slide, index) =>
            <SwiperSlide className="hidden" key={`project_${4 * index}->${4 * index + 4}`} >
              <ProjectGrid slide={slide} variant={1} />
            </SwiperSlide>
          )
          }
        </Swiper >
      </div>
    </motion.div>
  )
} 2
