import React from "react";
import PermissionsUserForm from "./PermissionsUserForm";
import PermissionsForm from "./PermissionsForm";
import "./PermissionsPage.css";

class PermissionsPage extends React.Component {
  render() {
    return (
      <div className="perm-grid">
        <div className="perm-header">רשימת מצרכים</div>
        <div className="perm-form"><PermissionsForm/></div>
        <div className="perm-user-form"><PermissionsUserForm/></div>
      </div>
    );
  }
}

export default PermissionsPage;
