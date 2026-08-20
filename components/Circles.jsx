import Image from "next/image";

export default function Circles() {
  return (
    <div aria-hidden="true" className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse z-10 pointer-events-none select-none">
      <Image
        src={'/circles.webp'}
        width={260}
        height={200}
        alt=""
        className="w-full h-full"
      />
    </div>
  )
}
