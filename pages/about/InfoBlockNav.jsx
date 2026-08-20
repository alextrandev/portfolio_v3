import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutData } from '../../lib/aboutData';

export default function InfoBlockNav({ index = 0, setIndex = () => {} }) {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-wrap justify-center xl:justify-start gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 md:mb-4"
    >
      {aboutData.map((item, itemIndex) =>
        <button
          key={item.title}
          type="button"
          aria-pressed={index === itemIndex}
          className={
            // base styling
            // text-2xl/bold matches the browser-default h2 the labels used to be wrapped in
            `cursor-pointer capitalize text-2xl xl:text-[27px] font-bold relative transition-all duration-300 ` +
            // give each button a small underline
            `after:h-[2px] after:absolute after:bottom-1 after:left-0 after:transition-all after:duration-300 ` +
            // hover state: make the underline grow, change text and underline color
            `hover:text-accent hover:scale-110 hover:after:w-full hover:after:bg-accent ` +
            // same effect as the hover state but for when the section is active
            `${index === itemIndex ? 'text-accent after:w-full after:bg-accent' : 'after:bg-white after:w-8'}`
          }
          onClick={() => setIndex(itemIndex)}
        >
          {item.title}
        </button>
      )}
    </motion.div>
  )
}
