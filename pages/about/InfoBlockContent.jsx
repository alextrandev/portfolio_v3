import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/motionVariants';
import { aboutData } from '../../lib/aboutData';
import Image from "next/image";
import InfoBlockIcon from './InfoBlockIcon';

export default function InfoBlockContent({ index }) {
  return (
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
          {/* bold text */}
          <p className="font-bold text-accent">{item.bold}</p>
          {/* a seperation dash, only for bigger devices */}
          <div className='hidden md:flex'>-</div>
          {/* year range */}
          <p>{item.year}</p>
          {/* icons */}
          <div className="flex">
            {item.icons?.map(icon =>
              <InfoBlockIcon key={icon.text} icon={icon} />
            )}
          </div>
        </motion.div>
      )}
      {/* This div together with overflow-scroll are to fix a problem of the nav bar cover the content of this page on shorter mobile screen
      - It will offset the main content with a height equal to the nav bar height */}
      <div className='offset-div h-[5.2rem] min-h-[5.2rem] md:hidden'>
        <Image
          width={83.2}
          height={83.2}
          alt="Offset image"
          src={"/logo.svg"}
          className='opacity-0'
        />
      </div>
    </div>
  )
}
