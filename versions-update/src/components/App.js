import React from "react";
import { AppBar, IconButton, Badge } from "@material-ui/core";
import { Notifications as NotificationsIcon } from "@material-ui/icons";
import moment from "moment";

import PopupContent from "./PopupContent";
import { ShowVersionUpdateUntil } from "../mock";

function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const togglePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const showVersionUpdate = moment(
    ShowVersionUpdateUntil,
    "DD/MM/YYYY"
  ).isSameOrAfter(moment().startOf("day"));

  return (
    <div className='App'>
      <AppBar className='app-bar'>
        <div>לב הים</div>
        <div>
          <IconButton color='inherit' onClick={togglePopper}>
            <Badge
              badgeContent={"!"}
              color='secondary'
              invisible={!showVersionUpdate}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
      </AppBar>
      <PopupContent
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        togglePopper={togglePopper}
        showVersionUpdate={showVersionUpdate}
      />
    </div>
  );
}

export default App;
