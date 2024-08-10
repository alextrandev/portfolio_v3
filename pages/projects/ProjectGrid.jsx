import Image from "next/image";
import ProjectSlideOverlay from "./ProjectSlideOverlay";

export default function ProjectGrid({ slide, variant }) {
  let variantClass = "";
  switch (variant) {
    case 4:
      variantClass = "grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer"
      break;
    case 2:
      variantClass = "flex items-center justify-center"
      break;
    default:
      variantClass = "flex items-center justify-center"
      break;
  }

  return (
    // <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
    <div className={variantClass}>
      {slide?.map((project, index) =>
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
            {/* a gradient overlay background, show when tap or hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#3c14b5] to-[#e838cc] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
            {/* an overlay with gradient background and info, show when tap or hover */}
            <ProjectSlideOverlay project={project} />
          </div>
        </div>
      )}
    </div>
  )
}
