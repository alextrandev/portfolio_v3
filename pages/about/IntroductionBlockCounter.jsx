import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { statistic } from '../../lib/aboutData';
import CountUp from 'react-countup';

export default function IntroductionBlockCounter() {
  return (
    <motion.div
      variants={fadeIn('right', 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className='hidden md:block mb-3 xl:mb-0'
    >
      <div className="flex flex-1 xl:gap-x-6">
        {/* single counter */}
        {statistic.map((stat) =>
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
  )
}
