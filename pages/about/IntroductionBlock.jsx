import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import IntroductionBlockCounter from './IntroductionBlockCounter';

export default function IntroductionText() {
  return (
    <div className='flex-1 flex flex-col justify-center xl:ml-24'>
      <h1 className='h2 flex flex-wrap justify-center xl:justify-start text-3xl xl:text-5xl'>
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
      <motion.p
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0'
      >
        I began working with websites 9 years ago, initially building sites using various CMS platforms.
        After gaining experience in my first job, I decided to dive into full-stack programming, starting with React, Symfony, and Drupal.
      </motion.p>
      {/* counters container */}
      <IntroductionBlockCounter />
    </div>
  )
}
