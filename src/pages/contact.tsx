import React, { FC } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";

const ContactPage: FC = () => {
  
  return (
    <Layout>
      <Section>
        <ContactForm />
      </Section>
    </Layout>
  );
};

export default ContactPage;
