'use client'

import { useState } from "react";
import FormButton from "./FormButton";
import LoadingScreen from '../../components/LoadingScreen';

export default function Form() {
  // this state hold the form input values
  const [mail, setMail] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setMail((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mail),
      });
      const result = await response.json();

      if (response.ok) {
        setResponseMsg('Thank you for the message!');
        setStatus('sent');
      } else {
        setResponseMsg(`Error: ${result.error}`);
        setStatus('failed');
      }
    } catch (error) {
      setResponseMsg('Something went wrong... Please try again!');
      setStatus('failed');
    }
  }

  // to go back from the confirmation screen
  const handleBackToForm = () => {
    if (status === "sent") {
      setMail({ name: '', email: '', subject: '', message: '' });
    }
    setStatus("idle");
  }

  // loading screen when sending message
  if (status === "sending") {
    return (
      <div className="flex-1 flex items-center flex-col gap-6 w-full mx-auto">
        <h2 className="text-xl">Sending message. Please wait!</h2>
        <LoadingScreen />
      </div>
    )
  }

  // message confirmation text
  if (status === "sent" || status === "failed") {
    return (
      <div className="flex-1 flex items-center flex-col gap-6 w-full mx-auto">
        <h2 className="text-xl">{responseMsg}</h2>
        <div onClick={handleBackToForm} >
          <FormButton
            label={status === "failed" ? "Try again" : "Send more message"}
          />
        </div>
      </div>
    )
  }

  return (
    <form
      className='flex-1 flex items-center flex-col gap-6 w-full mx-auto'
      onSubmit={handleSubmit}
    >
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="Name"
          id="name"
          className="input capitalize"
          value={mail.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          className="input"
          value={mail.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        className="input"
        value={mail.subject}
        onChange={handleInputChange}
        required
      />
      <textarea
        placeholder='Message'
        id='message'
        className='textarea'
        value={mail.message}
        onChange={handleInputChange}
        required
      ></textarea>
      {/* submit button */}
      <FormButton label="Send" />
    </form>
  )
}