import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  Button,
  TextField,
  FormHelperText
} from "@material-ui/core";
import { sendPermissionsRequest } from "../actions/permissionsActions";
import { Send, SentimentSatisfied } from "@material-ui/icons";
import "./PermissionsUserForm.css";

function PermissionsUserForm(props) {
  const [state, setState] = useState({ phone: "", email: "" });
  const send = () => {
    console.log(state);
    props.sendPermissionsRequest(); //* לשמור את השדות כמשתנים ולשלוח אותם
  };

  return (
    <>
      <div className='username'>{props.username}</div>
      <FormControl>
        <TextField
          aria-describedby='phone-helper-text'
          id='phone'
          label='מספר טלפון'
          color={"primary"}
          value={state.phone}
          error={state.phone !== "" && !/^[0-9]*$/i.test(state.phone)}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
        />
      </FormControl>
      <FormControl>
        <TextField
          aria-describedby='email-helper-text'
          id='email'
          label='מייל'
          color='primary'
          value={state.email}
          error={
            state.email !== "" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)
          }
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        <FormHelperText id='component-helper-text'>
          העתק את כתובת המייל כמו שהיא רשומה ב outlook שלך
          {/* 
          {values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)} */}
        </FormHelperText>
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        endIcon={<Send />}
        onClick={send}
      >
        שלח בקשה
      </Button>
    </>
  );
}

const mapStateToProps = (state) => {
  return { username: state.username };
};

export default connect(mapStateToProps, {
  sendPermissionsRequest
})(PermissionsUserForm);
