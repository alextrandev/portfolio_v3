import ProjectsBtn from '../components/ProjectsBtn';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '../lib/motionVariants';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';
import Seo from '../components/Seo';
import { homeText } from '../lib/siteText';

export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      <Seo description={homeText.seoDescription} />
      {/* hero banner container */}
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10 z-10">
        {/* hero banner text container */}
        <div className="relative z-10 text-center flex flex-col justify-center h-full container mx-auto xl:pt-40 xl:text-left">
          {/* hero title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className='hidden md:block'>{homeText.greeting}</span>
            <span className="block">{homeText.iAm}<span className="text-accent animate-pulse"> {homeText.name}</span></span>
            <span className="block">{homeText.role}</span>
          </motion.h1>
          {/* short introduction */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto mb-3 md:mb-10 xl:max-w-xl xl:mx-0 xl:mb-16"
          >
            {homeText.intro[0]}<br />
            {homeText.intro[1]}
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
      <div className='w-full xl:w-300 h-full absolute right-0 bottom-0 pointer-events-none'>
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
          className='w-full h-full max-w-184.25 max-h-169.5 absolute -bottom-32 lg:-bottom-16 lg:scale-[82%] lg:right-[4%]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}
