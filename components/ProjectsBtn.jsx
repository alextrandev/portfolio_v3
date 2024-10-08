import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi2';

export default function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0 scale-[70%] md:scale-100 z-50">
      <Link href={'/projects'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-50">
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt="View my projects button"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  )
}
