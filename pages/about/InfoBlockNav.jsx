import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutData } from '../../lib/aboutData';

export default function InfoBlockNav({ index, setIndex }) {
  return (
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
            // base styling
            `cursor-pointer capitalize xl:text-lg relative transition-all  duration-300 ` +
            // give each link a small underlined
            `after:h-[2px] after:absolute after:bottom-1 after:left-0 after:transition-all after:duration-300 ` +
            // hover state: make the underline grow, change text and udnerline color
            `hover:text-accent hover:scale-110 hover:after:w-[100%] hover:after:bg-accent ` +
            // same effect as the hover state but for when the link is active
            `${index == itemIndex ? 'text-accent after:w-[100%] after:bg-accent' : 'after:bg-white after:w-8'}`
          }
          onClick={() => setIndex(itemIndex)}
        >
          <h2>{item.title}</h2>
        </a>
      )}
    </motion.div>
  )
}
