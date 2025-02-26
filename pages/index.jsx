import ProjectsBtn from '../components/ProjectsBtn';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '../lib/motionVariants';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';

export default function index() {
  return (
    <div className="bg-primary/60 h-full">
      {/* hero banner container */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-10">
        {/* hero banner text container */}
        <div className="text-center flex flex-col justify-center h-full container mx-auto xl:pt-40 xl:text-left">
          {/* hero title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <div className='hidden md:block'>Hello world!</div>
            <div>I am<span className="text-accent animate-pulse"> Alex Tran</span></div>
            <div>Software engineer</div>
          </motion.h1>
          {/* short introduction */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-3 md:mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            I have 3 years experience with CMS and Frontend development<br />
            I am currently working on React, Node.js, Next.js and Express
          </motion.p>
          {/* button to projects page */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex justify-center xl:justify-start z-50'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* hero banner image container */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none'>
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-[-4rem] lg:scale-[82%] lg:right-[4%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div >
  )
}
