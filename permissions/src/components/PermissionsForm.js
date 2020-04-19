import React from "react";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import { LibraryAddCheck, LibraryAddCheckOutlined } from "@material-ui/icons";
import "./PermissionsForm.css";

export default function PermissionsForm() {
  // stub
  const [state, setState] = React.useState({
    "מוצרי חלב": {
      גבינה: false,
      חלב: false,
      קוטג: false,
      שוקו: false,
      יוגורט: false
    },
    ירקות: {
      מלפפון: false,
      עגבניה: false,
      גזר: false
    },
    "לחמים ומאפים": {
      לחמניות: false,
      פיתות: false,
      חלות: false,
      לחמים: false
    },
    "בשר, עוף ודגים": {
      "עוף טחון": false,
      "בשר טחון": false,
      "חזה עוף": false,
      דג: false
    },
  });

  // toggle all in category
  const categoryChange = (event) => {
    const permissions = {}; 

    Object.keys(state[event.target.name]).forEach((key) => {
      permissions[key] = event.target.checked;
    });

    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: { ...permissions },
      };
    });

    console.log([event.target.name], event.target.checked);
  };

  const handleChange = (category, { target }) => {
    setState((prev) => {
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [target.name]: target.checked
        },
      };
    });
    console.log([target.name], target.checked);
  };

  const renderCategory = (categoryName) => {
    var checked = true;
    var marked = false;

    Object.keys(state[categoryName]).forEach((key) => {
      checked = checked && state[categoryName][key]; // if all checked
      marked = marked || state[categoryName][key]; // if at least one is checked
    });

    console.log(checked);
    console.log(marked);

    return (
      <div className="perm-category">
        <FormGroup>
          <FormControlLabel
            className="category-title"
            control={
              <Checkbox
                checked={checked}
                name={categoryName}
                onChange={categoryChange}
                icon={
                  marked ? (
                    <LibraryAddCheckOutlined color="primary" />
                  ) : (
                    <LibraryAddCheckOutlined />
                  )
                }
                checkedIcon={<LibraryAddCheck color="primary" />}
              />
            }
            label={categoryName}
          />
          {Object.keys(state[categoryName]).map((key) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state[categoryName][key]}
                    name={key}
                    onChange={(e) => handleChange(categoryName, e)}
                    color="primary"
                  />
                }
                label={key}
              />
            );
          })}
        </FormGroup>
      </div>
    );
  };
  return (
    <>
      {Object.keys(state).map((key) => {
        return renderCategory(key);
      })}
    </>
  );
}
