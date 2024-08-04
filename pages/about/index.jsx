import Circles from '../../components/Circles';
import { useState } from "react";
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { aboutData, statistic } from '../../lib/aboutData';
import CountUp from 'react-countup';

export default function About() {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* decoration circle */}
      <Circles />
      {/* decoration avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[120px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* about page text blocks */}
        <div className='flex-1 flex flex-col justify-center xl:ml-24'>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 flex flex-wrap justify-center xl:justify-start text-3xl xl:text-5xl'
          >
            <span>How I became a</span>&nbsp;
            <span><span className='text-accent'>Web developer </span>...</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            I began working with websites 9 years ago, initially building sites using various CMS platforms.
            After gaining experience in my first job, I decided to dive into full-stack programming, starting with React, Symfony, and Drupal.
          </motion.p>
          {/* counters container */}
          <motion.div
            variants={fadeIn('right', 1)}
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
        {/* info block with multiple sections */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[330px]'>
          {/* section navigation bar */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 md:mb-4">
            {aboutData.map((item, itemIndex) =>
              <a
                key={`${itemIndex}_${item.title}`}
                className={
                  // complicated css imcoming... 
                  // basically give each link a small underlined that grow and change color on hover
                  // the last part (tenary operator) simulate an hover state but for when link is selected
                  `
                  cursor-pointer capitalize xl:text-lg relative
                  after:h-[2px] after:absolute after:bottom-1 after:left-0 after:transition-all after:duration-300
                  hover:text-accent hover:scale-110 hover:after:w-[100%] hover:after:bg-accent transition-all  duration-300
                  ${index == itemIndex ? 'text-accent after:w-[100%] after:bg-accent' : 'after:bg-white after:w-8'}
                  `
                }
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </a>
            )}
          </div>
          {/* show current section infos */}
          <div className="xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) =>
              <div
                key={`${itemIndex}_${item.title}`}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* section title */}
                <p className="font-light">{item.title}</p>
                <p className="font-bold text-accent">{item.bold}</p>
                {/* next line is a seperation dash, only for bigger devices */}
                <div className='hidden md:flex'>-</div>
                {/* section text / icons */}
                <p>{item.year}</p>
                <div className="flex">
                  {/* icons */}
                  {item.icons?.map(icon =>
                    <div key={icon.text} className="group px-2 relative">
                      <div className="text-2xl text-white group-hover:text-accent group-hover:scale-125 transition-all duration-300">
                        {icon.icon}
                      </div>
                      {/* hover tooltip */}
                      <div className='absolute top-full mt-5 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex focus:flex active:flex z-10'>
                        <div className='bg-white relative p-1.5 rounded'>
                          <p className="text-xs font-semibold text-black">{icon.text}</p>
                          {/* decorative triangle */}
                          <div className='border-solid border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2.5 left-1/2  -translate-x-1/2'></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
