import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutData } from '../../lib/aboutData';
import InfoBlockIcon from './InfoBlockIcon';
import LoadingScreen from '../../components/LoadingScreen';

export default function InfoBlockContent({ index = 0 }) {
  if (!aboutData?.[index]) {
    return <LoadingScreen />
  }

  return (
    <div className="xl:py-6 flex flex-col gap-y-4 items-center xl:items-start pb-5 xl:pr-16 max-xl:w-full max-xl:px-2">
      {aboutData[index].info.map((item, itemIndex) =>
        <motion.div
          variants={fadeIn('left', 0.1 + itemIndex / 5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          key={item.title + itemIndex}
          className={
            `flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60` +
            // below xl each icon group becomes its own card so sections read clearly
            (item.icons ? ' max-xl:w-full max-xl:max-w-md max-xl:flex-col max-xl:gap-y-3 max-xl:rounded-xl max-xl:bg-white/5 max-xl:px-3 max-xl:py-4' : '')
          }
        >
          {/* entry text flows as one wrapping line on md+, stacks on mobile */}
          <p className={item.icons ? 'max-xl:font-semibold max-xl:text-white/80 max-xl:tracking-wide' : ''}>
            <span className="block md:inline font-light">{item.title}</span>
            {item.bold &&
              <span className="block md:inline font-bold text-accent-light"> {item.bold}</span>
            }
            {item.year && <span aria-hidden="true" className="hidden md:inline"> - </span>}
            {item.year && <span className="block md:inline whitespace-nowrap">{item.year}</span>}
          </p>
          {/* icons: aligned 4-column grid below xl, inline hover row on xl */}
          <ul className="max-xl:grid max-xl:grid-cols-4 max-xl:w-full max-xl:gap-y-4 flex flex-wrap justify-center xl:justify-start gap-y-3 list-none">
            {item.icons?.map(icon =>
              <InfoBlockIcon key={icon.text} icon={icon} />
            )}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
