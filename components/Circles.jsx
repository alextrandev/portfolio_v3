import Image from "next/image";

export default function Circles() {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 pointer-events-none select-none">
      <Image
        src={'/circles.png'}
        width={260}
        height={200}
        alt="Decoration image"
        className="w-full h-full"
      />
    </div>
  )
}
