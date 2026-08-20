import Image from "next/image";
import Link from "next/link";
import Socials from './Socials';
import { headerText } from '../lib/siteText';

export default function Header() {
  return (
    <header className="absolute z-50 w-full flex items-center md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto sm:p-3">
        <div className="flex flex-row justify-between items-center gap-y-6 py-8 max-sm:flex-col max-sm:gap-0 max-sm:py-5">
          {/* logo */}
          <Link href={'/'} className="flex items-center group hover:cursor-pointer">
            <Image
              src={'/logo.svg'}
              width={65}
              height={65}
              alt="Site logo"
              priority={true}
              className="max-sm:w-10 pointer-events-none select-none group-hover:scale-110"
            />
            <div className="flex flex-row gap-2 xl:flex-col xl:gap-0 group-hover:text-accent transition-all duration-300">
              <span className="h2 text-xl p-0 mb-0 xl:-mb-2">{headerText.name}</span>
              <p className="p-0 m-0 text-xl xl:text-base">{headerText.tagline}</p>
            </div>
          </Link>
          {/* Social links */}
          <Socials />
        </div>
      </div>
    </header>
  )
}
