import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormThree = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxdohie",
        "template_z5cioqm",
        form.current,
        "jpLEXw_LKyA6GgI_U"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <Input
        name="message"
        label="Your message"
        type="textarea"
        isClear={isMessageSent}
      /> */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input name="name" label="Name" isClear={isMessageSent} className="form-control-lg"  style={{ border: "solid 1px grey" }} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">email</label>
        <input name="email" label="Email" isClear={isMessageSent} className="form-control-lg" style={{ border: "solid 1px  grey" }} />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">phone</label>
        <input name="phone" label="phone" isClear={isMessageSent} className="form-control-lg"  style={{ border: "solid 1px grey" }} />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">message</label>
        <textarea className="form-control" rows={3} name="message" isClear={isMessageSent} style={{ border: "solid 1px grey" }} />
      </div>
      <div className="form-group">
        <input type="submit" value="Send message" />
        <p className="form-messege"></p>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormThree;
