import React from "react";
import { connect } from "react-redux";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";
import { LibraryAddCheck, LibraryAddCheckOutlined } from "@material-ui/icons";
import {
  getPermissions,
  togglePermission,
  toggleCategory
} from "../actions/permissionsActions";
import "./PermissionsForm.css";

class PermissionsForm extends React.Component {
  // toggle all in category
  categoryChange = ({ target }) => {
    this.props.toggleCategory(this.props.permissions[target.name], target);
  };

  handleChange = (categoryName, { target }) => {
    this.props.togglePermission(
      this.props.permissions[categoryName],
      categoryName,
      target
    );
  };

  renderCategory = (categoryName, index) => {
    var checked = true;
    var marked = false;

    Object.keys(this.props.permissions[categoryName]).forEach((key) => {
      checked = checked && this.props.permissions[categoryName][key]; // if all checked
      marked = marked || this.props.permissions[categoryName][key]; // if at least one is checked
    });

    return (
      <div className='perm-category' key={index}>
        <FormGroup>
          <FormControlLabel
            className='category-title'
            control={
              <Checkbox
                checked={checked}
                name={categoryName}
                onChange={this.categoryChange}
                icon={
                  marked ? (
                    <LibraryAddCheckOutlined color='primary' />
                  ) : (
                    <LibraryAddCheckOutlined />
                  )
                }
                checkedIcon={<LibraryAddCheck color='primary' />}
              />
            }
            label={categoryName}
          />
          {Object.keys(this.props.permissions[categoryName]).map((key, i) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.permissions[categoryName][key]}
                    name={key}
                    onChange={(e) => this.handleChange(categoryName, e)}
                    color='primary'
                  />
                }
                label={key}
                key={i}
              />
            );
          })}
        </FormGroup>
      </div>
    );
  };

  componentDidMount() {
    this.props.getPermissions();
  }

  render() {
    if (this.props.permissions === null) {
      return null;
    }

    return (
      <>
        {Object.keys(this.props.permissions).map((key, index) => {
          return this.renderCategory(key, index);
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { permissions: state.permissionsReducer.permissions };
};

export default connect(mapStateToProps, {
  getPermissions,
  togglePermission,
  toggleCategory
})(PermissionsForm);
