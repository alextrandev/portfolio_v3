import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";
import ProjectsSlider from './ProjectsSlider';
import IntroText from './IntroText';
import Seo from '../../components/Seo';

export default function Projects() {
  return (
    <div className='h-full bg-primary/30 overflow-y-auto xl:overflow-hidden flex'>
      <Seo
        title="Projects"
        description="Recent web projects by Alex Tran — live demos and source code, from full-stack apps to CMS builds."
      />
      {/* m-auto centers when content fits and stays scrollable when it doesn't */}
      <div className='container mx-auto my-auto py-32 pb-28 xl:pb-32'>
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
