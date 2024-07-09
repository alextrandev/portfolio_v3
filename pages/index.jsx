import ProjectsBtn from '../components/ProjectsBtn';

export default function index() {
  return (
    <div className="bg-primary/60 h-full">
      {/* hero banner container */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/* hero banner text container */}
        <div className="text-center flex flex-col justify-center h-full container mx-auto xl:pt-40 xl:text-left">
          {/* hero title */}
          <h1 className="h2">
            Hello world! I'm
            <span className="text-accent"> Alex Tran</span>
            <div>
              Full-stack web developer
            </div>
          </h1>
          {/* short introduction */}
          <p className="max-w-sm mx-auto mb-10 xl:max-w-xl xl:mx-0 xl:mb-16">
            I have 2 years experience with CMS and Front-end dev. I am currently working on React, Next.js, Symfony and Drupal
          </p>
          {/* button */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
      <div>image</div>
    </div >
  )
}
