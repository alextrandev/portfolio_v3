import ProjectsBtn from '../components/ProjectsBtn';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import CardLeft from '../components/CardLeft';

export default function index() {
  return (
    <div className="bg-primary/60 h-full">
      {/* hero banner container */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
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
            Hello world! I'm
            <span className="text-accent"> Alex Tran</span>
            <div>
              Full-stack web developer
            </div>
          </motion.h1>
          {/* short introduction */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            I have 2 years experience with CMS and Front-end dev. I am currently working on React, Next.js, Symfony and Drupal
          </motion.p>
          {/* button for mobile screen */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          {/* button for desktop screen with animation */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* hero banner image container */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
        </div>
        {/* particles */}
        {/* avatar img */}
      </div>
    </div >
  )
}
