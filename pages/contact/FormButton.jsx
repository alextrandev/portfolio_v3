import { BsArrowRight } from 'react-icons/bs';

export default function FormButton() {
  return (
    <button className='btn rounded-full border border-white/50 max-w-[170px] px-24 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Send</span>
      <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
    </button>
  )
}
