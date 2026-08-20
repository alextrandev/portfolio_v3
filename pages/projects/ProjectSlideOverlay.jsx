import Link from "next/link";
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";

// classes shared by every overlay row: slide up into view on hover/focus;
// below sm there is no hover, so `active` (set by tapping the card) reveals it
const revealFor = (active) =>
  `translate-y-52 ${active ? 'max-sm:translate-y-0' : ''} group-hover:translate-y-0 group-focus-within:translate-y-0 transition-all duration-300`;

// store platform -> logo + label for the app store links
const storeMeta = {
  ios: { Icon: FaApple, label: 'App Store' },
  android: { Icon: FaGooglePlay, label: 'Google Play' },
};

export default function ProjectSlideOverlay({ project, variant, active }) {
  if (!project) return null;
  const reveal = revealFor(active);

  return (
    <div className={`absolute flex items-center text-center ${variant === 4 ? '' : 'sm:max-md:scale-75'}`}>
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
        {/* description; tighter type where cells are small (xl grid and tablet slides) */}
        <p className={`text-white ${variant === 4 ? 'text-xs leading-4' : 'max-sm:leading-5 sm:text-xs sm:leading-4 sm:max-md:line-clamp-4'} ${reveal} delay-150`}>
          {project.description}
        </p>
        {/* links + iOS/Android app store links, one wrapping row to save vertical space */}
        <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-1 ${reveal} delay-200`}>
          {project.links?.map((link) =>
            <Link
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-accent transition-all duration-300 flex items-center gap-1 text-white font-semibold">
                <FaGlobe aria-hidden="true" />
                {link.title}
                <span className="sr-only">(opens in new tab)</span>
              </span>
            </Link>
          )}
          {project.stores?.map((store) => {
            const meta = storeMeta[store.platform];
            if (!meta) return null;
            return (
              <Link
                key={store.platform}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white hover:text-accent transition-all duration-300"
              >
                <meta.Icon className="text-lg" aria-hidden="true" />
                <span className="text-xs font-semibold">{meta.label}</span>
                <span className="sr-only">(opens in new tab)</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}
