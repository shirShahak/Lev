import React from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";

import "./PermissionsForm.css";

export default function PermissionsForm() {
  const [state, setState] = React.useState({
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
        <div className="category-title">קטגוריה</div>

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                name="checkedA"
                onChange={handleChange}
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
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
      {renderSingle()}
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
