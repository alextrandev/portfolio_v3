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
        setResponseMsg(result.error ?? 'Something went wrong... Please try again!');
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
      <div role="status" aria-live="polite" className="flex-1 flex items-center flex-col gap-6 w-full mx-auto">
        <h2 className="text-xl">Sending message. Please wait!</h2>
        <LoadingScreen />
      </div>
    )
  }

  // message confirmation text
  if (status === "sent" || status === "failed") {
    return (
      <div role="status" aria-live="polite" className="flex-1 flex items-center flex-col gap-6 w-full mx-auto">
        <h2 className="text-xl">{responseMsg}</h2>
        <FormButton
          type="button"
          onClick={handleBackToForm}
          label={status === "failed" ? "Try again" : "Send another message"}
        />
      </div>
    )
  }

  return (
    <form
      className='flex-1 flex items-center flex-col gap-2 md:gap-6 w-full mx-auto'
      onSubmit={handleSubmit}
    >
      <div className="flex gap-x-2 md:gap-x-6 w-full">
        <div className="w-full">
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            autoComplete="name"
            maxLength={100}
            className="input capitalize"
            value={mail.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="sr-only">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            autoComplete="email"
            maxLength={200}
            className="input"
            value={mail.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <label htmlFor="subject" className="sr-only">Subject</label>
      <input
        type="text"
        placeholder="Subject"
        id="subject"
        name="subject"
        maxLength={200}
        className="input"
        value={mail.subject}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="message" className="sr-only">Message</label>
      <textarea
        placeholder='Message'
        id='message'
        name='message'
        maxLength={5000}
        className='textarea'
        value={mail.message}
        onChange={handleInputChange}
        required
      ></textarea>
      {/* submit button */}
      <FormButton label="Send" type="submit" />
    </form>
  )
}
