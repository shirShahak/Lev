import React from "react";
import PermissionsForm from "./PermissionsForm";
import "./PermissionsPage.css";

class PermissionsPage extends React.Component {
  render() {
    return (
      <div className="perm-grid">
        <div className="perm-header">עמוד הרשאות</div>
        <div className="perm-form"><PermissionsForm/></div>
        <div className="perm-user-form">פרטי משתמש</div>
      </div>
    );
  }
}

export default PermissionsPage;
