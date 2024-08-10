import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ProjectSlideOverlay({ project }) {
  return (
    <div className="absolute flex items-center text-center">
      <div className="flex flex-col items-center gap-2 p-2 text-[13px] tracking-[0.2em]">
        {/* title */}
        <div className="text-xl font-bold text-accent translate-y-52 group-hover:-translate-y-0 transition-all duration-300">
          {project.title}
        </div>
        {/* tech stack */}
        <div className="flex gap-1 translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-100">
          {project.techStack?.map((tech) =>
            <p
              key={tech}
              className="bg-white/50 hover:bg-gray-100 text-[0.55rem] text-black font-bold uppercase px-2 py-0.5 tracking-wider rounded-xl"
            >
              {tech}
            </p>
          )}
        </div>
        {/* description */}
        <p className="leading-4 translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-150">{project.description}</p>
        {/* links */}
        <div>
          {project.links?.map((link) =>
            <Link
              key={link.title}
              className="flex translate-y-52 group-hover:-translate-y-0 transition-all duration-300 delay-200"
              href={link.url}
              target="_blank"
            >
              <span className="hover:text-accent transition-all duration-300 flex items-center gap-1">
                {link.title}
                <BsArrowRight />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
