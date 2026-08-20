import { useState } from "react";
import Image from "next/image";
import ProjectSlideOverlay from "./ProjectSlideOverlay";

export default function ProjectGrid({ slide, variant }) {
  // on touch-sized screens there is no hover, so a tap toggles the overlay
  const [activeTitle, setActiveTitle] = useState(null);

  const variantClass = variant === 4
    ? "grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer"
    : "flex items-center justify-center";

  return (
    <div className={variantClass}>
      {slide?.map((project) => {
        const active = activeTitle === project.title;
        return (
          <div
            key={project.title}
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
            onClick={() => setActiveTitle(active ? null : project.title)}
          >
            <div className="flex items-center justify-center relative overflow-hidden group">
              {/* thumbnail image */}
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={`${project.title} thumbnail`}
                sizes="(max-width: 640px) 90vw, (max-width: 1200px) 45vw, 350px"
              />
              {/* a gradient overlay background; shown on hover/focus, or after a tap on touch-sized screens */}
              <div className={`absolute inset-0 bg-linear-to-br from-transparent via-[#3c14b5] to-[#e838cc] opacity-0 ${active ? 'max-sm:opacity-90' : ''} group-hover:opacity-90 group-focus-within:opacity-90 transition-all duration-700`}></div>
              {/* an overlay with gradient background and info, shown on hover/focus/tap */}
              <ProjectSlideOverlay project={project} variant={variant} active={active} />
            </div>
          </div>
        );
      })}
    </div>
  )
}
