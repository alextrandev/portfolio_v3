import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

// classes shared by every overlay row: slide up into view on hover/focus, always visible below sm
const reveal = "translate-y-52 max-sm:translate-y-0 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300";

export default function ProjectSlideOverlay({ project }) {
  if (!project) return null;

  return (
    <div className="absolute flex items-center text-center">
      <div className="flex flex-col items-center gap-2 p-2 text-sm tracking-wide">
        {/* title */}
        <div className={`text-xl font-bold text-white ${reveal}`}>
          {project.title}
        </div>
        {/* tech stack */}
        <div className={`flex flex-wrap justify-center gap-1 ${reveal} delay-100`}>
          {project.techStack?.map((tech) =>
            <span
              key={tech}
              className="bg-white/80 text-[10px] text-black font-bold uppercase px-2 py-0.5 tracking-wider rounded-xl"
            >
              {tech}
            </span>
          )}
        </div>
        {/* description */}
        <p className={`leading-5 text-white ${reveal} delay-150`}>{project.description}</p>
        {/* links */}
        <div>
          {project.links?.map((link) =>
            <Link
              key={link.title}
              className={`flex ${reveal} delay-200`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-accent transition-all duration-300 flex items-center gap-1 text-white font-semibold">
                {link.title}
                <BsArrowRight aria-hidden="true" />
                <span className="sr-only">(opens in new tab)</span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
