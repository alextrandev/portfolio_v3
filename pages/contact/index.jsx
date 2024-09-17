import Form from "./Form";

export default function index() {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* header and text paragraph */}
          <h1 className='h2 text-center mb-12'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </h1>
          {/* contact form */}
          <Form />
        </div>
      </div>
    </div>
  )
}