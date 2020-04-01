import React from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@material-ui/core";
import { LibraryAddCheck, LibraryAddCheckOutlined } from "@material-ui/icons";
import "./PermissionsForm.css";

export default function PermissionsForm() {
  const [state, setState] = React.useState({
    checked1: true,
    checkedA: true,
    checkedB: true,
    checkedC: false
  });
  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const renderSingle = () => {
    return (
      <div className="perm-category">
        <FormControlLabel
          className="category-title"
          control={
            <Checkbox
              checked={state.checked1}
              name="checked1"
              onChange={handleChange}
              icon={
                state.checkedA || state.checkedB ? (
                  <LibraryAddCheckOutlined color="primary" />
                ) : (
                  <LibraryAddCheckOutlined />
                )
              }
              checkedIcon={<LibraryAddCheck color="primary" />}
            />
          }
          label="קטגוריה "
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                name="checkedA"
                onChange={handleChange}
                color="primary"
              />
            }
            label="shir "
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                name="checkedB"
                onChange={handleChange}
                color="primary"
              />
            }
            label="shir shahak"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedC}
                name="checkedC"
                onChange={handleChange}
                color="primary"
              />
            }
            label=" shahak"
          />
        </FormGroup>
      </div>
    );
  };
  return (
    <>
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
    </>
  );
}
