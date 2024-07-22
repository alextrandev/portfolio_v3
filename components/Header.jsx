import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto ">
        <div>
          {/* logo */}
          <Link href={'/'} className="flex items-center">
            <Image
              src={'/logo.svg'}
              width={65}
              height={65}
              alt="Site logo"
              priority={true}
            />
            <div className="hidden xl:flex xl:flex-col">
              <h1 className="h2 text-xl p-0 -mb-2">Alex Tran</h1>
              <p className="p-0 m-0">portfolio</p>
            </div>
          </Link>
          {/* Social links */}
        </div>
      </div>
    </header>
  )
}
