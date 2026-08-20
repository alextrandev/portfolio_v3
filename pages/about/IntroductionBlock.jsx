import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutText } from '../../lib/siteText';
import IntroductionBlockCounter from './IntroductionBlockCounter';

export default function IntroductionText() {
  return (
    <div className='md:flex-1 flex flex-col justify-center xl:ml-24'>
      {/* header for bigger screen */}
      <h1 className='h2 hidden md:flex flex-wrap justify-center xl:justify-start text-3xl xl:text-5xl'>
        <motion.span
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >{aboutText.heading.start}</motion.span>&nbsp;
        <motion.span
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='text-accent'
        >{aboutText.heading.accent}</motion.span>&nbsp;
        <motion.span
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >{aboutText.heading.end}</motion.span>
      </h1>
      {/* header for mobile */}
      <motion.h1
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='h2 md:hidden flex flex-wrap justify-center text-3xl'
      >
        {aboutText.headingMobile}&nbsp;
        <span className='text-accent'>...</span>
      </motion.h1>
      {/* journey paragraphs */}
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 flex flex-col gap-y-3'
      >
        {aboutText.paragraphs.map((paragraph) =>
          <p key={paragraph}>{paragraph}</p>
        )}
      </motion.div>
      {/* counters container */}
      <IntroductionBlockCounter />
    </div>
  )
}
