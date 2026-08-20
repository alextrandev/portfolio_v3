import Image from 'next/image';

export default function Bulb() {
  return (
    <div aria-hidden="true" className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse z-10 w-[200px] xl:w-[260px] pointer-events-none select-none'>
      <Image
        src={'/bulb.webp'}
        width={260}
        height={200}
        alt=''
        className='w-full h-full'
      />
    </div>
  )
}
