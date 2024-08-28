'use client'

import { useState } from "react";
import FormButton from "./FormButton";

export default function Form() {
  const [mail, setMail] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
    setSubmitted(true);
  }

  const handleInputChange = (e) => {
    setMail((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const handleBackToForm = () => {
    setMail({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className="flex-1 flex items-center flex-col gap-6 w-full mx-auto">
        <h2 className="text-xl">Thank you for the message!</h2>
        <div onClick={handleBackToForm} >
          {/* reused the submit button and too lazy to rewrite click handle */}
          <FormButton label="Send more message" />
        </div>
      </div>
    )
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
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className="input"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        className="input"
        required
      />
      <textarea
        placeholder='Message'
        id='message'
        className='textarea'
        required
      ></textarea>
      {/* submit button */}
      <FormButton label="Send" />
    </form>
  )
}
