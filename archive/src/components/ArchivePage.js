import React from "react";
import {
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { ExpandMore, Send } from "@material-ui/icons";
import "./ArchivePage.css";

function ArchivePage() {
  return (
    <div className='archive-page'>
      <h1>ארכיון אירועים</h1>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          aria-label='Expand'
          aria-controls='additional-actions1-content'
          id='additional-actions1-header'
        >
          <TextField
            id='outlined-basic'
            label='Outlined'
            onClick={(event) => event.stopPropagation()}
            style={{ margin: 8 }}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={(event) => event.stopPropagation()}
            endIcon={<Send>send</Send>}
            style={{ margin: 8 }}
          >
            חפש לפי שם
          </Button>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TextField
            id='outlined-basic'
            label='Outlined'
            margin="dense"
            style={{ margin: 8 }}
            onClick={(event) => event.stopPropagation()}
          />
          <TextField
            id='outlined-basic'
            label='Outlined'
            margin="dense"
            style={{ margin: 8 }}
            onClick={(event) => event.stopPropagation()}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={(event) => event.stopPropagation()}
            style={{ margin: 8 }}
            endIcon={<Send>send</Send>}
          >
            חיפוש מתקדם
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ArchivePage;
