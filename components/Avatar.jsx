import Image from "next/image";

export default function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src={'/avatar.webp'}
        width={737}
        height={678}
        alt="Avatar image"
        className="translate-z-0 w-full h-full brightness-75 contrast-150"
      />

    </div>
  )
}
