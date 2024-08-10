import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";
import ProjectsSlider from './ProjectsSlider';
import IntroText from './IntroText';

export default function projects() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* a header and a text paragraph */}
          <IntroText />
          {/* a slider with all projects */}
          <ProjectsSlider />
        </div>
      </div>
      {/* 2 decoration components */}
      <Circles />
      <Bulb />
    </div>
  )
}
