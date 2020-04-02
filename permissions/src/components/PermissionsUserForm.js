import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  FormHelperText
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import "./PermissionsUserForm.css";

export default function PermissionsUserForm() {
  const username = `שיר שחק`;
  return (
    <>
      <div className="username">{username}</div>
      <FormControl>
        <TextField
          aria-describedby="phone-helper-text"
          id="phone"
          label="מספר טלפון"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <TextField
          aria-describedby="email-helper-text"
          id="email"
          label="מייל"
          color="primary"
        />
        <FormHelperText id="component-helper-text">
          העתק את כתובת המייל כמו שהיא רשומה ב outlook שלך
        </FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" endIcon={<Send />}>
        שלח בקשה
      </Button>
    </>
  );
}
