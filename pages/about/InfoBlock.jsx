import { useState } from "react";
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutData } from '../../lib/aboutData';
import Image from "next/image";

export default function InfoBlock() {
  const [index, setIndex] = useState(0);

  return (
    <div className='flex flex-col w-full xl:max-w-[48%] h-[340px]'>
      {/* section navigation bar */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 md:mb-4"
      >
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
            <h2>{item.title}</h2>
          </a>
        )}
      </motion.div>
      {/* show current section infos */}
      <div className="xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start pb-5">
        {aboutData[index].info.map((item, itemIndex) =>
          <motion.div
            variants={fadeIn('left', 0.1 + itemIndex / 5)}
            initial="hidden"
            animate="show"
            exit="hidden"
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
          </motion.div>
        )}
        <div className='offset-div h-[5.2rem] min-h-[5.2rem] md:hidden'>
          {/* 
              This div together with overflow-scroll are to fix a problem of the nav bar cover the content of this page on shorter mobile screen
              - It will offset the main content with a height equal to the nav bar height
               */}
          <Image
            width={83.2}
            height={83.2}
            alt="Offset image"
            src={"/logo.svg"}
            className='opacity-0'
          />
        </div>
      </div>
    </div>
  )
}
