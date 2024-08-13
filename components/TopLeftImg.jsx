import Image from "next/image";

export default function TopLeftImg() {
  return (
    <div className="absolute left-0 mix-blend-color-dodge z-9 w-[200px] xl:w-[400px] opacity-50 pointer-events-none select-none">
      <Image src='/top-left-img.webp' width={400} height={400} alt="Decoration image" />
    </div>
  )
}
