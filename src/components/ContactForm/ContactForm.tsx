import React, { FC } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { Formik, Form } from "formik";
import {FormInput} from './FormInput'

import * as Yup from "yup";

const useStyles = makeStyles(() => {
  return {
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    input: {
      marginBottom: "8px",
      marginTop: "8px",
    },
  };
});
export const ContactForm: FC = () => {
    const classes=useStyles()
  return (
    <>
      <Typography variant="h1">Write me a message</Typography>
      <Typography variant="subtitle1">I'll try to get baćk to you asap.</Typography>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required(
            "I need to know who is writing to me"
          ),
          email: Yup.string()
            .email("I need a valid email in order to respond")
            .required("I need to be able to write back to you"),
          subject: Yup.string().required(
            "Tell me what the email is about, so I don't just ignore it"
          ),
          message: Yup.string().required(
            "You're not going to send me an empty email, are you?"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className={classes.form}>
          <FormInput label="Name" name="fullName" type="text" />
          <FormInput label="Email Address" name="email" type="email" />
          <FormInput label="Subject" name="subject" type="text" />
          <FormInput label="Message" name="message" type="text" multiline rows={4} />
          <Button type="submit">Send Message</Button>
        </Form>
      </Formik>
    </>
  );
};
