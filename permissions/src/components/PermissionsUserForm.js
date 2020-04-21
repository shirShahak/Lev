import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  Button,
  TextField,
  FormHelperText
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import "./PermissionsUserForm.css";
import XLSX from "xlsx";

function PermissionsUserForm(props) {
  const [userDetails, setUserDetails] = useState({ phone: "", email: "" });

  const send = () => {
    let data = [];

    // convert data to simple array
    Object.keys(props.permissions).forEach((categoryName) => {
      Object.keys(props.permissions[categoryName]).forEach((permissionName) => {
        if (props.permissions[categoryName][permissionName] === true)
          data = [...data, { "שם הרשאה:": permissionName }];
      });
    });

    // WRITE TO EXCEL
    var worksheet = XLSX.utils.json_to_sheet(data);
    var new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, "הרשאות");
    XLSX.writeFile(new_workbook, `${props.username}.xlsb`);

    // props.sendPermissionsRequest(props.username, {
    //   userDetails,
    //   permissions: props.permissions
    // });
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
          value={userDetails.phone}
          error={
            userDetails.phone !== "" && !/^[0-9]*$/i.test(userDetails.phone)
          }
          onChange={(e) =>
            setUserDetails({ ...userDetails, phone: e.target.value })
          }
        />
      </FormControl>
      <FormControl>
        <TextField
          aria-describedby='email-helper-text'
          id='email'
          label='מייל'
          color='primary'
          value={userDetails.email}
          error={
            userDetails.email !== "" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userDetails.email)
          }
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <FormHelperText id='component-helper-text'>
          העתק את כתובת המייל כמו שהיא רשומה ב outlook שלך
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
  return {
    username: state.username,
    permissions: state.permissionsReducer.permissions
  };
};

export default connect(mapStateToProps)(PermissionsUserForm);
