import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';

export default function IntroText() {
  return (
    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
      <motion.h2
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 xl:mt-8'
      >
        My projects
        <span className='text-accent'> .</span>
      </motion.h2>
      <motion.p
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='mb-4 max-w-[400px] mx-auto lg:mx-0'
      >
        Check out my recent web projects. Feel free to visit the live websites for a demonstration or checkout the public repository for the source codes
      </motion.p>
    </div>
  )
}
