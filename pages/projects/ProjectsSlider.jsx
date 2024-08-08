import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

// swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import projectsSlides from '../../lib/projectsData';
import Image from "next/image";
import Link from "next/link";

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
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* thumbnail image */}
                  <Image
                    src={project.image}
                    width={500}
                    height={300}
                    alt="Project thumbnail"
                  />
                  {/* overlay gradient filter */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3c14b5] to-[#e838cc] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                  {/* project info shown when hover */}
                  <div className="absolute flex items-center text-center">
                    <div className="flex flex-col items-center gap-2 p-2 text-[13px] tracking-[0.2em]">
                      {/* title */}
                      <div className="text-xl font-bold text-accent translate-y-52 group-hover:-translate-y-0 transition-all duration-300">{project.title}</div>
                      {/* tech stack */}
                      <div className="flex gap-1 translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-100">
                        {project.techStack.map((tech) =>
                          <p className="bg-white/50 hover:bg-gray-100 text-[0.55rem] text-black font-bold uppercase px-2 py-0.5 tracking-wider rounded-xl">{tech}</p>
                        )}
                      </div>
                      {/* description */}
                      <p className="leading-4 translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-150">{project.description}</p>
                      {/* links */}
                      <div>
                        {project.links.map((link) =>
                          <Link
                            className="flex items-center gap-1 hover:text-accent translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-200"
                            href={link.url}
                            target="_blank"
                          >
                            {link.title}
                            <BsArrowRight />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
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
