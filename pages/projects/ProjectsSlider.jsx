import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import projectsSlides from '../../lib/projectsData';
import Image from "next/image";

export default function ProjectsSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] lg:max-xl:h-[280px]"
    >
      {/* double mapping instead of using grid because Swiper grid is broken */}
      {projectsSlides(4).map((slide, index) =>
        <SwiperSlide key={`project_${4 * index}->${4 * index + 4}`} >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.map((project, index) =>
              <div
                key={`${index}_${project.title}`}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden">
                  {/* thumbnail image */}
                  <Image
                    src={project.image}
                    width={500}
                    height={300}
                    alt="Project thumbnail"
                  />
                  {/* overlay gradient filter */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      )
      }
    </Swiper >
  )
}
