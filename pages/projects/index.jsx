import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";
import ProjectsSlider from './ProjectsSlider';

export default function projects() {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        {/* text container */}
        <div>text</div>
        {/* projects slider */}
        <ProjectsSlider />
      </div>
      <Bulb />
    </div>
  )
}
