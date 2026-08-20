import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { projectsText } from '../../lib/siteText';

export default function IntroText() {
  return (
    <div className='text-center flex xl:w-[35%] flex-col lg:text-left mb-4 xl:mb-0'>
      <motion.h1
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 xl:mt-8'
      >
        {projectsText.heading}
        <span className='text-accent'> .</span>
      </motion.h1>
      <motion.p
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='mb-4 max-w-[400px] mx-auto lg:mx-0'
      >
        {projectsText.intro}
      </motion.p>
    </div>
  )
}
