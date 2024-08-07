import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";
import ProjectsSlider from './ProjectsSlider';

export default function projects() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text container */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-8'>My projects <span className='text-accent'>.</span></h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Check out my recent web projects. Feel free to visit the live websites for a demonstration or checkout the public repository for the source codes
            </p>
          </div>
          {/* projects slider */}
          <div className='w-full xl:max-w-[65%]'>
            <ProjectsSlider />
          </div>
        </div>
      </div>
      {/* 2 decoration components */}
      <Circles />
      <Bulb />
    </div>
  )
}
