import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import localization from "moment/locale/he";
moment().locale("he", localization);

const columns = [
  { id: "ID", label: "ID", minWidth: 50 },
  { id: "name", label: "שם אירוע", minWidth: 100 },
  {
    id: "startTime",
    label: "זמן התחלה",
    minWidth: 100
  },
  {
    id: "endTime",
    label: "זמן סיום",
    minWidth: 100
  },
  {
    id: "participants",
    label: "משתתפים",
    minWidth: 100
  }
];

function createData(ID, name, start, end) {
  const startTime = moment().subtract(start, "seconds").format("LLLL");
  const endTime = moment().subtract(end, "seconds").format("LLLL");
  const participants = start / end;
  return { ID, name, startTime, endTime, participants };
}

const rows = [
  createData("1", "יונה", 1324171354, 3287263),
  createData("2", "חשוב", 1403500365, 9596961),
  createData("3", "חשוב מאוד", 60483973, 301340),
  createData("4", "הלו קיטי", 327167434, 9833520),
  createData("5", "מסטיקים", 37602103, 9984670),
  createData("135", "קרמבו", 25475400, 7692024),
  createData("546", "אירוע חשוב ביותר", 83019200, 357578),
  createData("457", "שם של אירוע ארוך מאוד מאוד מאוד", 4857000, 70273),
  createData("4577", "מלא אירועים", 126577691, 1972550),
  createData("678", "עד מתי", 126317000, 377973),
  createData("789", "קורונה", 67022000, 640679),
  createData("7899", "2020", 67545757, 242495),
  createData("7897", "בא לי חול", 146793744, 17098246),
  createData("890", "כמה עוד", 200962417, 923768),
  createData("364", "הללויה", 210147125, 8515767)
];

export default function ArchiveTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const openEvent = (event) => {
    console.log(event);
    window.alert(event.name);
  };

  return (
    <Paper>
      <TableContainer style={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((event) => {
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    //onClick={openEvent.bind(event)}
                    key={event.ID}
                  >
                    {columns.map((column) => {
                      const value = event[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
