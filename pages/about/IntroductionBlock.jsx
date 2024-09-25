import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import IntroductionBlockCounter from './IntroductionBlockCounter';

export default function IntroductionText() {
  return (
    <div className='flex-1 flex flex-col justify-center xl:ml-24'>
      {/* header for bigger screen */}
      <h1 className='h2 hidden md:flex flex-wrap justify-center xl:justify-start text-3xl xl:text-5xl'>
        <motion.span
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >How I became a</motion.span>&nbsp;
        <motion.span
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        ><span className='text-accent'>Web developer </span>...</motion.span>
      </h1>
      {/* header for mobile */}
      <motion.h1
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 md:hidden flex flex-wrap justify-center text-3xl mb-0 md:mb-4'
      >
        About me&nbsp;
        <span className='text-accent'>...</span>
      </motion.h1>
      <motion.p
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0'
      >
        I began building websites 9 years ago with various CMS platforms.
        I am currently diving into full-stack programming, starting with React, Symfony, and Drupal.
      </motion.p>
      {/* counters container */}
      <IntroductionBlockCounter />
    </div>
  )
}
