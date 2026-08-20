import { useState } from "react";
import FormButton from "./FormButton";
import LoadingScreen from '../../components/LoadingScreen';
import { formText } from '../../lib/siteText';

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
        setResponseMsg(formText.sent);
        setStatus('sent');
      } else {
        setResponseMsg(result.error ?? formText.failed);
        setStatus('failed');
      }
    } catch (error) {
      setResponseMsg(formText.failed);
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
        <h2 className="text-xl">{formText.sending}</h2>
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
          label={status === "failed" ? formText.tryAgain : formText.sendAnother}
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
          <label htmlFor="name" className="sr-only">{formText.fields.name}</label>
          <input
            type="text"
            placeholder={formText.fields.name}
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
          <label htmlFor="email" className="sr-only">{formText.fields.email}</label>
          <input
            type="email"
            placeholder={formText.fields.email}
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
      <label htmlFor="subject" className="sr-only">{formText.fields.subject}</label>
      <input
        type="text"
        placeholder={formText.fields.subject}
        id="subject"
        name="subject"
        maxLength={200}
        className="input"
        value={mail.subject}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="message" className="sr-only">{formText.fields.message}</label>
      <textarea
        placeholder={formText.fields.message}
        id='message'
        name='message'
        maxLength={5000}
        className='textarea'
        value={mail.message}
        onChange={handleInputChange}
        required
      ></textarea>
      {/* submit button */}
      <FormButton label={formText.send} type="submit" />
    </form>
  )
}
