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
    <div className="xl:py-6 flex flex-col gap-y-4 items-center xl:items-start pb-5">
      {aboutData[index].info.map((item, itemIndex) =>
        <motion.div
          variants={fadeIn('left', 0.1 + itemIndex / 5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          key={item.title + itemIndex}
          className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
        >
          {/* section title */}
          <p className="font-light">{item.title}</p>
          {/* bold text */}
          <p className="font-bold text-accent-light">{item.bold}</p>
          {/* a separation dash, only for bigger devices */}
          {item.year && <div aria-hidden="true" className='hidden md:flex'>-</div>}
          {/* year range */}
          <p>{item.year}</p>
          {/* icons */}
          <ul className="flex list-none">
            {item.icons?.map(icon =>
              <InfoBlockIcon key={icon.text} icon={icon} />
            )}
          </ul>
        </motion.div>
      )}
    </div>
  )
}
