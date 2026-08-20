import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Navigation, Keyboard, A11y } from "swiper/modules";
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
          navigation={true}
          keyboard={{ enabled: true }}
          modules={[Pagination, Mousewheel, Navigation, Keyboard, A11y]}
          className="h-[480px]"
        >
          {projectsSlides(4).map((slide, index) =>
            <SwiperSlide key={`slide-4-${index}`}>
              <ProjectGrid slide={slide} variant={4} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      {/* for medium devices */}
      <div className="hidden sm:max-xl:flex">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          keyboard={{ enabled: true }}
          modules={[Pagination, Keyboard, A11y]}
          className="h-[210px] md:h-[245px] lg:h-[300px]"
        >
          {projectsSlides(1).map((slide, index) =>
            <SwiperSlide key={`slide-2-${index}`}>
              <ProjectGrid slide={slide} variant={1} />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      {/* for small devices: a vertical stack the page scrolls through */}
      <div className="hidden max-sm:flex flex-col gap-y-6">
        {projectsSlides(1).map((slide, index) =>
          <ProjectGrid key={`stack-1-${index}`} slide={slide} variant={1} />
        )}
      </div>
    </motion.div>
  )
}
