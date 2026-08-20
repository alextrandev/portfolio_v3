import Form from "./Form";
import Seo from "../../components/Seo";
import { contactText } from "../../lib/siteText";

export default function Contact() {
  return (
    <div className='h-full bg-primary/30 overflow-y-auto flex'>
      <Seo
        title={contactText.seoTitle}
        description={contactText.seoDescription}
      />
      {/* m-auto centers when content fits and stays scrollable when it doesn't */}
      <div className='container mx-auto my-auto py-24 pb-28 xl:py-32 text-center xl:text-left flex items-center justify-center'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* header and text paragraph */}
          <h1 className='h2 text-center mb-4 md:mb-12'>
            {contactText.heading.start} <span className='text-accent'>{contactText.heading.accent}</span>
          </h1>
          {/* contact form */}
          <Form />
        </div>
      </div>
    </div>
  )
}
