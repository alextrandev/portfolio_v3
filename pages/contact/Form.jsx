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
      [e.target.placeholder]: e.target.value
    }))
  }

  return (
    <form
      className='flex-1 flex items-center flex-col gap-6 w-full mx-auto'
      onChange={handleInputChange}
    >
      {/* input group */}
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="name"
          className="input"
        />
        <input
          type="email"
          placeholder="email"
          className="input"
        />
      </div>
      <input
        type="text"
        placeholder="subject"
        className="input"
      />
      <textarea
        placeholder='message'
        className='textarea'
      ></textarea>
      {/* submit button */}
      <FormButton handleSubmit={handleSubmit} />
    </form>
  )
}
