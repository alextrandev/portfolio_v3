import { motion } from 'framer-motion';
import Image from "next/image";
import { fadeIn } from '../../lib/motionVariants';

export default function Avatar() {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[120px]'
    >
      <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
        <Image
          src={'/avatar.webp'}
          width={368.5}
          height={339}
          alt="Avatar image"
          className="translate-z-0 w-full h-full brightness-75 contrast-150"
          priority
        />
      </div>
    </motion.div>
  )
}
