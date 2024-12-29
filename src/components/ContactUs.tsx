import React from "react";
import FooterContactForm from "./FooterContactForm";
import FooterLearn from "./FooterLearn";

const ContactUs = () => {
  return (
    <section className="relative z-10 flex flex-col md:flex-row">
      <FooterLearn />
      <FooterContactForm />
    </section>
  );
};

export default ContactUs;
