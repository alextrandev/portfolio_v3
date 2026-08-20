import Circles from '../../components/Circles';
import Avatar from './Avatar';
import IntroductionBlock from './IntroductionBlock';
import InfoBlock from './InfoBlock';
import Seo from '../../components/Seo';

export default function About() {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto overflow-x-hidden xl:overflow-hidden">
      <Seo
        title="About"
        description="How I became a web developer — skills, education, experience and awards of Alex Tran, software engineer."
      />
      {/* main container */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* intro block with a header, some text and a counter component */}
        <IntroductionBlock />
        {/* info block with multiple sections */}
        <InfoBlock />
      </div>
      {/* decoration circle */}
      <Circles />
      {/* decoration avatar for larger devices */}
      <Avatar />
    </div>
  )
}
