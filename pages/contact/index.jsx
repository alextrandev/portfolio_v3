import FormButton from "./FormButton";

export default function index() {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* header and text paragraph */}
          <h1 className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect.</span>
          </h1>
          {/* contact form */}
          <form className='flex-1 flex items-center flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder='message' className='textarea'></textarea>
            {/* submit button */}
            <FormButton />
          </form>
        </div>
      </div>
    </div>
  )
}