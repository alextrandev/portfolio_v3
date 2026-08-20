export default function InfoBlockIcon({ icon }) {
  if (!icon) return null;

  return (
    // tabIndex makes the tooltip keyboard-reachable; the aria-label names the otherwise-unlabeled SVG
    <li
      className="group px-2 relative flex flex-col items-center gap-1 focus-visible:outline focus-visible:outline-accent rounded-sm"
      tabIndex={0}
      role="img"
      aria-label={icon.text}
    >
      <div aria-hidden="true" className="text-2xl text-white group-hover:text-accent group-hover:scale-125 transition-all duration-300">
        {icon.icon}
      </div>
      {/* visible caption below xl, where the hover tooltip doesn't exist */}
      <span className="xl:hidden text-[10px] leading-tight text-white/60 text-center">
        {icon.text}
      </span>
      {/* hover/focus tooltip */}
      <div aria-hidden="true" className='absolute top-full mt-5 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex xl:group-focus-within:flex z-10'>
        <div className='bg-white relative p-1.5 rounded-sm'>
          <p className="text-xs font-semibold text-black whitespace-nowrap">{icon.text}</p>
          {/* decorative triangle */}
          <div className='border-solid border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2.5 left-1/2 -translate-x-1/2'></div>
        </div>
      </div>
    </li>
  )
}
