import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  FormHelperText
} from "@material-ui/core";
import "./PermissionsUserForm.css";

export default function PermissionsUserForm() {
  return (
    <div>
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
          label="מייל צבאי"
          color="primary"
        />
        <FormHelperText id="component-helper-text">
          העתק את כתובת המייל הסודי ביותר כמו שהיא רשומה ב outlook שלך
        </FormHelperText>
      </FormControl>
      
    </div>
  );
}
