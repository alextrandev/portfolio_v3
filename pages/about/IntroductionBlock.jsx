import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { statistic } from '../../lib/aboutData';
import CountUp from 'react-countup';

export default function IntroductionText() {
  return (
    <div className='flex-1 flex flex-col justify-center xl:ml-24'>
      <h2 className='h2 flex flex-wrap justify-center xl:justify-start text-3xl xl:text-5xl'>
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
      </h2>
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
      <motion.div
        variants={fadeIn('right', 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden md:block mb-3 xl:mb-0'
      >
        <div className="flex flex-1 xl:gap-x-6">
          {/* single counter */}
          {statistic.map((stat, index) =>
            <div
              key={`${stat.index}_${stat.text}`}
              className="relative flex flex-1 flex-col xl:block items-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 last:after:w-0"
            >
              <h3 className='text-lg xl:text-2xl font-extrabold text-accent xl:mb-1'>
                <CountUp start={0} end={stat.number} duration={5} />
                {stat.plusSign && ' +'}
              </h3>
              <p className='text-xs tracking-[1px] leading-[1.4] max-w-[100px]'>{stat.text}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
