import Circles from '../../components/Circles';
import { useState } from "react";
import Avatar from '../../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import aboutData from '../../lib/aboutData';

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
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>text</div>
        <div className='flex flex-col w-full xl:max-w-[48%] h-[380px]'>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {/* section navigation bar */}
            {aboutData.map((item, itemIndex) =>
              <a
                key={`${itemIndex}_${item.title}`}
                className={
                  `${index == itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`
                }
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </a>
            )}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {/* show current section infos */}
            {aboutData[index].info.map((item, itemIndex) =>
              <div
                key={`${itemIndex}_${item.title}`}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* section title */}
                <p className="font-light">{item.title}</p>
                <p className="font-bold">{item.bold}</p>
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
                      <div className='absolute top-full mt-5 left-1/2 -translate-x-1/2 hidden xl:group-hover:flex z-10'>
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
    </div>
  )
}
