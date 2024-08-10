export default function InfoBlockIcon({ icon }) {
  return (
    <div className="group px-2 relative">
      <div className="text-2xl text-white group-hover:text-accent group-hover:scale-125 transition-all duration-300">
        {icon.icon}
      </div>
      {/* hover tooltip */}
      <div className='absolute top-full mt-5 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex focus:flex active:flex z-10'>
        <div className='bg-white relative p-1.5 rounded'>
          <p className="text-xs font-semibold text-black">{icon.text}</p>
          {/* decorative triangle */}
          <div className='border-solid border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2.5 left-1/2  -translate-x-1/2'></div>
        </div>
      </div>
    </div>
  )
}
