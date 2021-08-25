import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

import { useField } from "formik";

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

export const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      label={label}
      id={props.id || props.name}
      variant="outlined"
      fullWidth
      {...field}
      {...props}
      helperText={meta.touched && meta.error ? <div>{meta.error}</div> : null}
    />
  );
};