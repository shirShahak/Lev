import React from "react";
import {
  Button,
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { ExpandMore, Send } from "@material-ui/icons";
import "./ArchivePage.css";
import ArchiveTable from "./ArchiveTable";

function ArchivePage() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className='archive-page'>
      <h1>ארכיון אירועים</h1>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <TextField
            id='name-filter'
            label='שם אירוע'
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
          <Grid container justify='space-around'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='start-date'
                  label='תאריך התחלה'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  style={{ margin: 8, width: 200 }}
                />
                <KeyboardTimePicker
                  margin='normal'
                  id='start-time'
                  label='שעת התחלה'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </div>
              <div>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='end-date'
                  label='תאריך סיום'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                  style={{ margin: 8, width: 200 }}
                />
                <KeyboardTimePicker
                  margin='normal'
                  id='end-time'
                  label='שעת סיום'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </div>
            </MuiPickersUtilsProvider>
            <div>
              <TextField
                id='outlined-basic'
                label='מזהה אירוע'
                style={{ margin: 8 }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
            <div>
              <TextField
                id='outlined-basic'
                label='משתתפים'
                style={{ margin: 8 }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
            <div>
              <Button
                variant='contained'
                color='primary'
                onClick={(event) => event.stopPropagation()}
                style={{ margin: 8 }}
                endIcon={<Send>send</Send>}
              >
                חיפוש מתקדם
              </Button>
            </div>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ArchiveTable />
    </div>
  );
}

export default ArchivePage;
