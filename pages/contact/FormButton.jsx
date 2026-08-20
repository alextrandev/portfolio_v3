import { BsArrowRight } from 'react-icons/bs';

export default function FormButton({ label, type = 'button', onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className='btn rounded-full border border-white/50 max-w-[370px] px-12 mt-2 md:mt-0 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent focus-visible:border-accent group'
    >
      <span className='group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500'>{label}</span>
      <BsArrowRight aria-hidden="true" className='translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
    </button>
  )
}
