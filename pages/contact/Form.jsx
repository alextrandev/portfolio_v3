import FormButton from "./FormButton";

export default function Form() {
  return (
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
  )
}
