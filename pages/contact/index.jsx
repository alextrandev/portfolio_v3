import Form from "./Form";
import Seo from "../../components/Seo";

export default function Contact() {
  return (
    <div className='h-full bg-primary/30 overflow-y-auto flex'>
      <Seo
        title="Contact"
        description="Get in touch with Alex Tran — send a message straight to my inbox."
      />
      {/* m-auto centers when content fits and stays scrollable when it doesn't */}
      <div className='container mx-auto my-auto py-24 pb-28 xl:py-32 text-center xl:text-left flex items-center justify-center'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* header and text paragraph */}
          <h1 className='h2 text-center mb-4 md:mb-12'>
            Let&apos;s <span className='text-accent'>connect.</span>
          </h1>
          {/* contact form */}
          <Form />
        </div>
      </div>
    </div>
  )
}
