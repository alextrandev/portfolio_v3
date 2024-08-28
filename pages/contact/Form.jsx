'use client'

import { useState } from "react";
import FormButton from "./FormButton";

export default function Form() {
  const [mail, setMail] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
  }

  const handleInputChange = (e) => {
    setMail((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <form
      className='flex-1 flex items-center flex-col gap-6 w-full mx-auto'
      onChange={handleInputChange}
      onSubmit={handleSubmit}
    >
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="input capitalize"
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className="input"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        className="input"
      />
      <textarea
        placeholder='Message'
        id='message'
        className='textarea'
      ></textarea>
      {/* submit button */}
      <FormButton />
    </form>
  )
}
